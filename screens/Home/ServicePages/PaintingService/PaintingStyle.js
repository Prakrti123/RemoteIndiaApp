import React from "react";
import { StyleSheet } from "react-native";
import { SIZES } from "../../../../constants";

const PaintingStyle = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: SIZES.width * 0.05,
        paddingVertical: 5,
    },
    list: {
        // marginHorizontal: SIZES.width * 0.02,
    }
})
export default PaintingStyle;