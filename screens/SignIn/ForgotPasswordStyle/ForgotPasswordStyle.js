import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const ForgotPasswordStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: COLORS.lavender
    },
    HeaderView: {
        marginVertical: 20,
        marginLeft: 15,
        flexDirection: 'row',
        // backgroundColor: COLORS.white,
    },
    BackBtnView: {
        // alignItems: 'center',
        justifyContent: 'center'
    },
    BackBtn: {
        width: 20,
        height: 20,
    },
    HeaderTitle: {
        ...FONTS.h2_5,
        marginHorizontal: 20,
    },
    contentView: {
        marginHorizontal: 10,
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 280,
        height: 280,
    },
    subTitle: {
        ...FONTS.body3,
        fontSize: 17,
        letterSpacing: 0.6
    },
    optionView: {
        height: SIZES.height * 0.28,
        marginVertical: 10,
        justifyContent: 'space-around',
    },
    chatOption: {
        // height: 100,
        padding: 8,
        flexDirection: 'row',
        borderRadius: 14,
        borderWidth: 3,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white2,
    },
    msgOption: {
        // height: 100,
        padding: 8,
        flexDirection: 'row',
        borderRadius: 14,
        borderWidth: 3,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white2,
    },
    iconView: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.lightPurple
    },
    iconstyle: {
        width: 32,
        height: 32,
    },
    graytext: {
        ...FONTS.body4,
        color: COLORS.gray,
    },
    numText: {
        ...FONTS.body3,
    },
    FooterView: {
        height: SIZES.height * 0.066,
        marginHorizontal: 10,
        marginTop: 10,
        // backgroundColor: COLORS.white
    },
    continueBtn: {
        height: SIZES.height * 0.066,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    continueText: {
        ...FONTS.h3,
        color: COLORS.white,
    }
})
export default ForgotPasswordStyle;