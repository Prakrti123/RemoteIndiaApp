import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const LangStyle = StyleSheet.create({
    main: {
        // flex: 1,
        backgroundColor: COLORS.white,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        ...FONTS.h2_5,
        fontSize: 18,
        letterSpacing: 1,
        color: COLORS.black,
    },
    content: {
        // height: SIZES.height * 0.9,
        marginVertical: SIZES.width * 0.05,
        marginHorizontal: SIZES.width * 0.05,
        backgroundColor: COLORS.purpleTrans
    },
    list: {

    },
})
export default LangStyle;