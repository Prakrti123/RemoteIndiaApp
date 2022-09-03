import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../constants";
import GoogleSignInStyle from "./GoogleSignInStyle/GoogleSignInStyle";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class GoogleSignIn extends Component {

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
        hidden: true,
        check: false,
    }

    render() {

        const {
            navigation, scheme, theme,
            card, background, text,
            primary, scrollX, complete,
            currentIndex, ref,
            onViewChangeRef, hidden,
            check,
        } = this.state;


        const renderHeader = () => {
            return (
                <View style={GoogleSignInStyle.HeaderView}>
                    <TouchableOpacity style={GoogleSignInStyle.BackBtnView}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[GoogleSignInStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        const renderContent = () => {
            return (
                // content view
                <View style={GoogleSignInStyle.contentView}>

                    {/* main text */}
                    <Text style={theme === false ? GoogleSignInStyle.MainText : [GoogleSignInStyle.MainText, { color: text }]}>
                        Create your Account
                    </Text>

                    {/* Two input view */}
                    <View style={GoogleSignInStyle.TwoInputView}>

                        {/* Email Input */}
                        <View style={theme === false ? [GoogleSignInStyle.EmailView] : [GoogleSignInStyle.EmailView, {backgroundColor: COLORS.darkGray3}]}>

                            {/* icon */}
                            <Image
                                source={icons.DropDownIcon}
                                resizeMode={'contain'}
                                style={theme === false ? GoogleSignInStyle.EmailIcon : [GoogleSignInStyle.EmailIcon, {tintColor: COLORS.gray}]}
                            />

                            {/* input */}
                            <TextInput
                                autoFocus
                                textContentType="emailAddress"
                                keyboardType="email-address"
                                placeholder="Email"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                            />
                        </View>

                        {/* Password Input */}
                        <View style={theme === false ? [GoogleSignInStyle.PasswordView] : [GoogleSignInStyle.PasswordView, {backgroundColor: COLORS.darkGray3}]}>

                            {/* lock icon and input */}
                            <View style={{
                                flexDirection: 'row',
                                alignItems: "center"
                            }}>
                                {/* icon */}
                                <Image
                                    source={icons.LockIcon}
                                    resizeMode={'contain'}
                                    style={theme === false ? GoogleSignInStyle.EmailIcon : [GoogleSignInStyle.EmailIcon, {tintColor: COLORS.gray}]}
                                />

                                {/* input */}
                                <TextInput
                                    keyboardType="default"
                                    secureTextEntry={hidden}
                                    textContentType="password"
                                    placeholder="Password"
                                    placeholderTextColor={theme === false ? COLORS.gray : COLORS.lightGray1}
                                />
                            </View>

                            {/*  show and hide password */}
                            <TouchableOpacity
                                style={{

                                }}
                                onPress={() => {
                                    this.setState({
                                        hidden: !hidden
                                    })
                                }}>

                                {hidden === true ?
                                    <Image
                                        source={icons.EyeIcon}
                                        resizeMode={'contain'}
                                        style={theme === false ? GoogleSignInStyle.EmailIcon : [GoogleSignInStyle.EmailIcon, {tintColor: COLORS.gray}]}
                                    />
                                    :
                                    <Image
                                        source={icons.EyeCloseIcon}
                                        resizeMode={'contain'}
                                        style={theme === false ? GoogleSignInStyle.EmailIcon : [GoogleSignInStyle.EmailIcon, {tintColor: COLORS.gray}]}
                                    />
                                }

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }

        const renderFooter = () => {
            return (
                <View style={GoogleSignInStyle.FooterView}>
                    {/* remember view */}
                    <View style={GoogleSignInStyle.rememberView}>

                        {/* check Box */}
                        <TouchableOpacity
                            style={
                                [GoogleSignInStyle.TickBox,
                                {
                                    borderColor: check === true ? COLORS.green : COLORS.primary,
                                    borderWidth: check === true ? 0 : 5,
                                }]}
                            onPress={() => {
                                this.setState({
                                    check: !check
                                })
                            }}
                        >

                            {check === true
                                ?
                                <Image
                                    source={icons.TickIcon}
                                    resizeMode={'contain'}
                                    style={[GoogleSignInStyle.EmailIcon, { tintColor: COLORS.green }]}
                                />
                                :
                                <></>
                            }

                        </TouchableOpacity>

                        {/* text */}
                        <Text
                            style={{
                                ...FONTS.body4,
                                color: theme === false ? COLORS.black : text
                            }}
                        >
                            Remember me
                        </Text>
                    </View>

                    {/* sign in btn */}
                    <TouchableOpacity style={GoogleSignInStyle.SignInBtn}>
                        <Text style={{
                            ...FONTS.h3,
                            color: COLORS.white
                        }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <KeyboardAwareScrollView style={theme === false ? GoogleSignInStyle.MainView : [GoogleSignInStyle.MainView, { backgroundColor: card }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* footer */}
                {renderFooter()}

            </KeyboardAwareScrollView>
        )
    }
}
export default function (props) {

    const navigation = useNavigation();
    const scheme = Appearance.getColorScheme();
    const colors = useTheme();
    const card = '#0f0f0f';
    const background = colors.background;
    const text = '#ffffff';
    const primary = colors.primary;
    const theme = scheme === 'light' ? false : true;

    return (
        <GoogleSignIn
            {...props}
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
}