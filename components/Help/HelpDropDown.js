import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons } from "../../constants";
import { LineBreaker } from "../Index";
import DropDownStyle from "./DropDownStyle";

class HelpDropDown extends Component {

    render() {
        // console.log(this.props.title);

        return (
            
            <TouchableOpacity
                style={[DropDownStyle.main]}
                onPress={this.props.onPress}
            >

                <View style={DropDownStyle.flex}>

                    <Text style={DropDownStyle.title}>
                        {this.props.title}
                    </Text>

                    <Image
                        resizeMode={'contain'}
                        source={icons.DownArrow}
                        style={DropDownStyle.dropIcon}
                    />
                </View>

                <LineBreaker
                    color={COLORS.gray2}
                />

                <Text>
                    {this.props.description}
                </Text>

            </TouchableOpacity>
        )
    }
}
export default HelpDropDown;