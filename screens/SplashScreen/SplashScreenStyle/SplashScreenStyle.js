import React from "react";
import {
    StyleSheet
} from "react-native";
import { COLORS } from "../../../constants"

const SplashScreenStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    SplashImg: {
        width: 360,
        height: 250,
    },
    RemoteIndia: {
        width: 280,
        height: 50,
        marginBottom: "25%",
    }
});

export default SplashScreenStyle;