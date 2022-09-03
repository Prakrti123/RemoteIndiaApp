import React, { Component } from "react";
import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { COLORS, icons } from "../../constants";
import FormInput from "../FormInput";
import FooterStyle from "./FooterStyle";

class Footer extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        TotalAmount: '125',
        location: this.props.location,
    }

    render() {

        const {
            TotalAmount, location,
        } = this.state;

        return (
            <KeyboardAvoidingView

                style={[FooterStyle.main, FooterStyle.center, {
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.appThem2?.card_BG,
                }]}>

                {this.props.locationComponent
                    ?
                    <View style={[FooterStyle.locContent]}>

                        <View style={[FooterStyle.headingView]}>
                            <Text style={[FooterStyle.locHeading, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Location Details
                            </Text>
                        </View>


                        <Text style={[FooterStyle.TXT, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Address
                        </Text>

                        <View style={[FooterStyle.locView, {
                            backgroundColor: this.props.appThem2?.inputBox
                        }]}>

                            <FormInput
                                value={location}
                                valueColor={this.props.appThem2?.inputText}
                                onFocus={() => {}}
                                onChange={() => {}}
                                placeholder={'Enter location'}
                                placeholderStyle={this.props.appThem2?.inputText}
                            />

                            <Image
                                source={icons.Location3D}
                                resizeMode={'contain'}
                                style={[FooterStyle.locIcon]}
                            />
                        </View>

                    </View>
                    :
                    <></>
                }

                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={[FooterStyle.Btn, FooterStyle.center]}
                >
                    <Text style={[FooterStyle.btnTXT, {
                        color: COLORS.white,
                    }]}>
                        {this.props.ButtonText}
                    </Text>
                </TouchableOpacity>
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

// check weather the data fetched is in required form or not
export default connect(mapStateToProps)(Footer);

