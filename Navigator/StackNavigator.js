import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    Appearance
} from "react-native";
import { getFocusedRouteNameFromRoute, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, icons, SIZES } from "../constants";
import StackNavStyle from "./StackNavStyle/StackNaveStyle";
import {
    AllService, Bookmark, Cleaning,
    Home, Notification, OfferPage,
    Painting, PopService, Repairing,
    Search,
    Laundry, Appliance, Plumbing,
    Shifting, BookingPage, ProfilePage,
    ServiceDetails, BookCleaning,
    Inbox, ChatScreen, Edit,
    NotiScreen, Payment, AddCard,
    Security, Language, Privacy,
    InviteFriend, Help, Calendar, 
    BookingDetail, AddPromo, Location, 
    PaymentMethod, ReviewScreen, PinScreen, 
    MsgWorker, Wallet,

} from "../screens/Index";
import HomeStyle from "../screens/Home/HomeStyle/HomeStyle";
import HomePage from "../screens/Home/HomePage";
import E_Receipt from "../screens/BookingDetails/E_Receipt/E_Receipt";
import { connect } from "react-redux";
import { handleToggle } from "../store/action/toggleActions";
import { background } from "native-base/lib/typescript/theme/styled-system";

const Stack = createStackNavigator();

const bottomBarCondition = (navigation, route, name, theme) => {

    const scheme = Appearance.getColorScheme();
    theme = scheme === 'light' ? false : true;

    if (route === name || getFocusedRouteNameFromRoute(route) === undefined) {
        navigation.setOptions({
            tabBarStyle: theme === false ? [StackNavStyle.tabBar] : [StackNavStyle.tabBar, { backgroundColor: COLORS.purple }],
        });
        console.log("StackNav   ", route)
        // console.log(theme === false ? "shown" : "shown Purple")

    }
    else {
        navigation.setOptions({
            tabBarStyle: {
                display: 'none'
            }
        });
        // console.log("hidden")

    }
};

class HomeStackNavigation extends Component {

    constructor(props) {
        super(props)
    }

    state = {
    }

    componentDidMount() {
        // console.log("this.props.route", this.props.route);
        // (async (route) => {
        // bottomBarCondition(this.props.navigation, this.state.route, 'HomePage', this.state.theme);
        // })();
        // { bottomBarCondition(this.props.navigation, this.props.route, "Home", this.state.theme) }
    }


