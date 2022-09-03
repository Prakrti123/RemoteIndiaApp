import { Icon } from "native-base";
import React, { Component } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";
import DatePicker from "react-native-date-picker";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormInput, Header, LineBreaker } from "../../../components/Index";
import { COLORS, icons, images, SIZES } from "../../../constants";
import NotiStyle from "./NotiStyle";
class Notification extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        theme: false,
        noti: this.props.route.params.noti,
        sound: this.props.route.params.sound,
        vibrate: this.props.route.params.vibrate,
        offer: this.props.route.params.Offer,
        promoDiscount: this.props.route.params.promoDiscount,
        payment: this.props.route.params.payment,
        cashback: this.props.route.params.cashback,
        update: this.props.route.params.update,
        availableService: this.props.route.params.AvailableService,
        tips: this.props.route.params.Tips,

        // btn
        IsSelected: false,
    }

    render() {

        // console.log(this.props);

        const {
            noti, sound, offer, promoDiscount,
            payment, cashback, update,
            availableService, tips,
            IsSelected, vibrate,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Notification'}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={[NotiStyle.content]}>

                    {/* General Noti */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            General Notification
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    noti: !noti,
                                })
                            }}
                            style={
                                noti ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* Sound */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Sound
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    sound: !sound,
                                })
                            }}
                            style={
                                sound ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* Vibrate */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Vibrate
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    vibrate: !vibrate,
                                })
                            }}
                            style={
                                vibrate ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* offer */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Offer
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    offer: !offer,
                                })
                            }}
                            style={
                                offer ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* promo discount */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Promo & Discount
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    promoDiscount: promoDiscount,
                                })
                            }}
                            style={
                                promoDiscount ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* paymrnt */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Payments
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    payment: !payment,
                                })
                            }}
                            style={
                                payment ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* cashback */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Cashback
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    cashback: !cashback,
                                })
                            }}
                            style={
                                cashback ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* App Update */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            App Update
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    update: !update,
                                })
                            }}
                            style={
                                update ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* New service */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>

                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            New Services Available
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    availableService: !availableService,
                                })
                            }}
                            style={
                                availableService ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                    {/* new tips */}
                    <View style={[NotiStyle.optionView, {
                        backgroundColor: this.props.appThem2?.option_BG,
                    }]}>
                        <Text style={[NotiStyle.NotiTXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            New Tips Available
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    tips: !tips,
                                })
                            }}
                            style={
                                tips ?
                                    [NotiStyle.selected]
                                    :
                                    [NotiStyle.notSelected]
                            }>
                            <View
                                style={NotiStyle.circle}
                            />
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker2}
                    />

                </View>
            )
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={[NotiStyle.mainView, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

            </KeyboardAwareScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    appTheme: state.Globle.appTheme,
    appThem2: state.Globle.appTheme,
    DarkMode: state.Globle.darkMode,
    error: state.error
})

// call the action from redux
const mapDispatchProps = {
    handleToggle,
}

export default connect(mapStateToProps, mapDispatchProps)(Notification);