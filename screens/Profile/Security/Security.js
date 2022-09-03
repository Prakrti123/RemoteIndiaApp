import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { Header, LineBreaker } from "../../../components/Index";
import { COLORS, icons } from "../../../constants";
import SecureStyle from "./SecureStyle";
import { handleToogle } from "../../../store/action/toggleActions";

class Security extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        theme: false,
        remember: true,
        faceID: false,
        BioID: true,
        GAuth: false,
    }

    render() {

        const {
            remember, faceID, 
            BioID, GAuth,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Security'}
                    backPress={() => {
                        this.props.navigation.goBack();
                    }}
                    leftComponent={icons.BackIcon}
                // rightComponent={icons.BackIcon}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={SecureStyle.content}>

                    {/* remember me */}
                    <View style={[SecureStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[SecureStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Remember Me
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    remember: !remember,
                                })
                            }}
                            style={
                                remember ?
                                    [SecureStyle.selected]
                                    :
                                    [SecureStyle.notSelected]
                            }>
                            <View
                                style={SecureStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* Face ID */}
                    <View style={[SecureStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[SecureStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Face ID
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    faceID: !faceID,
                                })
                            }}
                            style={
                                faceID ?
                                    [SecureStyle.selected]
                                    :
                                    [SecureStyle.notSelected]
                            }>
                            <View
                                style={SecureStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* Biometric */}
                    <View style={[SecureStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[SecureStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Biometric ID
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    BioID: !BioID,
                                })
                            }}
                            style={
                                BioID ?
                                    [SecureStyle.selected]
                                    :
                                    [SecureStyle.notSelected]
                            }>
                            <View
                                style={SecureStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* Google Authenticator */}
                    <TouchableOpacity 
                    onPress={() => {}}
                    style={[SecureStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[SecureStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Google Authenticator
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    GAuth: !GAuth,
                                })
                            }}
                            style={{}}>
                            <Image
                                source={icons.arrow} so
                                style={SecureStyle.icon}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />
                </View>
            )
        }

        const renderFooter = () => {
            return (
                <View style={SecureStyle.Footer}>

                    {/* Change PIN */}
                    <TouchableOpacity 
                    onPress={() => {}}
                    style={[SecureStyle.BTN, SecureStyle.center, {
                        backgroundColor: this.props.appThem2?.transperacy
                    }]}>

                        <Text style={[SecureStyle.btnTXT, {
                            color: this.props.appThem2?.text_Purple_White
                        }]}>
                            Change PIN
                        </Text>
                    </TouchableOpacity>

                    {/* Change Password */}
                    <TouchableOpacity 
                    onPress={() => {}}
                    style={[SecureStyle.BTN, SecureStyle.center, {
                        backgroundColor: this.props.appThem2?.transperacy
                    }]}>

                        <Text style={[SecureStyle.btnTXT, {
                            color: this.props.appThem2?.text_Purple_White
                        }]}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={[SecureStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* footer */}
                {renderFooter()}
            </View>
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
    handleToogle
}

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(Security);