import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../constants";
import ForgotPasswordStyle from "../SignIn/ForgotPasswordStyle/ForgotPasswordStyle";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class ForgotPassword extends Component {

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
        optionSelected: false,
    }

    render() {

        const {
            navigation, scheme, theme,
            card, background, text,
            primary, scrollX, complete,
            currentIndex, ref,
            onViewChangeRef, optionSelected,
        } = this.state;

        const renderHeader = () => {
            return (
                <View style={ForgotPasswordStyle.HeaderView}>
                    <TouchableOpacity style={ForgotPasswordStyle.BackBtnView}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[ForgotPasswordStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>

                    {/* title */}
                    <Text style={theme === false ? [ForgotPasswordStyle.HeaderTitle] : [ForgotPasswordStyle.HeaderTitle, { color: text }]}>
                        Forgot Password
                    </Text>
                </View>
            )
        }

        const renderContent = () => {
            return (
                // content view
                <View style={ForgotPasswordStyle.contentView}>

                    {/* image view */}
                    <View style={ForgotPasswordStyle.imageView}>

                        {/* image */}
                        <Image
                            source={theme === false ? images.ForgotPassLight : images.ForgotPassDark}
                            resizeMode={'contain'}
                            style={ForgotPasswordStyle.imageStyle}
                        />
                    </View>

                    {/* subTitle */}
                    <Text style={theme === false ? ForgotPasswordStyle.subTitle : [ForgotPasswordStyle.subTitle, { color: text }]}>
                        Select which contact details should we use to reset your password
                    </Text>

                    {/* option view */}
                    <View style={ForgotPasswordStyle.optionView}>

                        {/* chat option */}
                        <TouchableOpacity 
                        style={theme === false ? [ForgotPasswordStyle.chatOption, {borderColor: optionSelected == 'sms' ? COLORS.primary : COLORS.white}] : [ForgotPasswordStyle.chatOption, {borderColor: optionSelected == 'sms' ? COLORS.purple : COLORS.darkGray3, backgroundColor: COLORS.darkGray3}]}
                        onPress={() => {
                            this.setState({
                                optionSelected: 'sms'
                            })
                        }}>

                            {/* icon view */}
                            <View style={ForgotPasswordStyle.iconView}>
                                {/* icon */}
                                <Image
                                    source={icons.chat}
                                    resizeMode={'contain'}
                                    style={ForgotPasswordStyle.iconstyle}
                                />
                            </View>

                            {/* text */}
                            <View style={{
                                marginLeft: 15,
                                justifyContent: 'center',
                            }}>

                                <Text style={theme=== false ? [ForgotPasswordStyle.graytext] : [ForgotPasswordStyle.graytext, {color: COLORS.gray2}]}>
                                    via SMS:
                                </Text>

                                <Text style={theme=== false ? [ForgotPasswordStyle.numText] : [ForgotPasswordStyle.numText, {color: text}]}>
                                    +1 111*****99
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* msg option */}
                        <TouchableOpacity 
                        style={theme === false ? [ForgotPasswordStyle.msgOption, {borderColor: optionSelected == 'mail' ? COLORS.primary : COLORS.white}] : [ForgotPasswordStyle.msgOption, {borderColor: optionSelected == 'mail' ? COLORS.purple :  COLORS.darkGray3 , backgroundColor: COLORS.darkGray3}]}
                        onPress={() => {
                            this.setState({
                                optionSelected: 'mail'
                            })
                        }}
                        >

                            {/* icon view */}
                            <View style={ForgotPasswordStyle.iconView}>
                                {/* icon */}
                                <Image
                                    source={icons.message}
                                    resizeMode={'contain'}
                                    style={ForgotPasswordStyle.iconstyle}
                                />
                            </View>

                            {/* text */}
                            <View style={{
                                marginLeft: 15,
                                justifyContent: 'center',
                            }}>

                                <Text style={theme=== false ? [ForgotPasswordStyle.graytext] : [ForgotPasswordStyle.graytext, {color: COLORS.gray2}]}>
                                    via Email:
                                </Text>

                                <Text style={theme=== false ? [ForgotPasswordStyle.numText] : [ForgotPasswordStyle.numText, {color: text}]}>
                                    and***ley@yourdomain.com
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

        const renderFooter = () => {
            return (

                // footer
                <View style={ForgotPasswordStyle.FooterView}>
                    <TouchableOpacity 
                    style={ForgotPasswordStyle.continueBtn}
                    onPress={() => {navigation.navigate("OtpPassword" , {optionData: optionSelected})}}
                    >
                        <Text style={ForgotPasswordStyle.continueText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <KeyboardAwareScrollView style={theme === false ? ForgotPasswordStyle.MainView : [ForgotPasswordStyle.MainView, { backgroundColor: card }]}>

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
        <ForgotPassword
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