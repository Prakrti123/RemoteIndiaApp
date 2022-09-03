import { useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Appearance
} from "react-native";
import { COLORS, images } from "../../constants";
import {
    SplashScreenStyle
} from "../StyleIndex"

class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    state= {
        scheme: this.props.scheme,
        theme: this.props.theme,
        card: this.props.card
    }


    render() {

        const {scheme, theme, card} = this.state;

        return (
            <View style={theme === false ? SplashScreenStyle.MainView : [SplashScreenStyle.MainView, {backgroundColor: card}]}>

                {/* Splash Image */}
                <Image
                source={images.SplashImg}
                resizeMode={'contain'}
                style={SplashScreenStyle.SplashImg}
                />

                {/* Splash Remote India Text */}
                <Image
                source={images.RemoteIndia}
                resizeMode={'contain'}
                style={theme === false ? SplashScreenStyle.RemoteIndia : [SplashScreenStyle.RemoteIndia, {tintColor: COLORS.white2}]}
                />

            </View>
        )
    }
}
export default function(props) {

    const scheme = Appearance.getColorScheme();
    const colors = useTheme();
    const background = colors.background;
    const theme = scheme === 'light' ? false : true;
    const card = '#0f0f0f'
    // console.log(background);

    return(
        <SplashScreen {...props} scheme={scheme} theme ={theme} card={card}/>
    )
};