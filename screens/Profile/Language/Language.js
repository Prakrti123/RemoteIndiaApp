import React, { Component } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { Header, LineBreaker, RadioSelector } from "../../../components/Index";
import { COLORS, dummyData, icons } from "../../../constants";
import LangStyle from "./LangStyle";
import { handleToggle } from "../../../store/action/toggleActions";

class Language extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        IsSelected: 'English (US)',
    }

    render() {

        console.log(this.state.IsSelected)

        const {
            IsSelected
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Language'}
                    backPress={() => {
                        this.props.navigation.goBack();
                    }}
                    leftComponent={icons.BackIcon}
                />
            )
        }

        const switchLanguage = (name) => {
            return(
                this.setState({
                    IsSelected: name,
                })
            )
        }

        const render_Language = () => {
            return (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[LangStyle.content]}>

                    {/* suggested */}
                    <Text style={[LangStyle.heading, {
                        color: this.props.appThem2?.text_Black_White,
                    }]}>
                        Suggested
                    </Text>

                    {dummyData.language.map((item, index) => {
                        return (
                            item.suggested
                                ?
                                <RadioSelector
                                    key={`language-${item.id}`}
                                    name={item.name}
                                    suggested={item.suggested}
                                    onPress={() => {switchLanguage(item.name)}}
                                    IsSelected={IsSelected === item.name ? icons.Check : icons.UnCheck}
                                />
                                :
                                <></>
                        )
                    })}

                    <Text style={[LangStyle.heading, {
                        color: this.props.appThem2?.text_Black_White,
                    }]}>
                        Language
                    </Text>

                    {dummyData.language.map((item, index) => {
                        return (
                            item.suggested
                                ?
                                <></>
                                :
                                <RadioSelector
                                    key={`language-${item.id}`}
                                    name={item.name}
                                    suggested={item.suggested}
                                    onPress={() => {switchLanguage(item.name)}}
                                    IsSelected={IsSelected === item.name ? icons.Check : icons.UnCheck}
                                />
                        )
                    })}

                </ScrollView>
            )
        }

        return (
            <View style={[LangStyle.main, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>

                {/* header */}
                {renderHeader()}

                {/* languages */}
                {render_Language()}
            </View>

        )
    }
}

// get all data of the var from redux
const mapStateToProps = (state) => ({
    appTheme: state.Globle.appTheme,
    appThem2: state.Globle.appTheme,
    DarkMode: state.Globle.darkMode,
    error: state.error
})

// call the action from redux
const mapDispatchProps = {
    handleToggle
}


export default connect(mapStateToProps, mapDispatchProps)(Language);