import React, { Component } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Modal } from "native-base";
import ModalStyle from "./ModalStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../../../store/action/toggleActions";
import { icons, COLORS, images } from "../../../../constants";

class SuccessCancelmodal extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        showModal: this.props.cancelModal
    }

    componentDidMount() {
        this.state.showModal
        ?
        setTimeout(() => {
            this.setState({
                showModal: false
            })
        }, 2000)
        :
        <></>
    }

    render() {

        const {
            showModal,
        } = this.state;

        return (
            <>
            {console.log("showModal",showModal)}
                <Modal
                style={{zIndex: 5}}
                    isOpen={showModal}
                    onClose={() => this.setState({ showModal: !showModal })}
                >
                    <Modal.Content minWidth="350px"
                        style={[ModalStyle.ModalContent, { 
                            backgroundColor: this.props.appThem2?.cancelFilter_BG
                        }]}
                    >

                        {/* <Modal.CloseButton /> */}
                        <Modal.Body style={ModalStyle.ModalBody}>

                            {/* Bubble Shield */}
                            <ImageBackground
                                source={icons.Bubble}
                                resizeMode={'contain'}
                                style={ModalStyle.Bubble}
                            >
                                <ImageBackground
                                    source={icons.PurpleCircle}
                                    resizeMode={'contain'}
                                    style={ModalStyle.PurpleCircle}
                                >
                                    <Image
                                        source={icons.TickIcon}
                                        resizeMode={'contain'}
                                        style={ModalStyle.Shield}
                                    />
                                </ImageBackground>
                            </ImageBackground>

                            <Text style={[ModalStyle.ModalText, { 
                                color: this.props.appThem2?.mainColor
                            }]}>
                                {/* Booking Successful! */}
                                {this.props.title}
                            </Text>

                            <Text style={[ModalStyle.ModalSubText, { 
                                color: this.props.appThem2?.text_Black_White
                            }]}>
                                {/* Your have successfully made payment and booked the services. */}
                                {this.props.subTitle}
                            </Text>

                            {/* button */}
                            <TouchableOpacity
                                onPress={() => {
                                    {
                                        this.props.type === 'cancel'
                                            ?
                                            this.setState({
                                                showModal: !showModal
                                            })
                                            :
                                            this.props.navigation.navigate("EReceipt")

                                    }
                                }}
                                style={[ModalStyle.center, ModalStyle.button]}>
                                {this.props.type === 'cancel'
                                    ?
                                    <Text
                                        style={[ModalStyle.midTXT, {
                                            color: COLORS.white,
                                        }]}
                                    >
                                        OK
                                    </Text>
                                    :
                                    <Text
                                        style={[ModalStyle.midTXT, {
                                            color: COLORS.white,
                                        }]}
                                    >
                                        View E-Receipt
                                    </Text>
                                }

                            </TouchableOpacity>

                            {this.props.type === 'cancel'
                                ?
                                <></>
                                :
                                <TouchableOpacity
                                    onPress={() => {
                                        // this.props.navigation.navigate("MsgWorker");
                                    }}
                                    style={[ModalStyle.center, ModalStyle.button, {
                                        backgroundColor: COLORS.lightPurple,
                                    }]}>
                                    <Text
                                        style={[ModalStyle.midTXT, {
                                            color: COLORS.purple,
                                        }]}
                                    >
                                        Message Workers
                                    </Text>
                                </TouchableOpacity>
                            }


                        </Modal.Body>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}
// export default SuccessCancelmodal;
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
export default connect(mapStateToProps, mapDispatchProps)(SuccessCancelmodal);

