import React, { Component } from "react";
import { Animated, Appearance, View, Text } from "react-native";
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";
import { Header, OfferService } from "../../../components/Index";
import { COLORS, dummyData, icons } from "../../../constants";
import AllServiceStyle from "./AllServiceStyle/AllServiceStyle";

class AllService extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        theme: this.props.theme,
    }

    render() {

        const {
            theme
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={"All Services"}
                    backPress={() => { this.props.navigation.goBack() }}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                />
            )
        }

        const renderContent = () => {
            return (
                <View>
                    {/* serviceView */}
                    <Animated.ScrollView
                        contentContainerStyle={AllServiceStyle.ServiceView}
                        scrollEnabled
                    >
                        {dummyData.AllService.map((item, index) => {
                            return (
                                <OfferService
                                    key={`AllService-${item.id}`}
                                    item={item}
                                    id={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    color={item.color}
                                    colorBg={item.colorBg}
                                    btn_BG={this.props.appThem2?.btn_BG}
                                    border={this.props.appThem2?.btn_Border}
                                    text={this.props.appThem2?.text_Black_White}
                                    onPress={() => this.props.navigation.navigate("Cleaning", {title: item.title})}
                                />
                            )
                        })}
                    </Animated.ScrollView>
                </View>
            )
        }

        return (
            <View style={[AllServiceStyle.mainView, {
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

export default connect(mapStateToProps, mapDispatchProps)(AllService);