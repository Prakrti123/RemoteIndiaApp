import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const DropDownStyle = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: SIZES.width * 0.05,
        marginHorizontal: SIZES.width * 0.05,
        marginTop: SIZES.width * 0.05,
        width: SIZES.width * 0.9,
        // height: SIZES.height * 0.,
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
    title: {
        ...FONTS.h3,
        color: COLORS.black,
    },
    dropIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.purple,
    },
})
export default DropDownStyle;