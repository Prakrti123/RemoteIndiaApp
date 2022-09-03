import { useNavigation, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Appearance,
} from "react-native";
import { icons, images } from "../../constants";
import { COLORS, FONTS, SIZES } from "../../constants";
import { OnBoardStyle } from "../StyleIndex";
import darkMode from "../../styles/darkMode";
import VerificationStyle from "./VerificationStyle/VerficationStyle";
import OTPInputView from "@twotalltotems/react-native-otp-input";

class Verification extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        navigation: this.props.navigation,
        theme: this.props.theme,
        scheme: this.props.scheme,
        theme: this.props.theme,
        card: this.props.card,
        background: this.props.background,
        text: this.props.text,
        primary: this.props.primary,
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

        const { navigation, theme, card, background, text, primary, scheme } = this.state;

        const renderHeader = () => {
            return (
                <View style={VerificationStyle.HeaderView}>
                    <TouchableOpacity style={VerificationStyle.BackBtnView}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[VerificationStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        const renderContent = () => {
            return (
                <View style={theme === false ? [VerificationStyle.contentView] : [VerificationStyle.contentView]}>
                    {/* Content */}
                    <Text
                        style={{
                            ...FONTS.h1,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}
                    >
                        Verfication Code
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            fontSize: 20,
                            paddingTop: 20,
                            paddingRight: 20,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}
                    >
                        We just send you a verify code. Check your inbox to get them.
                    </Text>

                    <OTPInputView style={VerificationStyle.OTPView}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={theme === false ? [VerificationStyle.underlineStyleBase] : [VerificationStyle.underlineStyleBase, {backgroundColor: COLORS.darkGray3}]}
                        codeInputHighlightStyle={theme === false ? [VerificationStyle.underlineStyleHighLighted] : [VerificationStyle.underlineStyleHighLighted, {backgroundColor: COLORS.lightGray1}]}
                    />

                    {/* continue btn */}
                    <TouchableOpacity style={theme === false ? [VerificationStyle.continueBtn] : [VerificationStyle.continueBtn, {backgroundColor: COLORS.primary}]}>
                        <Text style={{
                            ...FONTS.h2_5,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>
                            Continue
                        </Text>
                    </TouchableOpacity>

                    {/* bottom */}
                    <View style={VerificationStyle.bottomView}>
                        <Text style={{
                            ...FONTS.body3,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>Resend code in </Text>
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.primary
                        }}>0:{this.state.timer}</Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={theme === false ? [VerificationStyle.MainView] : [VerificationStyle.MainView, {backgroundColor: COLORS.black}]}>


                {/* header */}
                {renderHeader()}

                {/* Content */}
                {renderContent()}
            </View>
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
        <Verification
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
};