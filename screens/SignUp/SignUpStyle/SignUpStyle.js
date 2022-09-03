import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const SignUpStyle =  StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: COLORS.white
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
    contentBox: {
        // backgroundColor: COLORS.white
    },
    LOGOView: {
        flexDirection: "row",
        paddingTop: 15,
        marginHorizontal: 35,
        // backgroundColor: COLORS.gray
    },
    LOGOstyle: {
        width: 200,
        height: 120,
    },
    LOGOText: {
        tintColor: COLORS.black,
        position: 'absolute',
        top: 0,
        left: 90,
        width: 140,
        height: 190,
    },
    contentStyle: {
        marginTop: 20,
        marginHorizontal: 15,
        // backgroundColor: COLORS.white
    },
    firstNameMainStyle: {
        marginTop: 15,
    },
    firstNameView: {
        height: 40,
        flexDirection: 'row',
        marginTop: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: COLORS.lightGray2
    },
    firstNameTO: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: COLORS.lightGray
    },
    SignInBtnTO: {
        marginTop: 40,
        marginHorizontal: 10,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: COLORS.gray3
    },
    bottomView: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomText: {
        ...FONTS.body5
    },
    SignUpText: {
        ...FONTS.h4,
        marginHorizontal: 5,
        color: COLORS.primary
    },
})
export default SignUpStyle;