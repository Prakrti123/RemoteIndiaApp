import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const OfferServiceStyle = StyleSheet.create({

    MainView: {
        width: SIZES.width * 0.22,
        height: SIZES.height * 0.128,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        paddingVertical: 10,
    },
    shadowView: {
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 3,
        backgroundColor: COLORS.white,
    },
    IconView: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 4,
        // direction: 30,
        
    },
    Icon: {
        width: SIZES.width * 0.08,
        height: SIZES.width * 0.08,
    },
    title: {
        ...FONTS.h5,
        letterSpacing: 0.8,
        color: COLORS.black,
    }

})
export default OfferServiceStyle;