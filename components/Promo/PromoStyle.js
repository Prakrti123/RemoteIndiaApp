import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const PromoStyle = StyleSheet.create({
    Btn: {
        marginVertical: 8,
        width: SIZES.width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: COLORS.white2
    },
    mainView: {
        width: SIZES.width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: COLORS.PinkBG,

    },
    content: {
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
        width: SIZES.width * 0.10,
        height: SIZES.width * 0.10,
        justifyContent: 'center',
        // tintColor: COLORS.white,
    },
    star: {
        left: SIZES.width * 0.02,
        bottom: SIZES.width * 0.003,
        // alignItems: 'center',
        width: SIZES.width * 0.044,
        height: SIZES.width * 0.044,
        // tintColor: COLORS.white,
    },
    text: {
        width: SIZES.width * 0.65,
    },
    title: {
        ...FONTS.h3_5,
        color: COLORS.purple
    },
    subTitle: {
        ...FONTS.body4
    },
    Check: {
        position: 'absolute',
        bottom: -SIZES.height * 0.025,
        right: 2,
        width: SIZES.width * 0.10,
        height: SIZES.width * 0.10,
        tintColor : COLORS.purple,
    },
})
export default PromoStyle;