import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const ReviewStyle = StyleSheet.create({
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
        width: SIZES.width * 0.194,
        height: SIZES.width * 0.12,
    },
})
export default ReviewStyle;