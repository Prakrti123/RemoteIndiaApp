import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../constants";
import SignInStyle from "./SignInStyle/SignInStyle";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        colors: '',
        navigation: this.props.navigation,
        scheme: this.props.scheme,
        theme: this.props.theme,
        card: this.props.card,
        background: this.props.background,
        text: this.props.text,
        primary: this.props.primary,
    }

    render() {

        const {navigation, scheme, theme, card, background, text, primary, scrollX, complete, currentIndex, ref, onViewChangeRef } = this.state;

        const renderLogo = () => {
            return (
                <View style={theme === false ? SignInStyle.LOGOView : [SignInStyle.LOGOView, {backgroundColor: card}]}>
                    <Image
                        source={images.LOGO}
                        resizeMode={'contain'}
                        style={SignInStyle.LOGOstyle}
                    />
                    <Image
                        source={images.RemoteIndia}
                        resizeMode={'contain'}
                        style={theme === false ? SignInStyle.LOGOText : [SignInStyle.LOGOText, {tintColor: text}]}
                    />
                </View>
            )
        }

        const renderContent = () => {
            return (
                <View style={{ marginHorizontal: 10 }}>

                    {/* heading */}
                    <Text style={{ 
                        ...FONTS.h1_5, 
                        marginVertical: 25,
                        color: theme === false ? COLORS.black : COLORS.white
                    }}>Sign in</Text>


                    {/* Inputs */}
                    <View style={{}}>

                        {/* text */}
                        <Text style={{ 
                            ...FONTS.h3_5, 
                            marginVertical: 10,
                            color: theme === false ? COLORS.black : COLORS.white,
                        }}>Phone Number</Text>

                        {/* Input view */}
                        <View style={theme === false ? SignInStyle.InputStyle : [SignInStyle.InputStyle, {backgroundColor: COLORS.darkGray1}]}>

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={icons.INDIA}
                                    resizeMode={'contain'}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: 12,
                                        marginRight: 6
                                        // backgroundColor: COLORS.black
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.h4, 
                                    letterSpacing: 0, 
                                    marginRight: 3,
                                    color: theme === false ? COLORS.black : COLORS.white2
                                }}>+91</Text>

                                <Image
                                    source={icons.DownArrow}
                                    resizeMode={'contain'}
                                    style={{
                                        width: 12,
                                        height: 15,
                                        marginRight: 2,
                                        tintColor: theme === false ? COLORS.darkGray : COLORS.white2
                                        // backgroundColor: COLORS.black
                                    }}
                                />
                            </TouchableOpacity>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Phone Number"
                                placeholderTextColor={ COLORS.gray2 }
                                style={{
                                    height: 45,
                                    // backgroundColor: theme === false ? COLORS.black : COLORS.lightGray
                                }}
                            />
                        </View>

                    </View>

                    {/* SignIn Btn */}
                    <TouchableOpacity 
                    style={theme == false ? SignInStyle.SignInBTN : [SignInStyle.SignInBTN, {backgroundColor: COLORS.primary}]}
                    onPress={() => {this.props.navigation.navigate("BottomTab")}}
                    >
                        <Text style={theme == false ? SignInStyle.SignInBTNText : [SignInStyle.SignInBTNText, {color: text}]}>Sign In</Text>
                    </TouchableOpacity>

                    {/* forgot password */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text style={{
                            ...FONTS.h4,
                            color: COLORS.primary,
                            textAlign: "center",
                            marginTop: 10,
                        }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                </View>
            )
        }

        const renderFooter = () => {
            return (
                <View style={SignInStyle.FooterView}>
                    <Text style={{
                        ...FONTS.h4,
                        color: theme === false ? COLORS.black : COLORS.white
                    }}>Sign in with</Text>

                    {/* links */}
                    <View style={SignInStyle.links}>

                        {/* Google */}
                        <TouchableOpacity style={theme === false ? SignInStyle.iconBox : [SignInStyle.iconBox, {backgroundColor: COLORS.darkGray1,  borderColor: COLORS.darkGray1, paddingHorizontal: 10}]}
                        onPress={() => navigation.navigate("GoogleSignIn")}>
                            <Image
                                source={icons.Google}
                                resizeMode={'contain'}
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>

                        {/* faceBook */}
                        <TouchableOpacity style={theme === false ? SignInStyle.iconBox : [SignInStyle.iconBox, {backgroundColor: COLORS.darkGray1,  borderColor: COLORS.darkGray1, paddingHorizontal: 10}]}>
                            <Image
                                source={icons.FaceBook}
                                resizeMode={'contain'}
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>

                        {/* Apple */}
                        <TouchableOpacity style={theme === false ? SignInStyle.iconBox : [SignInStyle.iconBox, {backgroundColor: COLORS.darkGray1,  borderColor: COLORS.darkGray1, paddingHorizontal: 10}]}>
                            <Image
                                source={icons.Apple}
                                resizeMode={'contain'}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: theme === false ? COLORS.black : COLORS.white2
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* continue BTN */}
                    <TouchableOpacity style={theme === false ? SignInStyle.continueBtn: [SignInStyle.continueBtn, {backgroundColor: COLORS.lightGray2}]}>
                        <Text style={SignInStyle.continueText}>Continue as a Guest</Text>
                    </TouchableOpacity>

                    {/* bottom text */}
                    <View style={SignInStyle.bottomView}>
                        <Text style={ theme === false ? SignInStyle.bottomText : [SignInStyle.bottomText, {color: text}]}>Create a New Account?</Text>

                        <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                        >
                            <Text style={theme === false ? SignInStyle.SignUpText : [SignInStyle.SignUpText, {color: COLORS.primary}]}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

        return (
            <View style={theme === false ? SignInStyle.MainView : [SignInStyle.MainView, {backgroundColor: card}]}>

                {/* Logo */}
                {renderLogo()}

                {/* SignIn Content */}
                {renderContent()}

                {/* footer */}
                {renderFooter()}
            </View>
        )
    }
}
export default function (props) {

    // const route = useRoute();
    const navigation = useNavigation();
    const scheme = Appearance.getColorScheme();
    const colors = useTheme();
    const card = '#0f0f0f';
    const background = colors.background;
    const text = '#ffffff';
    const primary = colors.primary;
    const theme = scheme === 'light' ? false : true;

    console.log(navigation);

    return (
        <SignIn
            {...props}
            // route={route}
            navigation={navigation}
            scheme={scheme}
            colors={colors}
            theme={theme}
            card={card}
            text={text}
            primary={primary}
            background={background}
        />
    )
};