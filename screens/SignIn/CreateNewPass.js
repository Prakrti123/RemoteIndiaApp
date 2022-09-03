import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../constants";
import OtpPasswordStyle from "../SignIn/OtpPasswordStyle/OtpPasswordStyle";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import CreateNewPassStyle from "./CreateNewPassStyle/CreateNewPassStyle";
import { Button, Modal } from "native-base";

class CreateNewpass extends Component {

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
        hidden: true,
        hidden1: true,
        passValue: "",
        passValue1: "",
        check: false,
        showModal: false,
        setUp: false,
    }

    componentDidMount() {
        
        (async () => {
            // const scheme = useColorScheme();
            // this.setState({Scheme: scheme});
        })();
    }


    render() {

        const {
            navigation, scheme, theme,
            card, background, text,
            primary, scrollX, complete,
            currentIndex, ref, hidden,
            onViewChangeRef, hidden1,
            optionSelected, passValue,
            passValue1, check, showModal,
            setUp,
        } = this.state;


        const renderHeader = () => {
            return (
                <View style={CreateNewPassStyle.HeaderView}>
                    <TouchableOpacity style={CreateNewPassStyle.BackBtnView}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[CreateNewPassStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>

                    {/* title */}
                    <Text style={theme === false ? [CreateNewPassStyle.HeaderTitle] : [CreateNewPassStyle.HeaderTitle, { color: text }]}>
                        Create New Password
                    </Text>
                </View>
            )
        }

        const renderContent = () => {
            return (
                <View style={CreateNewPassStyle.contentView}>

                    {/* image */}
                    <View style={CreateNewPassStyle.ImageStyle}>
                        <Image
                            source={theme === false ? images.NewPass : images.NewPassDark}
                            resizeMode={'contain'}
                            style={CreateNewPassStyle.ImageStyle}
                        />
                    </View>


                    {/* Next view */}
                    <View style={CreateNewPassStyle.NextView}>

                        {/* main text */}
                        <Text style={theme === false ? CreateNewPassStyle.MainText : [CreateNewPassStyle.MainText, { color: text }]}>
                            Create your Account
                        </Text>

                        {/* Two input view */}
                        <View style={CreateNewPassStyle.TwoInputView}>

                            {/* Password Input */}
                            <View style={theme === false ? [CreateNewPassStyle.PasswordView] : [CreateNewPassStyle.PasswordView, { backgroundColor: COLORS.darkGray3 }]}>

                                {/* lock icon and input */}
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: "center"
                                }}>
                                    {/* icon */}
                                    <Image
                                        source={icons.LockIcon}
                                        resizeMode={'contain'}
                                        style={theme === false ? CreateNewPassStyle.EmailIcon : [CreateNewPassStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                    />

                                    {/* input */}
                                    <TextInput
                                        style={{
                                            color: theme === false ? COLORS.darkGray2 : COLORS.white
                                        }}
                                        keyboardType="default"
                                        secureTextEntry={hidden}
                                        textContentType="password"
                                        placeholder="Password"
                                        placeholderTextColor={theme === false ? COLORS.gray : COLORS.lightGray1}
                                        onChangeText={(text) => this.setState({ passValue1: text })}
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
                                            style={theme === false ? CreateNewPassStyle.EmailIcon : [CreateNewPassStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                        />
                                        :
                                        <Image
                                            source={icons.EyeCloseIcon}
                                            resizeMode={'contain'}
                                            style={theme === false ? CreateNewPassStyle.EmailIcon : [CreateNewPassStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                        />
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* view recheck */}
                        <View style={CreateNewPassStyle.TwoInputView}>

                            {/* Password Input */}
                            <View style={theme === false ? [CreateNewPassStyle.PasswordView] : [CreateNewPassStyle.PasswordView, { backgroundColor: COLORS.darkGray3 }]}>

                                {/* lock icon and input */}
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: "center"
                                }}>
                                    {/* icon */}
                                    <Image
                                        source={icons.LockIcon}
                                        resizeMode={'contain'}
                                        style={theme === false ? CreateNewPassStyle.EmailIcon : [CreateNewPassStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                    />

                                    {/* input */}
                                    <TextInput
                                        style={{
                                            color: theme === false ? COLORS.darkGray2 : COLORS.white
                                        }}
                                        keyboardType="default"
                                        secureTextEntry={hidden1}
                                        textContentType="password"
                                        placeholder="Password"
                                        placeholderTextColor={theme === false ? COLORS.gray : COLORS.lightGray1}
                                        onChangeText={(text) => this.setState({ passValue: text })}
                                    />
                                </View>

                                {/*  show and hide password */}
                                <TouchableOpacity
                                    style={{

                                    }}
                                    onPress={() => {
                                        this.setState({
                                            hidden1: !hidden1
                                        })
                                    }}>

                                    {hidden1 === true ?
                                        <Image
                                            source={icons.EyeIcon}
                                            resizeMode={'contain'}
                                            style={theme === false ? CreateNewPassStyle.EmailIcon : [CreateNewPassStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                        />
                                        :
                                        <Image
                                            source={icons.EyeCloseIcon}
                                            resizeMode={'contain'}
                                            style={theme === false ? CreateNewPassStyle.EmailIcon : [CreateNewPassStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                        />
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* remember view */}
                        <View style={CreateNewPassStyle.rememberView}>

                            {/* check Box */}
                            <TouchableOpacity
                                style={
                                    [CreateNewPassStyle.TickBox,
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
                                        style={[CreateNewPassStyle.EmailIcon, { tintColor: COLORS.green }]}
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
                    </View>

                </View>
            )
        }

        const renderNavigation = () => {
            // navigation
            setTimeout(() => {
                navigation.navigate("AccSetUp");
                this.setState({
                    showModal: false
                })
            }, 4000);
        }

        const renderFooter = () => {
            return (
                <>
                    {/* bottom btn */}
                    <View style={CreateNewPassStyle.ViewBtn}>
                        <TouchableOpacity style={CreateNewPassStyle.continueBtn}
                            disabled={passValue === passValue1 && passValue === passValue1 != '' ? false : true}
                            onPress={() => {
                                this.setState({
                                    showModal: true
                                })
                                {renderNavigation()}
                            }}
                        >
                            <>
                                <Modal isOpen={showModal} onClose={() => this.setState({showModal: false})}>
                                    <Modal.Content minWidth="350px"
                                        style={theme === false ? CreateNewPassStyle.ModalContent : [CreateNewPassStyle.ModalContent, {backgroundColor: COLORS.darkGray3}]}>

                                        {/* <Modal.CloseButton /> */}
                                        <Modal.Body style={CreateNewPassStyle.ModalBody}>
                                            {/* Bubble Shield */}
                                            <ImageBackground
                                                source={icons.Bubble}
                                                resizeMode={'contain'}
                                                style={CreateNewPassStyle.Bubble}
                                            >
                                                <ImageBackground
                                                    source={icons.PurpleCircle}
                                                    resizeMode={'contain'}
                                                    style={CreateNewPassStyle.PurpleCircle}
                                                >
                                                    <Image
                                                        source={icons.Shield}
                                                        resizeMode={'contain'}
                                                        style={CreateNewPassStyle.Shield}
                                                    />
                                                </ImageBackground>
                                            </ImageBackground>

                                            <Text style={theme === false ? CreateNewPassStyle.ModalText : [CreateNewPassStyle.ModalText, {color: text}]}>
                                                Congratulations!
                                            </Text>

                                            <Text style={theme === false ? CreateNewPassStyle.ModalSubText : [CreateNewPassStyle.ModalSubText, {color: text}]}>
                                                Your account is ready to use. You will be redirected to the Home page in a few seconds.
                                            </Text>

                                            {/* Loading */}
                                            <Image
                                                source={icons.Load}
                                                resizeMode={'contain'}
                                                style={CreateNewPassStyle.Shield}
                                            />

                                        </Modal.Body>
                                    </Modal.Content>
                                </Modal>
                            </>
                            <Text style={CreateNewPassStyle.btnText}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )
        }

        return (
            <KeyboardAwareScrollView style={theme === false ? CreateNewPassStyle.MainView : [CreateNewPassStyle.MainView, { backgroundColor: card }]}>

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
        <CreateNewpass
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