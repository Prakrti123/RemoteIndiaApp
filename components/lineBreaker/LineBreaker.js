import { View } from "native-base";
import React, { Component } from "react";
import { Appearance } from "react-native";
import { COLORS } from "../../constants";
import HomeStyle from "../../screens/Home/HomeStyle/HomeStyle";
import LineBreakerStyle from "./LineBreakerStyle";

class LineBreaker extends Component {

    constructor (props) {
        super(props);
    }

    state={
        theme: this.props.theme
    } 

    render() {

        // console.log(this.props.color);
        const {theme} = this.state;

        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View 
                style={[
                    HomeStyle.line,
                    {
                        backgroundColor: this.props.color
                    }
                ]}
                />
            </View>
        )
    }
}
export default function(props) {

    const scheme = Appearance.getColorScheme();
    const theme = scheme === 'light' ? false : true;

    return(
        <LineBreaker
        {...props}
        theme={theme}
        />
    )
};