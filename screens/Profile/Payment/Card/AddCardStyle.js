import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const AddCardStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white2,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.3,
        marginHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.width * 0.05,
        paddingHorizontal: SIZES.width * 0.05,
        paddingVertical: SIZES.width * 0.05,
    },
    Line1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        ...FONTS.h2_5,
        color: COLORS.white2,
    },
    cardIcon: {
        width: SIZES.width * 0.25,
        height: SIZES.height * 0.05,
        // backgroundColor: COLORS.PinkBG,
    },
    Line2: {
        marginTop: SIZES.height * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bigText: {
        ...FONTS.h1,
        color: COLORS.white2,
    },
    smlBlod: {
        ...FONTS.h3_5,
        color: COLORS.white2,
    },
    smlText: {
        marginTop: 6,
        ...FONTS.body4,
        color: COLORS.white2,
    },
    InputSection: {
        marginHorizontal: SIZES.width * 0.05,
        // margin: SIZES.width * 0.05,
        // paddingHorizontal: SIZES.width * 0.05,
        paddingBottom: SIZES.width * 0.05,
        // backgroundColor: COLORS.white
    },
    title: {
        ...FONTS.h3,
        fontSize: 18,
        color: COLORS.black,
    },
    inputView: {
        paddingHorizontal: 15,
        marginVertical: 15,
        justifyContent: 'center',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.075,
        borderRadius: 8,
        backgroundColor: COLORS.lightGray2,
    },
    halfView: {
        paddingHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width * 0.42,
        height: SIZES.height * 0.075,
        borderRadius: 8,
        backgroundColor: COLORS.lightGray2,
    },
    calender: {
        width: 20,
        height: 20,
    },
    footer: {
        flex: 1,
        paddingBottom: 15,
        justifyContent: 'flex-end'
    },
    updateBTN: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    btnTXT: {
        ...FONTS.h3_5,
        color: COLORS.white
    },
})
export default AddCardStyle;