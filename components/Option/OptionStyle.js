import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const OptionStyle = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: SIZES.width,
        height: SIZES.height * 0.064,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftView: {
        flexDirection: 'row',
        // backgroundColor: COLORS.blue
    },
    backBtn: {
    },
    back: {
        width: 20,
        height: 20,
        // borderRadius: 10,
        tintColor: COLORS.darkGray2,
        // backgroundColor: COLORS.black
    },
    moreBtn: {
        // flex: 1,
        // backgroundColor: COLORS.black,
        justifyContent: 'flex-end',
    },
    title: {
        ...FONTS.h3_5,
        marginLeft: SIZES.width * 0.04,
        letterSpacing: 0.5,
    },
    mode: {
        width: SIZES.width * 0.13,
        height: SIZES.height * 0.038,
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: SIZES.width * 0.006,
        borderColor: COLORS.lightGray,
        backgroundColor: COLORS.lightGray,
    },
    switch: {
        position: 'absolute',
        width: SIZES.width * 0.053,
        height: SIZES.width * 0.053,
        borderRadius: 50,
        backgroundColor: COLORS.white,
    },
})
export default OptionStyle;