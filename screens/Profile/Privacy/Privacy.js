import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { Header } from "../../../components/Index";
import { dummyData, icons, SIZES } from "../../../constants";
import PrivacyStyle from "./PrivacyStyle";
import { handleToggle } from "../../../store/action/toggleActions";

class Privacy extends Component {

    render() {

        const renderHeader = () => {
            return (
                <Header
                    title={'Privacy Policy'}
                    backPress={() => {
                        this.props.navigation.goBack();
                    }}
                    leftComponent={icons.BackIcon}
                />
            )
        }

        const renderContent = () => {
            return(
                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[PrivacyStyle.content, {
                    paddingBottom: 20,
                }]}>

                    {dummyData.Privacy.map((item, index) => {
                        return(
                            <View style={[PrivacyStyle.txtSection]}>

                                <Text style={[PrivacyStyle.headTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}>
                                    {item.id}. {item.name}
                                </Text>

                                <Text style={[PrivacyStyle.smallTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}>
                                    {item.description}
                                </Text>
                            </View>
                        )
                    })}

                </ScrollView>
            )
        }

        return(
            <View style={[PrivacyStyle.main, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>
                
                {/* header */}
                {renderHeader()}

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

export default connect(mapStateToProps, mapDispatchProps)(Privacy);