import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const ChatScreenStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white2,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendBtn: {
        marginVertical: SIZES.width * 0.012,
        marginRight: SIZES.width * 0.01,
        width: SIZES.width * 0.08,
        height: SIZES.width * 0.08,
        backgroundColor: COLORS.purple,
        borderRadius: 50,
    },
    sendIcon: {
        width: SIZES.width * 0.06,
        height: SIZES.width * 0.06,

    },

})
export default ChatScreenStyle;