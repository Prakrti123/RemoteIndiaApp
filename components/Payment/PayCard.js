import { getType } from "@reduxjs/toolkit";
import React, { Component } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import PayCardStyle from "./PayCardStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";

class PayCard extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        cardNo: this.props.cardNo,
    }

    render() {

        const {
            cardNo
        } = this.state;

        return (
            <TouchableOpacity
                style={[PayCardStyle.mainView, {
                    backgroundColor: this.props.appThem2?.card_BG,
                }]}
            >
                <View style={PayCardStyle.flex}>

                    <Image
                        source={this.props.image}
                        resizeMode={'contain'}
                        style={PayCardStyle.icon}
                    />

                    <Text style={[PayCardStyle.text, {
                        color: this.props.appThem2?.text_Black_White,
                    }]}>
                        {this.props.cardName}
                    </Text>

                    <Text style={[PayCardStyle.text, {
                        color: this.props.appThem2?.text_Black_White,
                    }]}>
                        {this.props.cardNo}
                    </Text>

                </View>

                <View>
                    {this.props.Selected
                        ?
                        <TouchableOpacity
                            onPress={this.props.onPress}>
                            <Image
                                source={this.props.Selected}
                                style={PayCardStyle.radio}
                            />
                        </TouchableOpacity>
                        :
                        <Text style={PayCardStyle.status}>
                            {this.props.status}
                        </Text>
                    }

                </View>
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
    // handleToggle
}

// export default PayCard;
export default connect(mapStateToProps, mapDispatchProps)(PayCard);