import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const OtpPasswordStyle = StyleSheet.create({
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
        flex: 1,
        marginHorizontal: 10,
        paddingTop: SIZES.padding * 5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.lavender,
    },
    MainText: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: 50,
    },
    OTPView: {
        // width: SIZES.width * 0.8,
        height: SIZES.height * 0.12,
        marginVertical: 20,
        justifyContent: 'space-around',
        // backgroundColor: COLORS.black,
    },
    underlineStyleBase: {
        width: 56,
        height: 56,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: COLORS.lightGray3
    },
    underlineStyleHighLighted: {
        // backgroundColor: COLORS.lightGray3
    },
    bottomView: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewBtn: {
        height: SIZES.height * 0.38,
        justifyContent: 'flex-end',
        // backgroundColor: COLORS.lightPink,
    },
    verifyBtn: {
        width: SIZES.width * 0.89,
        height: SIZES.height * 0.066,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
    },
    btnText: {
        ...FONTS.h3,
        color: COLORS.white,
    }
})
export default OtpPasswordStyle;