import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const LineBreakerStyle = StyleSheet.create({
    line: {
        width: SIZES.width * 0.83,
        height: 1.4,
        backgroundColor: COLORS.lightGray
    }
})
export default LineBreakerStyle;