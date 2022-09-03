import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const GoogleSignInStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: COLORS.lavender
    },
    HeaderView: {
        marginVertical: 20,
        marginLeft: 15,
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
        marginHorizontal: 15,
        // backgroundColor: COLORS.lavender
    },
    MainText: {
        ...FONTS.h1,
        fontSize: SIZES.h1 * 1.4,
        lineHeight: 50,
        marginTop: 40,
    },
    TwoInputView: {
        marginTop: 30,
        height: 140,
        justifyContent: 'space-around',
    },
    EmailView: {
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 8,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: COLORS.lightGray
    },
    EmailIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        tintColor: COLORS.gray
    },
    PasswordView: {
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 8,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray
    },
    FooterView: {
        flex: 1,
        height: 300,
        // flexDirection: 'column',
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    rememberView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TickBox: {
        marginVertical: 15,
        width: 25,
        height: 25,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: COLORS.primary
    },
    SignInBtn: {
        width: "100%",
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
    },
})
export default GoogleSignInStyle;