    render() {
        const {
        } = this.state;

        // bottomBarCondition(navigation, stackNav_Route, "HomePage")

        return (
            <Stack.Navigator
                initialRouteName="HomePage"
                screenOptions={({ route }) =>
                ({
                    headerStyle: [StackNavStyle.MainHeader, { backgroundColor: this.props.appThem2?.screen_BG }],
                })
                }
            >

                {/* {({route}) => {
                    console.log(route, "route")
                    bottomBarCondition(navigation, route, "HomePage")
                }} */}

                <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="OfferPage"
                    component={OfferPage}
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="AllService"
                    component={AllService}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="PopService"
                    component={PopService}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Bookmark"
                    component={Bookmark}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                {/* service pages */}
                <Stack.Screen
                    name="Cleaning"
                    component={Cleaning}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                {route.params.title}
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    this.props.navigation.navigate("HomePage");
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                        // headerRight: () => (<></>)
                    })}
                />

                <Stack.Screen
                    name="Repairing"
                    component={Repairing}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Painting"
                    component={Painting}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Laundry"
                    component={Laundry}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Appliance"
                    component={Appliance}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Plumbing"
                    component={Plumbing}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="Shifting"
                    component={Shifting}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />

                <Stack.Screen
                    name="ServiceDetails"
                    component={ServiceDetails}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    })}
                />

                <Stack.Screen
                    name="BookingDetail"
                    component={BookingDetail}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                Booking Detail
                            </Text>
                        ),
                        headerLeft: () =>
                        (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => { }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={[
                                        {
                                            width: SIZES.width * .07,
                                            height: SIZES.height * .04,
                                            tintColor: this.props.appThem2?.text_Black_White,
                                        }]} />
                            </TouchableOpacity>
                        ),
                        headerRight: () =>
                        (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={{ marginRight: 10 }}
                                >
                                    <Image
                                        source={icons.More}
                                        resizeMode="contain"
                                        style={[{
                                            width: SIZES.width * .07,
                                            height: SIZES.height * .04,
                                            tintColor: null,
                                        }]}
                                    />
                                </TouchableOpacity>

                            </View>)
                    })}
                />

                <Stack.Screen
                    name="AddPromo"
                    component={AddPromo}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                Add Promo
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (<View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{ marginRight: 10 }}
                            >
                                <Image source={icons.More} resizeMode="contain" style={{ width: SIZES.width * .07, height: SIZES.height * .04 }} />
                            </TouchableOpacity>

                        </View>)
                    })}
                />

                <Stack.Screen
                    name="Location"
                    component={Location}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            {
                                color: this.props.appThem2?.text_Black_White,
                                width: SIZES.width * 0.8,
                                letterSpacing: 0.5,
                            }
                            ]}>
                                Your Address/Location
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (<View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{ marginRight: 10 }}
                            >
                                <Image source={icons.More} resizeMode="contain" style={{ width: SIZES.width * .07, height: SIZES.height * .04 }} />
                            </TouchableOpacity>

                        </View>)
                    })}
                />

                <Stack.Screen
                    name="PaymentMethod"
                    component={PaymentMethod}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                Payment Method
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                        // headerRight: () => (<></>)
                    })}
                />

                <Stack.Screen
                    name="ReviewScreen"
                    component={ReviewScreen}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                Review Summary
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{
                                    marginLeft: 15,
                                }}
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                        // headerRight: () => (<></>)
                    })}
                />

                <Stack.Screen
                    name="PinScreen"
                    component={PinScreen}
                    options={({ route }) => ({
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                Enter Your Pin
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                        // headerRight: () => (<></>)
                    })}
                />

                <Stack.Screen
                    name="EReceipt"
                    component={E_Receipt}
                    options={({ route }) => ({
                        headerShown: false,
                        headerTitle: "E-Receipt",
                    })}
                />

                {/* <Stack.Screen
                    name="MsgWorker"
                    component={MsgWorker}
                    options={({ route }) => ({
                        headerShown: false,
                        headerTitle: "E-Receipt",
                    })}
                /> */}

            </Stack.Navigator >
        )
    }
}

class BookingStackNavigator extends Component {

    constructor(props) {
        super(props)
    }

    state = {
    }

    render() {

        const {
        } = this.state;

        return (
            <Stack.Navigator
                initialRouteName="BookingPage"
                screenOptions={({ route }) =>
                ({
                    headerStyle: [StackNavStyle.MainHeader, { backgroundColor: this.props.appThem2?.screen_BG }],
                })}
            >

                <Stack.Screen
                    name="BookingPage"
                    component={BookingPage}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="EReceipt"
                    component={E_Receipt}
                    options={({ route }) => ({
                        headerShown: false,
                        headerTitle: "E-Receipt",
                    })}
                />

            </Stack.Navigator>
        )
    }
}

// class CalendarStackNavigator extends Component {

//     constructor(props) {
//         super(props)
//     }

//     state = {
//         scheme: this.props.scheme,
//         theme: this.props.theme,
//         card: this.props.card,
//         text: this.props.text,
//         name: ''
//     }

//     render() {

//         const {
//             theme, card, text, name
//         } = this.state;

//         return (
//             <Stack.Navigator
//                 initialRouteName="CalendarScreen"
//                 screenOptions={({ route }) =>
//                 ({
//                     headerStyle: theme === false ? StackNavStyle.MainHeader : [StackNavStyle.MainHeader, { backgroundColor: card }],
//                 })}
//             >

//                 <Stack.Screen
//                     name="CalendarScreen"
//                     component={Calendar}
//                     options={({ route }) => ({
//                         headerShown: false,
//                         // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
//                     }
//                     )}
//                 />

//             </Stack.Navigator>
//         )
//     }
// }

