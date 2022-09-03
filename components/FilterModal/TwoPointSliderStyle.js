import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const TwoPointSliderStyle = StyleSheet.create({
    selected: {
        backgroundColor: COLORS.primary,
    },
    tracker: {
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2
    },
    markerView: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 4,
        borderColor: COLORS.primary,
        elevation: 2,
    },
    markerText: {
        marginTop: 5,
        color: COLORS.darkGray,
        ...FONTS.body3
    },
})
export default TwoPointSliderStyle;