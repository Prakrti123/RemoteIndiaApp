import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const SignInStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: COLORS.lavender
    },
    LOGOView: {
        flexDirection: "row",
        paddingTop: 50,
        marginHorizontal: 25,
        // backgroundColor: COLORS.gray
    },
    LOGOstyle: {
        width: 200,
        height: 150,
    },
    LOGOText: {
        tintColor: COLORS.black,
        position: 'absolute',
        top: 0,
        left: 90,
        width: 160,
        height: 360,
    },
    InputStyle: {
        flexDirection: 'row',
        marginTop: 6,
        borderRadius: 8,
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.lightGray
    },
    SignInBTN: {
        height: 45,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: COLORS.lightGray1,
    },
    SignInBTNText: {
        ...FONTS.h3
    },
    FooterView: {
        flex: 1,
        // bottom: -30,
        marginTop: 40,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    links: {
        width: 200,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconBox: {
        padding: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: COLORS.lightGray1,
        justifyContent: 'space-around',
    },
    continueBtn: {
        marginTop: 25,
        width: 250,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: COLORS.lightGray1,
    },
    continueText:{
        ...FONTS.h4,
        letterSpacing: 0.2,
        textAlign: 'center',
    },
    bottomView: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    bottomText: {
        ...FONTS.body5
    },
    SignUpText: {
        ...FONTS.h4,
        marginHorizontal: 5,
        color: COLORS.primary
    }
})
export default SignInStyle;