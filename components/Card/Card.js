import React, { Component } from "react";
import { Image, View } from "react-native";
import CardStyle from "./CardStyle";

class Card extends Component {

    render() {
        return(
            <View style={CardStyle.mainView}>

                <Image
                resizeMode={'contain'}
                source={this.props.image}
                style={CardStyle.img}
                />                
            </View>
        )
    }
}
export default Card;