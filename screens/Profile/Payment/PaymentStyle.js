import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const PaymentStyle = StyleSheet.create({
    mainView: {
        flex : 1,
        backgroundColor: COLORS.lightGray2,
    },
    content: {
        marginVertical: 15,
        paddingHorizontal: SIZES.width * 0.05,
        // backgroundColor: COLORS.orange,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: 'center',
        justifyContent: "center",
    },
    footer: {
        flex: 1,
        paddingBottom: 15,
        justifyContent: 'flex-end'
    },
    updateBTN: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    btnTXT: {
        ...FONTS.h3_5,
        color: COLORS.white
    },
})
export default PaymentStyle;