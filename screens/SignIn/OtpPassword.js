import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../constants";
import OtpPasswordStyle from "../SignIn/OtpPasswordStyle/OtpPasswordStyle";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OTPInputView from "@twotalltotems/react-native-otp-input";

class OtpPassword extends Component {

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
        timer: 30,
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.timer === 1) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                <View style={OtpPasswordStyle.HeaderView}>
                    <TouchableOpacity style={OtpPasswordStyle.BackBtnView}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[OtpPasswordStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>

                    {/* title */}
                    <Text style={theme === false ? [OtpPasswordStyle.HeaderTitle] : [OtpPasswordStyle.HeaderTitle, { color: text }]}>
                        Forgot Password
                    </Text>
                </View>
            )
        }

        const renderContent = () => {
            return (
                <View style={OtpPasswordStyle.contentView}>

                    {/* text */}
                    <Text style={theme === false ? OtpPasswordStyle.MainText : [OtpPasswordStyle.MainText, { color: COLORS.white }]}>
                        Code has been send to +1 111******99
                    </Text>

                    {/* otp */}
                    <OTPInputView style={OtpPasswordStyle.OTPView}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={theme === false ? [OtpPasswordStyle.underlineStyleBase] : [OtpPasswordStyle.underlineStyleBase, { backgroundColor: COLORS.darkGray3 }]}
                        codeInputHighlightStyle={theme === false ? [OtpPasswordStyle.underlineStyleHighLighted] : [OtpPasswordStyle.underlineStyleHighLighted, { backgroundColor: COLORS.lightGray1 }]}
                    />

                    {/* bottom */}
                    <View style={OtpPasswordStyle.bottomView}>
                        <Text style={{
                            ...FONTS.body3,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>Resend code in </Text>
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.primary
                        }}>0:{this.state.timer}</Text>
                    </View>

                    {/* bottom btn */}
                    <View style={OtpPasswordStyle.ViewBtn}>
                        <TouchableOpacity style={OtpPasswordStyle.verifyBtn}
                        onPress={() => {navigation.navigate("CreateNewPass")}}
                        >
                            <Text style={OtpPasswordStyle.btnText}>
                                Verify
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

        return (
            <KeyboardAwareScrollView style={theme === false ? OtpPasswordStyle.MainView : [OtpPasswordStyle.MainView, { backgroundColor: card }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* footer */}
                {/* {renderFooter()} */}

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
        <OtpPassword
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