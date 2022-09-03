import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { COLORS, icons } from "../../constants";
import { LineBreaker } from "../Index";
import RadioStyle from "./RadioStyle";
import { handleToggle } from "../../store/action/toggleActions";

class RadioSelector extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        // IsSelected: this.props.IsSelected,
    }

    render() {

        const {
            // IsSelected
        } = this.state;

        return (
            <>

                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={[RadioStyle.main, RadioStyle.flex, {
                        backgroundColor: this.props.appThem2?.screen_BG,
                    }]}>

                    <Text style={[RadioStyle.name, {
                        color: this.props.appThem2?.text_Black_White,
                    }]}>
                        {this.props.name}
                    </Text>

                    <Image
                        source={this.props.IsSelected}
                        style={RadioStyle.radio}
                        resizeMode={'contain'}
                    />


                </TouchableOpacity>

                <LineBreaker
                    color={this.props.appThem2?.lineBreaker2}
                />
            </>
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

export default connect(mapStateToProps, mapDispatchProps)(RadioSelector);