import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const ServiceHorizontalStyle = StyleSheet.create({
    Btn: {
        flexDirection: 'row',
        height: SIZES.height* 0.062,
        marginBottom: 10,
        marginHorizontal: 6,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.purple,
        elevation: 4,
    },
    textStyle: {
        ...FONTS.h3_5,
        letterSpacing: 0.3,
    },
    star: {
        width: 18,
        height: 18,
        marginRight: 10,
        tintColor: COLORS.primary,
    }
})
export default ServiceHorizontalStyle;