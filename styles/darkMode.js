import React from "react";
import {
    StyleSheet
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const darkMode = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    BoardingScreenText: {
        ...FONTS.h3,
        color: COLORS.white
    },
    DarkModeBTN : {
        zIndex: 3,
        position: 'absolute',
        top: 10,
        right: 10,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius
    },
    DarkModeBTN_Text: {
        ...FONTS.h3,
        color: COLORS.white
    }
});
export default darkMode;