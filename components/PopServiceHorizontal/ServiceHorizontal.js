import React, { Component } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../constants";
import ServiceHorizontalStyle from "./ServiceHorizontalStyle";

class SeriveHorizontal extends Component {

    render() {

        return (
            <TouchableOpacity
                style={[ServiceHorizontalStyle.Btn,
                {
                    paddingHorizontal: this.props.Selected === this.props.id ? 20 : 14,
                    backgroundColor: this.props.Selected === this.props.id || this.props.Selected === this.props.star ? COLORS.purple : this.props.colorBg,
                    borderColor: this.props.Selected != this.props.id || this.props.Selected != this.props.star ? this.props.border : COLORS.purple,
                    marginRight: this.props.id === 8 ? 20 : null,
                },
                ]}
                onPress={this.props.onPress}>

                {this.props.star ?
                    <Image
                        source={this.props.star}
                        resizeMode={'contain'}
                        style={[ServiceHorizontalStyle.star, 
                            {
                                tintColor: this.props.Selected === this.props.star ? COLORS.white : COLORS.primary
                            }
                        ]}
                    />
                    :
                    <></>
                }

                <Text style={[ServiceHorizontalStyle.textStyle,
                {
                    color: this.props.Selected === this.props.id ? COLORS.white2 : this.props.text
                }
                ]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}
export default SeriveHorizontal;
