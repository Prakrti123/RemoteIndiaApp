import React from "react";
import { 
    Appearance,
    Text, TextInput } from "react-native";
import { COLORS, SIZES } from "../constants";

class FormInput extends React.Component{

    constructor(props) {
        super(props);
    }

    state={
        theme: this.props.theme,

    }

    render() {

        const {
            theme
        } = this.state;

        return(
            <TextInput
            style={{
                color: this.props.valueColor,
                width: SIZES.width * 0.6
            }}
            value={this.props.value}
            maxLength = {this.props.maxLength}
            onFocus={this.props.onFocus}
            onChangeText={this.props.onChange}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderStyle}
            />
        )
    }
}
export default function (props) {

    const scheme = Appearance.getColorScheme();
    const theme = scheme === 'light' ? false : true

    return(
        <FormInput
        {...props}
        scheme={scheme}
        theme={theme}
        />
    )
};