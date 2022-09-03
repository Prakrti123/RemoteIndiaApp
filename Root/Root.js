import React, { Component } from 'react';
import {
    Appearance,
    StatusBar,
} from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
    useTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AccSetUp, CreateNewPass, ForgotPassword, GoogleSignIn, OnBoard, OtpPassword, SignIn, SignUp, Verification } from '../screens/Index';
import { COLORS } from '../constants';
import BottomTab from '../Navigator/BottomTab';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { handleToggle } from '../store/action/toggleActions';


const Stack = createStackNavigator();

class Root extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        // ShowSplashScreen: true,
        // Scheme: '',
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         ShowSplashScreen: false
        //     })
        // }, 4000);
        // (async () => {
        //     // const scheme = useColorScheme();
        //     // this.setState({Scheme: scheme});
        // })();
        // SplashScreen.hide();
    }

    render() {

        // let ShowSplash = this.state.ShowSplashScreen;

        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                }}
                initialRouteName={"OnBoard"}
            >
                {/* splash screen */}
                {/* {ShowSplash == true ?
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                    />
                    : null
                } */}
                {/* {SplashScreen} */}


                {/* OnBoarding screen */}
                <Stack.Screen
                    name="OnBoard"
                    component={OnBoard}
                />

                {/* SignIn Screen */}
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                {/* Google Sign Screen */}
                <Stack.Screen
                    name="GoogleSignIn"
                    component={GoogleSignIn}
                />

                {/* SignUp Screen */}
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                {/* Verification Screen */}
                <Stack.Screen
                    name="Verification"
                    component={Verification}
                />

                {/* Forgot password */}
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                {/* otp password */}
                <Stack.Screen
                    name="OtpPassword"
                    component={OtpPassword}
                />

                {/* create New Password */}
                <Stack.Screen
                    name="CreateNewPass"
                    component={CreateNewPass}
                />

                {/* Set Up Account */}
                <Stack.Screen
                    name="AccSetUp"
                    component={AccSetUp}
                />

                {/* Home Screen and bottom tab */}
                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab}
                />


            </Stack.Navigator>
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

export default connect(mapStateToProps, mapDispatchProps)(Root)
