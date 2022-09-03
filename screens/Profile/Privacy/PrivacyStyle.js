import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const PrivacyStyle = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: COLORS.white2,
    },
    content: {
        paddingHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.width * 0.03,
    },
    txtSection: {
        marginVertical: 10,
    },
    headTXT: {
        marginBottom: 10,
        ...FONTS.h2_5,
        color: COLORS.black,
    },
    smallTXT: {
        ...FONTS.body4,
        color: COLORS.darkGray2,

    },
})
export default PrivacyStyle;
