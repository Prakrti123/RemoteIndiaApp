import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const BookCStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        marginBottom: 15,
    },
    content: {
        height: SIZES.height * 0.8,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    detailTxt: {
        marginBottom: 15,
        ...FONTS.body3,
        color: COLORS.darkGray1,
    },
    list: {
        marginBottom: 20,
        // paddingTop: 5,
        paddingBottom: 15,

    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    continue: {
        width: SIZES.width * 0.8,
        height: SIZES.height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    btnTxt: {
        ...FONTS.h3,
        color: COLORS.white,
    }
})
export default BookCStyle;