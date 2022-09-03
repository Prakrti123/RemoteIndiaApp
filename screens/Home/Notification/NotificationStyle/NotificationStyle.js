import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const NotificationStyle = StyleSheet.create({
    mainView: {
        width: SIZES.width,
        flex: 1,
    },
    content: {
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: COLORS.lightPurpleTrans,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    list: {
        // height: SIZES.height * 2
    },
    date: {
        ...FONTS.h3,
        height: SIZES.height * 0.05,
        paddingVertical: 6,
    }
})
export default NotificationStyle;