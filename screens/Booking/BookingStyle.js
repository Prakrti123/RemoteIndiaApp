import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


const BookingStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    tab: {
        width: SIZES.width * 0.3,
        height: SIZES.height* 0.08,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.gray2,
    },
    tabTXT: {
        ...FONTS.h3,
        fontSize: 17,
        color: COLORS.gray,
    },
    category: {
        marginTop: SIZES.width * 0.05,
        marginHorizontal: 12,
        marginBottom: 14,
        // backgroundColor: COLORS.lightGray,
        
    },
    content: {
        alignItems: 'center',
        marginVertical: 15,
    },
    list: {
        marginBottom: 20,
        paddingBottom: SIZES.height * 0.33,
    },
    IMG: {
        marginTop: 20,
        width: SIZES.width * 0.9,
        height: SIZES.width * 0.6,
    },
    noBokingBodyTXT: {
        marginTop: 20,
        ...FONTS.h3_5,
        // fontSize: 18,
        color: COLORS.black,
    },
    noBookingSubText: {
        marginTop: 15,
        textAlign: 'center',
        ...FONTS.body4,
        // fontSize: 18,
        color: COLORS.gray1,
    },
    makeNewBooking: {
        marginTop: SIZES.height * 0.05,
        width: SIZES.width * 0.8,
        height: SIZES.height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightPurple,
        borderRadius: 50,
    },
    modal: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: SIZES.width,
        height: SIZES.height * 0.4,
        backgroundColor: COLORS.white
    },
    modalBody: {
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    dash: {
        width: SIZES.width * 0.08,
        height: 2,
        borderRadius: 10,
        marginTop: -5,
        marginBottom: 12,
        backgroundColor: COLORS.gray50,
    },
    txt: {
        ...FONTS.h2_5,
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 15,

    },
    btn: {
        borderRadius: 50,
        backgroundColor: COLORS.lightPurple,
    },
    btnTxt: {
        ...FONTS.body3,
        color: COLORS.purple,
        marginHorizontal: SIZES.width * 0.08,
        marginVertical: 10,
    },
})
export default BookingStyle;