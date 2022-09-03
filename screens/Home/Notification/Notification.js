import { theme } from "native-base";
import React, { Component } from "react";
import { Appearance, View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";
import { Header, NotiComponent } from "../../../components/Index";
import { dummyData, icons } from "../../../constants";
import NotificationStyle from "./NotificationStyle/NotificationStyle";

class Notification extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        theme: this.props.theme,
    }

    render() {

        const renderHeader = () => {
            return (
                <Header
                    title={"Notification"}
                    backPress={() => { this.props.navigation.goBack() }}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={NotificationStyle.content}>
                    <FlatList
                        data={dummyData.Notification}
                        keyExtractor={item => `${item.id}`}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={NotificationStyle.list}
                        renderItem={({ item, index }) => (
                            <View>
                                <Text style={[NotificationStyle.date, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}>
                                    {item.date}
                                </Text>

                                {item.id === 1 ?
                                    <FlatList
                                        data={dummyData.TodayNoti}
                                        keyExtractor={item => `${item.id}`}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) => (
                                            <NotiComponent
                                                icon={item.icon}
                                                circle={item.circle}
                                                bg={item.imageBg}
                                                color={item.color}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                            />
                                        )}
                                    />
                                    :
                                    <></>
                                }

                                {item.id === 2 ?
                                    <FlatList
                                        data={dummyData.YesterdayNoti}
                                        keyExtractor={item => `${item.id}`}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) => (
                                            <NotiComponent
                                                icon={item.icon}
                                                circle={item.circle}
                                                bg={item.imageBg}
                                                color={item.color}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                            />
                                        )}
                                    />
                                    :
                                    <></>
                                }

                                {item.id === 3 ?
                                    <FlatList
                                        data={dummyData.AprilNoti}
                                        keyExtractor={item => `${item.id}`}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) => (
                                            <NotiComponent
                                                icon={item.icon}
                                                circle={item.circle}
                                                bg={item.imageBg}
                                                color={item.color}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                            />
                                        )}
                                    />
                                    :
                                    <></>
                                }
                            </View>
                        )}
                    />
                </View>
            )
        }

        return (
            <View style={[NotificationStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>
                {/* Header */}
                {renderHeader()}

                {/* Notification section */}
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

export default connect(mapStateToProps, mapDispatchProps)(Notification);