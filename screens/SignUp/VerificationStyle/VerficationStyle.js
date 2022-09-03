import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const VerificationStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    HeaderView: {
        marginVertical: 10,
        marginHorizontal: 15,
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
    contentView: {
        marginTop: 120,
        marginHorizontal: 30,
    },
    OTPView: {
        height: 150,
        // paddingHorizontal: 25,
        justifyContent: 'space-around',
        // backgroundColor: COLORS.black,
    },
    underlineStyleBase: {
        width: 56,
        height: 56,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: COLORS.lightGray3
    },
    underlineStyleHighLighted: {
        // backgroundColor: COLORS.lightGray3
    },
    continueBtn: {
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.lightGray3
    },
    bottomView: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default VerificationStyle;