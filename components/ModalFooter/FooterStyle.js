import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const FooterStyle = StyleSheet.create({
    main: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: SIZES.width,
        height: SIZES.height * 0.14,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: COLORS.white,
        elevation: 15,
    },
    Btn: {
        width: SIZES.width * 0.88,
        height: SIZES.height * 0.08,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTXT: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    locContent: {
        width: SIZES.width * 0.9,
    },
    headingView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    locHeading: {
        marginVertical: 15,
        ...FONTS.h2_5,
        color: COLORS.black,
    },
    TXT: {
        marginBottom: 15,
        ...FONTS.h3_5,
        color: COLORS.black,
    },
    locView: {
        marginBottom: 15,
        paddingHorizontal: 15,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
    },
    locIcon: {
        width: SIZES.width * 0.1,
        height: SIZES.width * 0.1,
    },
    
})
export default FooterStyle;