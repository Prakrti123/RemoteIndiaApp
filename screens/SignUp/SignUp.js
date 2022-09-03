import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons, images } from "../../constants";
import { COLORS, FONTS, SIZES } from "../../constants";
import SignUpStyle from "./SignUpStyle/SignUpStyle";
import { OnBoardStyle } from "../StyleIndex";
import darkMode from "../../styles/darkMode";

class SignUp extends Component {

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
    }

    render() {

        const { navigation, theme, card, background, text, primary, scheme } = this.state;

        const renderHeader = () => {
            return (
                <View style={SignUpStyle.HeaderView}>
                    <TouchableOpacity style={SignUpStyle.BackBtnView}
                    onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[SignUpStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        const renderLogo = () => {
            return (
                <View style={SignUpStyle.contentBox}>
                    <View style={theme === false ? SignUpStyle.LOGOView : [SignUpStyle.LOGOView]}>
                        <Image
                            source={images.LOGO}
                            resizeMode={'contain'}
                            style={SignUpStyle.LOGOstyle}
                        />
                        <Image
                            source={images.RemoteIndia}
                            resizeMode={'contain'}
                            style={theme === false ? SignUpStyle.LOGOText : [SignUpStyle.LOGOText, { tintColor: text }]}
                        />
                    </View>
                </View>
            )
        }

        const renderContent = () => {
            return (
                <View style={SignUpStyle.contentStyle}>
                    <Text style={{
                        ...FONTS.h2,
                        color: theme === false ? COLORS.black : COLORS.white
                    }}>
                        Sign Up
                    </Text>

                    {/* firstName View */}
                    <View style={SignUpStyle.firstNameMainStyle}>

                        <Text style={{
                            ...FONTS.h3_5,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>
                            First Name
                        </Text>

                        <View
                            style={theme === false ? SignUpStyle.firstNameView : [SignUpStyle.firstNameView, { backgroundColor: COLORS.darkGray3 }]}

                        >
                            <TouchableOpacity
                                style={SignUpStyle.firstNameTO}
                            >
                                <Text style={{
                                    ...FONTS.h4,
                                    color: theme === false ? COLORS.black : COLORS.lightGray1
                                }}>Mr.</Text>

                                <Image
                                    source={icons.DownArrow}
                                    resizeMode={'contain'}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginHorizontal: 3,
                                        tintColor: theme === false ? COLORS.black : COLORS.lightGray1
                                    }}
                                />
                            </TouchableOpacity>

                            <TextInput
                                placeholder="First Name"
                                placeholderTextColor={theme === false ? COLORS.gray2 : COLORS.gray2}
                            />
                        </View>

                    </View>

                    {/* lastName View */}
                    <View style={SignUpStyle.firstNameMainStyle}>

                        <Text style={{
                            ...FONTS.h3_5,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>
                            Last Name
                        </Text>

                        <View
                            style={theme === false ? SignUpStyle.firstNameView : [SignUpStyle.firstNameView, { backgroundColor: COLORS.darkGray3 }]}
                        >
                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor={theme === false ? COLORS.gray2 : COLORS.gray2}
                            />
                        </View>

                    </View>

                    {/* PhoneNum View */}
                    <View style={SignUpStyle.firstNameMainStyle}>

                        <Text style={{
                            ...FONTS.h3_5,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>
                            Phone Number
                        </Text>

                        <View
                            style={theme === false ? SignUpStyle.firstNameView : [SignUpStyle.firstNameView, { backgroundColor: COLORS.darkGray3 }]}

                        >
                            <TouchableOpacity
                                style={SignUpStyle.firstNameTO}
                            >
                                <Image
                                    source={icons.INDIA}
                                    resizeMode={'contain'}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginHorizontal: 3,
                                    }}
                                />

                                <Text style={{
                                    ...FONTS.h4,
                                    color: theme === false ? COLORS.black : COLORS.lightGray1
                                }}>+91</Text>

                                <Image
                                    source={icons.DownArrow}
                                    resizeMode={'contain'}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginHorizontal: 3,
                                        tintColor: theme === false ? COLORS.black : COLORS.lightGray1
                                    }}
                                />
                            </TouchableOpacity>

                            <TextInput
                                placeholder="Phone Number"
                                placeholderTextColor={theme === false ? COLORS.gray2 : COLORS.gray2}
                            />
                        </View>

                    </View>

                    {/* email View */}
                    <View style={SignUpStyle.firstNameMainStyle}>

                        <Text style={{
                            ...FONTS.h3_5,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>
                            Email
                        </Text>

                        <View
                            style={theme === false ? SignUpStyle.firstNameView : [SignUpStyle.firstNameView, {backgroundColor: COLORS.darkGray3}]}
                        >
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={theme === false ? COLORS.gray2 : COLORS.gray2}
                            />
                        </View>

                    </View>

                    {/* signUp Btn */}
                    <TouchableOpacity 
                    style={[SignUpStyle.SignInBtnTO, { backgroundColor: theme === false ? COLORS.gray3 : COLORS.primary }]}
                    onPress={() => navigation.navigate("Verification")}
                    >
                        <Text style={{
                            ...FONTS.h4,
                            color: theme === false ? COLORS.black : COLORS.white
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    {/* bottom text */}
                    <View style={SignUpStyle.bottomView}>
                        <Text style={theme === false ? SignUpStyle.bottomText : [SignUpStyle.bottomText, { color: text }]}>Create a New Account?</Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            <Text style={theme === false ? SignUpStyle.SignUpText : [SignUpStyle.SignUpText, { color: COLORS.primary }]}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

        return (

            <View style={[SignUpStyle.MainView, { backgroundColor: theme === false ? COLORS.white : COLORS.black }]}>

                {/* renderHeader */}
                {renderHeader()}

                {/* renderLogo */}
                {renderLogo()}

                {/* renderContent */}
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
        <SignUp
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
