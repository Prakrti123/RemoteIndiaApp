import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const BookedServiceStyle = StyleSheet.create({
    BtnView: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.088,
        paddingHorizontal: 15,
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 2,
        borderRadius: 10,
        backgroundColor: COLORS.white,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flexDirection: "column",
    },
    title: {
        ...FONTS.h3_5,
        letterSpacing: 0.4,
        color: COLORS.black,
    },
    counter: {
        width: SIZES.width * 0.26,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: COLORS.OrangeBG,
    },
    count: {
        ...FONTS.h4,
        color: COLORS.black,
    },
    countBtn: {
        width: SIZES.width * 0.09,
        height: SIZES.width * 0.09,
        borderRadius: 50,
        backgroundColor: COLORS.lightPurple,
    },
    minus: {
        width: SIZES.width * 0.07,
        height: SIZES.width * 0.07,
    },
    smallTXT: {
        ...FONTS.body5,
        color: COLORS.gray,
    }
    
})
export default BookedServiceStyle;