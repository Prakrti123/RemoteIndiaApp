import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import { Appearance, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, FONTS, icons, images } from "../../constants";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import AccSetUpStyle from "./AccSetUpStyle/AccSetUpStyle";

class AccSetUp extends Component {

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
        DATE: this.props.date,
        open: this.props.open,
        DOB: '',
        DateInput: null,

        // userINfo
        userName: "",
    }

    render() {

        const { navigation, scheme, theme,
            card, background, text,
            primary, DATE, open,
            DOB, DateInput,
            userName,
        } = this.state;

        const renderHeader = () => {
            return (
                <View style={AccSetUpStyle.HeaderView}>
                    <TouchableOpacity style={AccSetUpStyle.BackBtnView}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Image
                            source={icons.BackIcon}
                            resizeMode={'contain'}
                            style={[AccSetUpStyle.BackBtn, { tintColor: theme === false ? COLORS.black : COLORS.white }]}
                        />
                    </TouchableOpacity>

                    {/* title */}
                    <Text style={theme === false ? [AccSetUpStyle.HeaderTitle] : [AccSetUpStyle.HeaderTitle, { color: text }]}>
                        Fill Your Profile
                    </Text>
                </View>
            )
        }

        const handleChange = (date) => {
            setDate(date);
        };

        const focus = () => {
            if (!DateInput) {
                return;
            }

            DateInput.focus();
        };


        const renderContent = () => {
            return (
                <View style={AccSetUpStyle.contentView}>

                    {/* Profile View */}
                    <View style={AccSetUpStyle.ImageView}>

                        {/* profile icon */}
                        <Image
                            source={theme === true ? icons.Profile3D : icons.Profile3DGirl}
                            style={AccSetUpStyle.ImageStyle}
                            resizeMode={'contain'}
                        />

                        <TouchableOpacity style={AccSetUpStyle.EditBtn}>
                            <Image
                                source={icons.Edit}
                                resizeMode={'contain'}
                                style={AccSetUpStyle.EditIcon}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* Input Views */}
                    <View style={AccSetUpStyle.InputView}>

                        {/* Full name Input */}
                        <View style={theme === false ? [AccSetUpStyle.EmailView] : [AccSetUpStyle.EmailView, { backgroundColor: COLORS.darkGray3 }]}>

                            {/* input */}
                            <TextInput
                                autoFocus
                                textContentType="username"
                                keyboardType="default"
                                placeholder="Full Name"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                                onChangeText={(name) => {
                                    this.setState({
                                        userName: name
                                    })
                                }}
                            />
                        </View>

                        {/* NickName Input */}
                        <View style={theme === false ? [AccSetUpStyle.EmailView] : [AccSetUpStyle.EmailView, { backgroundColor: COLORS.darkGray3 }]}>

                            {/* input */}
                            <TextInput
                                textContentType="nickname"
                                keyboardType="default"
                                placeholder="Nickname"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                            />
                        </View>

                        {/* Date Of Birth */}
                        <View style={theme === false ? [AccSetUpStyle.DOBView] : [AccSetUpStyle.DOBView, { backgroundColor: COLORS.darkGray3 }]}>

                            {/* input */}
                            <TextInput
                                // value={value}
                                keyboardType="numbers-and-punctuation"
                                placeholder="Date of Birth  DD/MM/YYYY"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                                onChangeText={(value) => {
                                    this.setState({ DOB: value })
                                }}
                            >
                                {DOB}
                            </TextInput>

                            {/* icon */}
                            {/* <TouchableOpacity
                                onPress={() => { this.setState({ open: true }) }}
                            > */}
                                <Image
                                    source={icons.Planner}
                                    resizeMode={'contain'}
                                    style={theme === false ? AccSetUpStyle.EmailIcon : [AccSetUpStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                />
                            {/* </TouchableOpacity> */}

                            <DatePicker
                                modal
                                mode={'date'}
                                open={open}
                                date={DATE}
                                onConfirm={(date) => {
                                    this.setState({
                                        open: false
                                    })
                                    this.setState({
                                        DATE: date
                                    })
                                    // this.setState({
                                    //     DOB: date
                                    // })
                                    console.log(DATE);
                                }}
                                onCancel={() => {
                                    this.setState({
                                        open: false
                                    })
                                }}
                            />

                        </View>

                        {/* Email Input */}
                        <View style={theme === false ? [AccSetUpStyle.DOBView] : [AccSetUpStyle.DOBView, { backgroundColor: COLORS.darkGray3 }]}>

                            {/* input */}
                            <TextInput
                                textContentType="emailAddress"
                                keyboardType="email-address"
                                placeholder="Email"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                            />

                            {/* icon */}
                            <Image
                                source={icons.DropDownIcon}
                                resizeMode={'contain'}
                                style={theme === false ? AccSetUpStyle.EmailIcon : [AccSetUpStyle.EmailIcon, { tintColor: COLORS.gray }]}
                            />

                        </View>

                        {/* Phone Number Input */}
                        <View style={theme === false ? [AccSetUpStyle.EmailView] : [AccSetUpStyle.EmailView, { backgroundColor: COLORS.darkGray3 }]}>

                            {/* icon */}
                            <Image
                                source={icons.INDIA}
                                resizeMode={'contain'}
                                style={[AccSetUpStyle.EmailIcon, { tintColor: "" }]}
                            />

                            <TouchableOpacity
                            onPress={() => {console.log("select country")}}>
                                {/* icon */}
                                <Image
                                    source={icons.DropDownIcon}
                                    resizeMode={'contain'}
                                    style={theme === false ? AccSetUpStyle.EmailIcon : [AccSetUpStyle.EmailIcon, { tintColor: COLORS.gray }]}
                                />
                            </TouchableOpacity>

                            {/* input */}
                            <TextInput
                                keyboardType="number-pad"
                                placeholder="Phone Number"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                            />



                        </View>

                        {/* Address Input */}
                        <View style={theme === false ? [AccSetUpStyle.DOBView] : [AccSetUpStyle.DOBView, { backgroundColor: COLORS.darkGray3 }]}>

                            {/* input */}
                            <TextInput
                                // autoFocus
                                textContentType="addressCityAndState"
                                keyboardType="default"
                                placeholder="Address"
                                placeholderTextColor={theme === false ? COLORS.gray : COLORS.gray}
                            />

                            {/* icon */}
                            <Image
                                source={icons.LocationPin}
                                resizeMode={'contain'}
                                style={theme === false ? AccSetUpStyle.EmailIcon : [AccSetUpStyle.EmailIcon, { tintColor: COLORS.gray }]}
                            />

                        </View>

                    </View>

                </View>
            )
        }

        const renderFooter = () => {
            return(
                <View style={AccSetUpStyle.ViewBtn}>
                    <TouchableOpacity style={AccSetUpStyle.continueBtn}
                    onPress={(navigation) => {
                        this.props.navigation.navigate("BottomTab", {TabName:"Home"});
                    }}>
                        <Text style={AccSetUpStyle.btnText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <KeyboardAwareScrollView style={theme === false ? AccSetUpStyle.MainView : [AccSetUpStyle.MainView, { backgroundColor: card }]} >


                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* Footer */}
                {renderFooter()}
            </KeyboardAwareScrollView>
        );
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
    const date = new Date();
    const open = false;

    return (
        <AccSetUp
            {...props}
            navigation={navigation}
            scheme={scheme}
            colors={colors}
            theme={theme}
            card={card}
            text={text}
            primary={primary}
            background={background}
            date={date}
            open={open}
        />
    )
};