import { Icon } from "native-base";
import React, { Component } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { toggleTheme } from "../../../store/action/action";
import { handleToggle } from "../../../store/action/toggleActions";
import { connect } from "react-redux";
import DatePicker from "react-native-date-picker";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormInput, Header } from "../../../components/Index";
import { COLORS, icons, images, SIZES, Theme } from "../../../constants";
import EditStyle from "./EditStyle";

class Edit extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        theme: false,
        fullName: this.props.route.params.fullName,
        firstName: this.props.route.params.firstName,
        date: this.props.route.params.date,
        mail: this.props.route.params.mail,
        number: this.props.route.params.number,
        address: this.props.route.params.address,
        gender: this.props.route.params.gender,

        // date
        DATE: this.props.route.params.date,
        open: false,
        DOB: '',
        DateInput: null,

        // country
        Country: 'IND'
    }

    render() {

        const {
            theme, fullName, firstName,
            date, mail, number,
            address, gender,

            DATE, DOB, DateInput, open,

            Country,

        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Edit Profile'}
                    backIcon_color={this.props.appThem2?.backIcon_color}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                />
            )
        }

        const renderContent = () => {
            return (
                <KeyboardAwareScrollView contentContainerStyle={EditStyle.content}>

                    {/* edit name */}
                    <View style={[EditStyle.inputView, {
                        backgroundColor: this.props.appThem2?.inputBox,
                    }]}>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText
                            }}
                            value={fullName}
                            onChange={(text) => {
                                this.setState({
                                    fullName: text
                                })
                            }}
                            placeholder={'Full Name'}
                            placeholderStyle={this.props.appThem2?.inputText}
                        />

                    </View>

                    {/* first name */}
                    <View style={[EditStyle.inputView, {
                        backgroundColor: this.props.appThem2?.inputBox,
                    }]}>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText
                            }}
                            value={firstName}
                            onChange={(text) => {
                                this.setState({
                                    firstName: text
                                })
                            }}
                            placeholder={'First Name'}
                            placeholderStyle={this.props.appThem2?.inputText}
                        />

                    </View>

                    {/* Date Of Birth */}
                    <View style={[EditStyle.inputView, EditStyle.DOBView, {
                        backgroundColor: this.props.appThem2?.inputBox,
                    }]}>

                        {/* input */}
                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText
                            }}
                            value={DATE}
                            keyboardType="numbers-and-punctuation"
                            placeholder="Date of Birth  DD/MM/YYYY"
                            placeholderTextColor={this.props.appThem2?.inputText}
                            onChangeText={(value) => {
                                this.setState({ DATE: value })
                            }}
                        />

                        {/* icon */}
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ open: true })
                            }}
                        >
                            <Image
                                source={icons.Planner}
                                resizeMode={'contain'}
                                style={theme === false ? EditStyle.EmailIcon : [EditStyle.EmailIcon, { tintColor: COLORS.gray }]}
                            />
                        </TouchableOpacity>

                        {/* date Picker */}
                        <>
                            {/* <DatePicker
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
                            /> */}
                        </>

                    </View>

                    {/* mail */}
                    <View style={[EditStyle.inputView, EditStyle.flex, {
                        backgroundColor: this.props.appThem2?.inputBox
                    }]}>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText
                            }}
                            value={mail}
                            keyboardType="email-address"
                            placeholder="Email"
                            placeholderTextColor={this.props.appThem2?.inputText}
                            onChangeText={(value) => {
                                this.setState({ mail: value })
                            }}
                        />

                        <TouchableOpacity
                            style={EditStyle.center}
                            onPress={() => { }}>
                            <Image
                                resizeMode={"contain"}
                                source={icons.DownArrow}
                                style={EditStyle.EmailIcon}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* country */}
                    <View style={[EditStyle.inputView, EditStyle.flex, {
                        backgroundColor: this.props.appThem2?.inputBox
                    }]}>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText
                            }}
                            value={Country}
                            placeholder="Country"
                            placeholderTextColor={this.props.appThem2?.inputText}
                            onChangeText={(value) => {
                                this.setState({ Country: value })
                            }}
                        />

                        <TouchableOpacity
                            style={EditStyle.center}
                            onPress={() => { }}>
                            <Image
                                resizeMode={"contain"}
                                source={icons.DownArrow}
                                style={EditStyle.EmailIcon}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* number */}
                    <View style={[EditStyle.inputView, EditStyle.flex, {
                        justifyContent: 'flex-start',
                        backgroundColor: this.props.appThem2?.inputBox,
                    }]}>

                        <View style={EditStyle.flex}>

                            <TouchableOpacity
                                style={EditStyle.center}
                                onPress={() => { }}>
                                <Image
                                    resizeMode={"contain"}
                                    source={icons.INDIA}
                                    style={[EditStyle.EmailIcon, {
                                        tintColor: null
                                    }]}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={EditStyle.center}
                                onPress={() => { }}>
                                <Image
                                    resizeMode={"contain"}
                                    source={icons.DownArrow}
                                    style={[EditStyle.EmailIcon, {
                                        width: SIZES.width * 0.03,
                                        tintColor: this.props.appThem2?.inputIcon,
                                    }]}
                                />
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText
                            }}
                            value={number}
                            placeholder="number"
                            placeholderTextColor={this.props.appThem2?.inputText}
                            onChangeText={(value) => {
                                this.setState({ number: value })
                            }}
                        />

                    </View>

                    {/* gender */}
                    <View style={[EditStyle.inputView, EditStyle.flex, {
                        backgroundColor: this.props.appThem2?.inputBox,
                    }]}>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText,
                            }}
                            value={gender}
                            placeholder="gender"
                            placeholderTextColor={this.props.appThem2?.inputText}
                            onChangeText={(value) => {
                                this.setState({ gender: value })
                            }}
                        />

                        <TouchableOpacity
                            style={EditStyle.center}
                            onPress={() => { }}>
                            <Image
                                resizeMode={"contain"}
                                source={icons.DownArrow}
                                style={EditStyle.EmailIcon}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* address */}
                    <View style={[EditStyle.inputView, EditStyle.flex, {
                        backgroundColor: this.props.appThem2?.inputBox,
                    }]}>

                        <TextInput
                            style={{
                                color: this.props.appThem2?.inputText,
                            }}
                            value={address}
                            placeholder="address"
                            placeholderTextColor={this.props.appThem2?.inputText}
                            onChangeText={(value) => {
                                this.setState({ address: value })
                            }}
                        />

                    </View>

                </KeyboardAwareScrollView>
            )
        }

        const renderUpdate = () => {
            return (
                <View style={[EditStyle.footer, EditStyle.center]}>
                    <TouchableOpacity
                        style={[EditStyle.updateBTN, EditStyle.center]}
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Text style={[EditStyle.btnTXT]}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={[EditStyle.mainView, {
                    backgroundColor: this.props.appThem2?.screen_BG
                }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* update btn */}
                {renderUpdate()}
            </KeyboardAwareScrollView>
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

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(Edit);