class ProfileStackNavigator extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        
        name: ''
    }

    render() {

        const {
        } = this.state;

        return (
            <Stack.Navigator
                initialRouteName="ProfilePage"
                screenOptions={({ route }) =>
                ({
                    headerStyle: [StackNavStyle.MainHeader, { backgroundColor: this.props.appThem2?.header_BG }],
                })}
            >

                <Stack.Screen
                    name="ProfilePage"
                    component={ProfilePage}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="EditProfile"
                    component={Edit}
                    options={({ route }) => ({
                        headerShown: false,
                        route: route,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                        fullName: route.params.fullName,
                        firstName: route.params.firstName,
                        date: route.params.date,
                        mail: route.params.mail,
                        gender: route.params.gender,
                        number: route.params.number,
                        address: route.params.address,
                    }
                    )}
                />

                <Stack.Screen
                    name="Notification"
                    component={NotiScreen}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                        noti: route.params.noti,
                        sound: route.params.sound,
                        vibrate: route.params.vibrate,
                        offer: route.params.Offer,
                        promoDiscount: route.params.promoDiscount,
                        payment: route.params.payment,
                        cashback: route.params.cashback,
                        update: route.params.update,
                        availableService: route.params.AvailableService,
                        tips: route.params.Tips,
                    }
                    )}
                />

                <Stack.Screen
                    name="Wallet"
                    component={Wallet}
                    options={({ route }) => ({
                        headerShown: false,
                        headerTitle: () => (
                            <Text style={[StackNavStyle.title,
                            { color: this.props.appThem2?.text_Black_White }
                            ]}>
                                Wallet
                            </Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    this.props.navigation.navigate("ProfilePage");
                                }}
                            >
                                <Image
                                    source={icons.BackIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * .07,
                                        height: SIZES.height * .04,
                                        tintColor: this.props.appThem2?.text_Black_White,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                        // headerRight: () => (<></>)
                    })}
                />

                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="Security"
                    component={Security}
                    options={({ route }) => ({
                        headerShown: false,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="Language"
                    component={Language}
                    options={({ route }) => ({
                        headerShown: false,
                        // language: route.params.language
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="Privacy"
                    component={Privacy}
                    options={({ route }) => ({
                        headerShown: false,
                        // language: route.params.language
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="InviteFriend"
                    component={InviteFriend}
                    options={({ route }) => ({
                        headerShown: false,
                        // language: route.params.language
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="Help"
                    component={Help}
                    options={({ route }) => ({
                        headerShown: false,
                        // language: route.params.language
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

            </Stack.Navigator>
        )
    }
}

class InboxStackNavigator extends Component {

    constructor(props) {
        super(props)
    }

    state = {
    }

    render() {

        const {
        } = this.state;

        return (
            <Stack.Navigator
                initialRouteName="InboxScreen"
                screenOptions={({ route }) =>
                ({
                    headerStyle: [StackNavStyle.MainHeader, { backgroundColor: this.props.appThem2?.header_BG }],
                })}
            >
                <Stack.Screen
                    name="InboxScreen"
                    component={Inbox}
                    options={({ route }) => ({
                        headerShown: false,
                        title: 'hhhh',
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                    }
                    )}
                />

                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={({ route }) => ({
                        data: route.params,
                        // headerShown: false,
                        title: route.params.userName,
                        Avatar: route.params.avatar,
                        // tabBarStyle: bottomBarCondition(this.props.navigation, route.name, "HomePage", theme )
                        headerRight: () => {
                            <View style={[StackNavStyle.flex]}>
                                <TouchableOpacity>
                                    <Image
                                        source={icons.Phone}
                                        resizeMode={'contain'}
                                        style={[StackNavStyle.RightIcon]}
                                    />
                                </TouchableOpacity>
                            </View>
                        },
                    }
                    )}
                />

            </Stack.Navigator>
        )
    }
}

// Home Stack export function
// export default function (props) {

//     const scheme = Appearance.getColorScheme();
//     // const colors = useTheme();
//     const theme = scheme === 'light' ? false : true;
//     const card = "#0f0f0f";
//     const text = COLORS.white2;

//     return (
//         <HomeStackNavigation
//             {...props}
//             scheme={scheme}
//             theme={theme}
//             card={card}
//             text={text}
//             route={props.route}
//         />
//     )
// }

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

export default connect(mapStateToProps, mapDispatchProps)(HomeStackNavigation);


export {
    HomeStackNavigation,
    BookingStackNavigator,
    ProfileStackNavigator,
    InboxStackNavigator,
    // CalendarStackNavigator,
}