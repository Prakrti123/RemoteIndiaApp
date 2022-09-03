import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const HeaderStyle = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: SIZES.width,
        height: SIZES.height * 0.07,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        elevation: 2,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftView: {
        flexDirection: 'row',
    },
    backBtn: {
    },
    back: {
        width: 25,
        height: 25,
        borderRadius: 10,
        // backgroundColor: COLORS.black
    },
    moreBtn: {
        // flex: 1,
        // backgroundColor: COLORS.black,
        justifyContent: 'flex-end',
    },
    title: {
        ...FONTS.h2_5,
        marginLeft: 15,
    },
})
export default HeaderStyle;