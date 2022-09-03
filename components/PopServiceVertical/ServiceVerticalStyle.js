import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const ServiceVerticalStyle = StyleSheet.create({
    ServiceView: {
        flexDirection: 'row',
        width: SIZES.width * 0.9,
        paddingHorizontal: 10,
        marginVertical: 8,
        alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 18,
        backgroundColor: COLORS.lightGray2,
        elevation: 4,
    },
    imageView: {
        width: SIZES.width * 0.25,
        height: SIZES.width * 0.25,
        paddingTop: 25,
        marginVertical: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 20,
        // zIndex: 2,
        backgroundColor: COLORS.blue
    },
    cleaner: {
        width: SIZES.width * 0.25,
        height: SIZES.width * 0.25,
        // zIndex: -2,
        borderRadius: 20,
    },
    text: {
        marginHorizontal: 12,
    },
    name: {
        ...FONTS.body5,
        color: COLORS.gray,
    },
    title: {
        ...FONTS.h3,
        letterSpacing: 0.3,
        color: COLORS.black,
    },
    price: {
        ...FONTS.h4,
        color: COLORS.purple,
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    star: {
        width: 20,
        height: 26,
    },
    BookMarkBox: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 15,
        zIndex: 3,
    },
    BookMark: {
        width: 30,
        height: 30,
        tintColor: COLORS.purple,
        
    },
    gray: {
        ...FONTS.body5,
        color: COLORS.darkGray,
    }
})
export default ServiceVerticalStyle;