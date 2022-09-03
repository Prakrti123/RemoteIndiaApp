import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const PayMathodStyle = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: SIZES.width * 0.05,
        // backgroundColor: COLORS.orange,
    },
    content: {

    },
    text: {
        marginBottom: 20,
        ...FONTS.body3,
        letterSpacing: 0.54,
        color: COLORS.gray60,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    bottom: {
        // bottom: 50,
        // backgroundColor: COLORS.blue,
    },
    btn: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    btnTXT: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    payTXT: {
        marginRight: 15,
        ...FONTS.body4,
        fontSize: 16,
        color: COLORS.gray,
        textDecorationLine: 'line-through',
    },
    refundTXT: {
        ...FONTS.h4,
        fontSize: 16,
        color: COLORS.darkGray1,
        letterSpacing: 0.2,
    }
})
export default PayMathodStyle;