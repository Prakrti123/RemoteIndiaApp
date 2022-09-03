import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const NotiComponentStyle = StyleSheet.create({
    mainView: {
        width: SIZES.width * 0.9,
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: COLORS.lightGray2
    },
    content: {
        backgroundColor: COLORS.PinkBG,
    },
    bubble: {
        width: SIZES.width * 0.25,
        height: SIZES.width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: SIZES.width * 0.15,
        height: SIZES.width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: SIZES.width * 0.08,
        height: SIZES.width * 0.08,
        tintColor: COLORS.white,
    },
    text: {
        width: SIZES.width * 0.65,
    },
    title: {
        ...FONTS.h3_5
    },
    subTitle: {
        ...FONTS.body4
    },
})
export default NotiComponentStyle;