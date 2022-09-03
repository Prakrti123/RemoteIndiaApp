import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const SecureStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    content: {
        // flex: 1,
        marginHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.width * 0.05,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        width: SIZES.width * 0.12,
        height: SIZES.width * 0.07,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: COLORS.purple,
        borderRadius: 50,
        borderWidth: SIZES.width * 0.01,
        borderColor: COLORS.purple,
        elevation: 6,
    },
    notSelected: {
        width: SIZES.width * 0.12,
        height: SIZES.width * 0.07,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: COLORS.gray2,
        borderRadius: 50,
        borderWidth: SIZES.width * 0.01,
        borderColor: COLORS.gray2,
        elevation: 6,
    },
    circle: {
        width: SIZES.width * 0.05,
        height: SIZES.width * 0.05,
        borderRadius: 50,
        backgroundColor: COLORS.white2,
    },
    optionView: {
        marginTop: 8,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.075,
        borderRadius: 8,
        backgroundColor: COLORS.white2,
    },
    EmailIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        tintColor: COLORS.gray
    },
    NotiTXT: {
        ...FONTS.body2,
        fontSize: 17,
        color: COLORS.black
    },
    icon: {
        width: SIZES.width * 0.05,
        height: SIZES.width * 0.05,
    },
    Footer: {
        paddingHorizontal: SIZES.width * 0.05,
        paddingVertical: SIZES.width* 0.05,
    },
    BTN: {
        marginBottom: SIZES.width * 0.05,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.085,
        backgroundColor: COLORS.lightPurple,
        borderRadius: 50,
    },
    btnTXT: {
        ...FONTS.h2,
        fontSize: 17,
        letterSpacing: 1,
        color: COLORS.black
    },
})
export default SecureStyle;