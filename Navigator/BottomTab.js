import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, useRoute } from "@react-navigation/native";
import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Appearance
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import BottomTabStyle from "./BottomTabStyle/BottomTabStyle";
import HomeStackNavigation, { CalendarStackNavigator, InboxStackNavigator } from "./StackNavigator";
import { BookingStackNavigator } from "./StackNavigator";
import { ProfileStackNavigator } from "./StackNavigator";
import { connect } from "react-redux";
import { handleToggle } from "../store/action/toggleActions";

const Tab = createBottomTabNavigator();

const tabOptions = {
    activeTintColor: COLORS.OrangeBG,
    height: SIZES.height * 0.18,
}

class BottomTab extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        route: this.props.route,
        theme: this.props.theme,
        name: this.props.route,

    }

    render() {

        const {
            route, theme,
            name,
        } = this.state;

        const getTabBarVisibility = (route) => {
            const routeName = route.name
                ?
                // route.state.routes[route.state.index].name
                route.name
                :
                ''

            // console.log(this.state)

            if (routeName === 'ChatScreen') {
                return false
            }

            return true
        }

        return (
            <Tab.Navigator
                initialRouteName="HomePage"
                tabBarOption={[tabOptions, {
                }]}
                screenOptions={({ route }) => ({
                    headerTitle: false,
                    tabBarStyle: [BottomTabStyle.tabBar, { backgroundColor: this.props.appThem2?.bottomTab }],
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: this.props.appThem2?.activeIcon,
                    tabBarInactiveTintColor: this.props.appThem2?.InactiveIcon,
                    tabBarIcon: ({ focused }) => {
                        const tintColor = focused ? COLORS.white : this.props.appThem2?.InactiveIcon;
                        const BtnStyle = BottomTabStyle.BtnStyle
                        const label = this.props.appThem2?.InactiveIcon

                        switch (route.name) {
                            case "Home":
                                return (

                                    <View style={focused ? [BtnStyle, {
                                        borderColor: COLORS.white2,
                                        backgroundColor: this.props.appThem2?.active_BG,
                                    }] : [BottomTabStyle.center]}>
                                        <Image
                                            source={icons.Home}
                                            resizeMode={"contain"}
                                            style={[BottomTabStyle.HomeIcon, { tintColor: tintColor }]}
                                        />
                                        {focused ? <></>
                                            :
                                            <Text style={[BottomTabStyle.text, { color: label }]}>
                                                {route.name}
                                            </Text>}
                                    </View>
                                )
                            case "Booking":
                                return (
                                    <View style={focused ? [BtnStyle, {
                                        borderColor: COLORS.white2,
                                        backgroundColor: this.props.appThem2?.active_BG,
                                    }] : [BottomTabStyle.center]}>
                                        <Image
                                            source={icons.Chart}
                                            resizeMode={"contain"}
                                            style={[BottomTabStyle.HomeIcon, { tintColor: tintColor }]}
                                        />
                                        {focused ? <></>
                                            :
                                            <Text style={[BottomTabStyle.text, { color: label }]}>
                                                {route.name}
                                            </Text>}
                                    </View>
                                )
                            case "Inbox":
                                return (
                                    <View style={focused ? [BtnStyle, {
                                        borderColor: COLORS.white2,
                                        backgroundColor: this.props.appThem2?.active_BG,
                                    }] : [BottomTabStyle.center]}>
                                        <Image
                                            source={icons.chat}
                                            resizeMode={"contain"}
                                            style={[BottomTabStyle.HomeIcon, { tintColor: tintColor }]}
                                        />
                                        {focused ? <></>
                                            :
                                            <Text style={[BottomTabStyle.text, { color: label }]}>
                                                {route.name}
                                            </Text>}
                                    </View>
                                )
                            case "Profile":
                                return (
                                    <View style={focused ? [BtnStyle, {
                                        borderColor: COLORS.white2,
                                        backgroundColor: this.props.appThem2?.active_BG,
                                    }] : [BottomTabStyle.center]}>
                                        <Image
                                            source={icons.Profile}
                                            resizeMode={"contain"}
                                            style={[BottomTabStyle.HomeIcon, { tintColor: tintColor }]}
                                        />
                                        {focused ? <></>
                                            :
                                            <Text style={[BottomTabStyle.text, { color: label }]}>
                                                {route.name}
                                            </Text>}
                                    </View>
                                )
                        }
                    }
                })}
            >
                {/* Home Stack Navigator */}
                <Tab.Screen
                    name={"Home"}
                    component={HomeStackNavigation}
                    options={({ route }) => (
                        {}
                    )}
                />

                {/* Booking Stack Navigator */}
                <Tab.Screen
                    name={"Booking"}
                    // component={HomeStackNavigation}
                    component={BookingStackNavigator}
                />

                {/* Inbox Stack Navigator */}
                <Tab.Screen
                    name="Inbox"
                    component={InboxStackNavigator}
                    
                />

                {/* Profile Stack Navigator */}
                <Tab.Screen
                    name="Profile"
                    component={ProfileStackNavigator}
                />

            </Tab.Navigator>
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

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(BottomTab);