import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { connect } from "react-redux";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import CleaningStyle from "./CleaningStyle";
import { handleToggle } from "../../../../store/action/toggleActions";

class Cleaning extends Component {

    constructor(props) {
        super(props)
        // function Props(props)
    }

    state = {
        // theme: this.props.theme,
        BookMark: false,
    }


    render() {

        const {
            theme, BookMark
        } = this.state;

        // const renderHeader = () => {
        //     return (
        //         <Header
        //             title={"Cleaning"}
        //             leftComponent={icons.BackIcon}
        //             rightComponent={icons.Search}
        //             morePress={() => { }}
        //         />
        //     )
        // }

        const renderContent = () => {
            return (
                <View style={[CleaningStyle.content]}>

                    <FlatList
                        contentContainerStyle={CleaningStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Cleaning}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {
                                        service: 'Cleaning',
                                        sName: 'House Cleaning',
                                        params: {
                                            title: 'House Cleaning'
                                        },
                                    })
                                }}
                                key={`Cleaning-${item.id}`}
                                id={item.id}
                                item={item}
                                saved={BookMark}
                                text_Black={this.props.appThem2?.text_Black_White}
                                text_Gray={this.props.appThem2?.text_Gray_Scale}
                                colorBg={this.props.appThem2?.option_BG}
                                border={this.props.appThem2?.option_Border}
                            />
                        )}
                    />
                </View>
            )
        }

        return (
            <View style={[CleaningStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG
            }]}>

                {/* header */}
                {/* {renderHeader()} */}

                {/* content */}
                {renderContent()}

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

export default connect(mapStateToProps, mapDispatchProps)(Cleaning);