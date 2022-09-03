import { theme, View } from "native-base";
import React, { Component } from "react";
import {
    Image, TouchableOpacity,
    Text,
    Appearance,
} from "react-native";
import { handleToggle } from "../../store/action/toggleActions";
import { COLORS, FONTS } from "../../constants";
import OfferServiceStyle from "./OfferServiceStyle";
import { connect } from "react-redux";

class OfferSerivce extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        theme: this.props.theme,
    }

    render() {

        const {
            theme
        } = this.state;

        return (
            <TouchableOpacity
                style={OfferServiceStyle.MainView}
                onPress={this.props.onPress}
            >
                <View style={[OfferServiceStyle.shadowView, {
                    backgroundColor: this.props.btn_BG
                }]}>
                    {/* icon View */}
                    <View style={[OfferServiceStyle.IconView,
                    {
                        backgroundColor: this.props.colorBg,
                        borderColor: this.props.border,
                    }
                    ]}>

                        <Image
                            source={this.props.icon}
                            resizeMode={'contain'}
                            style={[OfferServiceStyle.Icon, { tintColor: this.props.color }]}
                        />
                    </View>
                </View>


                <Text style={{
                    ...FONTS.h5,
                    letterSpacing: 0.8,
                    color: this.props.text,
                }}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>

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

// export default connect(mapStateToProps, mapDispatchProps)(OfferSerivce);
export default connect(mapStateToProps, mapDispatchProps)(OfferSerivce);