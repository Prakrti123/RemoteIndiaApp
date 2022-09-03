import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const RadioStyle = StyleSheet.create({
    main: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        ...FONTS.body3,
        letterSpacing: 0.3,
        color: COLORS.black,
    },
    radio: {
        width: SIZES.width * 0.05,
        height: SIZES.width * 0.05,
        tintColor: COLORS.purple,
    }
});
export default RadioStyle;