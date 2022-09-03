import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const EReceiptStyle = StyleSheet.create({
    main: {
        paddingBottom: SIZES.height * 0.16,
        marginHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.width * 0.05,
        backgroundColor: COLORS.lightGray2,
    },
    content: {
        marginBottom: SIZES.width * 0.05,
        paddingHorizontal: SIZES.width * 0.05,
        paddingVertical: SIZES.width * 0.05,
        borderRadius: 12,
        backgroundColor: COLORS.white,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    smlTXT: {
        marginVertical: 12,
        ...FONTS.body3,
        lineHeight: 20,
        fontSize: 16,
        letterSpacing: 0.7,
        color: COLORS.gray70,
    },
    midTXT: {
        marginVertical: 12,
        ...FONTS.body3,
        lineHeight: 20,
        fontSize: 17,
        letterSpacing: 0.2,
        color: COLORS.black,
    },
    detail: {
        marginBottom: SIZES.width * 0.05,
        paddingHorizontal: SIZES.width * 0.05,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.1,
        borderRadius: 12,
        backgroundColor: COLORS.white,
    },
    downIcon: {
        width: SIZES.width * 0.05,
        height: SIZES.width * 0.05,
    },
    icon: {
        width: SIZES.width * 0.06,
        height: SIZES.height * 0.06,
    },
    barCode: {
        marginHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.height * 0.05,
        width: SIZES.width * 0.7,
        height: SIZES.height * 0.15,
        tintColor: COLORS.black,
    },
    statusBtn: {
        width: SIZES.width * 0.15,
        height: SIZES.width * 0.1,
        backgroundColor: COLORS.lightPurple,
        borderRadius: 10,
    },
    moreView: {
        zIndex: 2,
        position: 'absolute',
        top: SIZES.height * 0.07,
        right: 0,
        paddingHorizontal: SIZES.width * 0.04,
        paddingVertical: SIZES.width * 0.04,
        justifyContent: 'center',
        width: SIZES.width * 0.6,
        height: SIZES.height * 0.25,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        elevation: 3,
    },
    moreIcon: {
        width: SIZES.width * 0.06,
        height: SIZES.width * 0.06,
    },
    lineBreak: {
        width: SIZES.width * 0.52,
        height: 1.5,
        backgroundColor: COLORS.lightGray2,
    },
    more: {
        position: 'absolute',
        top: - SIZES.height * 0.05,
        right: SIZES.width * 0.03,
        zIndex: 4,
    }
})
export default EReceiptStyle;