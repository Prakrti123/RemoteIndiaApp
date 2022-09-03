import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const PayCardStyle = StyleSheet.create({
    mainView: {
        marginBottom: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.1,
        backgroundColor: COLORS.white2,
        borderRadius: 8,
        elevation: 0.5,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: SIZES.width * 0.08,
        height: SIZES.width * 0.08,
        marginRight: SIZES.width * 0.06,
    },
    text: {
        ...FONTS.h3,
        fontSize: 18,
        color: COLORS.darkGray1,
    },
    status: {
        ...FONTS.body5,
        padding: 10,
        color: COLORS.purple,
        borderRadius: 14,
        backgroundColor: COLORS.purpleTrans,
    },
    radio: {
        width: SIZES.width * 0.06,
        height: SIZES.width * 0.06,
        // marginRight: 15,
    },
})
export default PayCardStyle;