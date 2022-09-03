import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";

const BookingDetailStyle = StyleSheet.create({
    opacity: {
        marginTop: 15,
        paddingHorizontal:  15,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.white,
        elevation: 1.8,
    },
    main: {
        paddingHorizontal:  SIZES.width * 0.04,
        width: SIZES.width * 0.9,
        // height: SIZES.height * 0.16,
        alignItems: 'center',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    
    IMG: {
        width: SIZES.width * 0.22,
        height: SIZES.width * 0.22,
        borderRadius: 10,
    },
    textView: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    heading: {
        // marginTop: 20,
        ...FONTS.h3_5,
        fontSize: 17,
        color: COLORS.black,
    },
    bodyText: {
        marginTop: 4,
        ...FONTS.body4,
        fontSize: 15,
        color: COLORS.gray,
    },
    subText: {
        width: SIZES.width * 0.23,
        marginTop: 4,
        ...FONTS.body4,
        // fontSize: 18,
        color: COLORS.purple,
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: COLORS.lightPurple,
        borderRadius: 6,
    },
    chatBTN : {
        width: SIZES.width * 0.12,
        height: SIZES.width * 0.12,
        borderRadius: 50,
        backgroundColor: COLORS.lightPurple,
    },
    chat: {
        width: SIZES.width * 0.07,
        height: SIZES.width * 0.07,
        borderRadius: 50,
    },
    bottom: {
        width: SIZES.width * 0.825,
        height: SIZES.height * 0.04,
        // backgroundColor: COLORS.OrangeBG,
    },
    down: {
        marginVertical: 10,
        width: SIZES.width * 0.03,
        height: SIZES.width * 0.03,
    },
    smallTXT: {
        marginBottom: 4,
        ...FONTS.body4,
        // fontSize: 15,
        color: COLORS.darkGray3,
    },
    miniTXT: {
        marginBottom: 4,
        ...FONTS.body4,
        fontSize: 15,
        color: COLORS.gray,
    },
})
export default BookingDetailStyle;