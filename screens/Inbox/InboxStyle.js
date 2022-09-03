import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const InboxStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    flex: {
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',

    },
    tab: {
        marginBottom: 10,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.06,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    list: {
        height: SIZES.height * 0.86,
        paddingTop: SIZES.height * 0.02,
        paddingBottom: SIZES.height * 0.1,
    },
    chats: {
        width: SIZES.width * 0.45,
        height: SIZES.height * 0.06,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderColor: COLORS.lightGray3,
    },
    tabTXT: {
        ...FONTS.h3,
        color: COLORS.gray2,
    },
    AddBtn: {
        width: SIZES.width * 0.15,
        height: SIZES.width * 0.15,
        position: 'absolute',
        bottom: SIZES.width * 0.25,
        right: SIZES.width * 0.05,
        borderRadius: 50,
        elevation: 6,
        backgroundColor: COLORS.purple,
    },
    plus: {
        ...FONTS.body1,
        color: COLORS.white2,
    }
})
export default InboxStyle;