import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { Component } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { Footer, SuccessCancelmodal } from "../../../components/Index";
import { COLORS, icons, SIZES } from "../../../constants";
import PinScreenStyle from "./PinScreenStyle";
import { Modal } from "native-base";
import { handleToggle } from "../../../store/action/toggleActions";
import { connect } from "react-redux";
import { CreateNewPassStyle } from "../../StyleIndex";

class PinScreen extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        theme: false,
        ValidPIN: '1234',
        EnteredPIN: '',
        ShowModal: false,
    }

    render() {

        const {
            theme, ValidPIN,
            EnteredPIN, ShowModal,
        } = this.state;

        return (
            <KeyboardAvoidingView
                style={[PinScreenStyle.main, PinScreenStyle.center, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}
            >

                <Text
                    style={[PinScreenStyle.smlTXT]}
                >
                    Enter your PIN to confirm payment
                </Text>

                <OTPInputView
                    style={[PinScreenStyle.OTPView]}
                    pinCount={4}
                    autoFocusOnLoad
                    onCodeFilled={(text) => {
                        this.setState({
                            EnteredPIN: text
                        })
                    }}
                    onCodeChanged={(text) => {
                        this.setState({
                            EnteredPIN: text
                        })
                    }}
                    codeInputFieldStyle={[PinScreenStyle.underlineStyleBase, {
                        backgroundColor: this.props.appThem2?.code_BG,
                        color: this.props.appThem2?.text_Gray_Scale,
                    }]}
                    codeInputHighlightStyle={[PinScreenStyle.underlineStyleHighLighted, {
                        backgroundColor: this.props.appThem2?.active_code_BG,
                    }]}
                />

                <>
                    <Modal
                        isOpen={ShowModal ? true : false}
                        onClose={() => this.setState({ Modal: !Modal })}
                    >
                        <Modal.Content minWidth="350px"
                            style={[CreateNewPassStyle.ModalContent, { backgroundColor: this.props.appThem2?.screen_BG }]}
                        >

                            {/* <Modal.CloseButton /> */}
                            <Modal.Body style={PinScreenStyle.ModalBody}>

                                {/* Bubble Shield */}
                                <ImageBackground
                                    source={icons.Bubble}
                                    resizeMode={'contain'}
                                    style={PinScreenStyle.Bubble}
                                >
                                    <ImageBackground
                                        source={icons.PurpleCircle}
                                        resizeMode={'contain'}
                                        style={PinScreenStyle.PurpleCircle}
                                    >
                                        <Image
                                            source={icons.TickIcon}
                                            resizeMode={'contain'}
                                            style={PinScreenStyle.Shield}
                                        />
                                    </ImageBackground>
                                </ImageBackground>

                                <Text style={[PinScreenStyle.ModalText, { color: this.props.appThem2?.text_Black_White }]}>
                                    Booking Successful!
                                </Text>

                                <Text style={[PinScreenStyle.ModalSubText, { color: this.props.appThem2?.text_Gray_Scale }]}>
                                    Your have successfully made payment and booked the services.
                                </Text>

                                {/* button */}
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("EReceipt");
                                    }}
                                    style={[PinScreenStyle.center, PinScreenStyle.button]}>
                                    <Text
                                        style={[PinScreenStyle.midTXT, {
                                            color: COLORS.white,
                                        }]}
                                    >
                                        View E-Receipt
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        // this.props.navigation.navigate("MsgWorker");
                                    }}
                                    style={[PinScreenStyle.center, PinScreenStyle.button, {
                                        backgroundColor: COLORS.lightPurple,
                                    }]}>
                                    <Text
                                        style={[PinScreenStyle.midTXT, {
                                            color: COLORS.purple,
                                        }]}
                                    >
                                        Message Workers
                                    </Text>
                                </TouchableOpacity>

                            </Modal.Body>
                        </Modal.Content>
                    </Modal>


                </>
                <SuccessCancelmodal
                    showModal={ShowModal}
                    type={'success'}
                    title={"Booking Successful!"}
                    subTitle={"Your have successfully made payment and booked the services."}
                />

                <Footer
                    ButtonText={"Continue"}
                    height={SIZES.height * 0.2}
                    bottomText={'Continue'}
                    onPress={() => {
                        // this.props.navigation.navigate("EReceipt");
                        this.setState({
                            ShowModal: ValidPIN === EnteredPIN ? !ShowModal : ShowModal,
                        })
                        console.log(ValidPIN, "ValidPin", EnteredPIN, "EnteredPin")
                        console.log(ValidPIN === EnteredPIN ? ShowModal : !ShowModal)
                    }}
                />
            </KeyboardAvoidingView>
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


export default connect(mapStateToProps)(PinScreen);