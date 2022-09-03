import { View } from "native-base";
import React, { Component } from "react";
import { StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../../constants";

const ChatStyle = StyleSheet.create({
    mainView: {
        marginBottom: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.1,
        borderRadius: 5,
        elevation: 4,
        backgroundColor: COLORS.white2,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textView: {
        // alignItems:"center",
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    name: {
        ...FONTS.h2_5,
        marginBottom: 6,
    },
    smallTXT: {
        ...FONTS.body4,
    },
    Image: {
        width: SIZES.width * 0.15,
        height: SIZES.width * 0.15,
        borderRadius: 50,
    },
    Icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    CallBTN: {
        width: SIZES.width * 0.08,
        height: SIZES.width * 0.08,
        borderRadius: 50,
        backgroundColor: COLORS.lightPurple,
    },
    Call: {
        width: SIZES.width * 0.07,
        height: SIZES.width * 0.07,
        tintColor: COLORS.purple
    },
    notiView: {
        flexDirection: 'column',
        position: 'absolute',
        right: 8,
        bottom: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // backgroundColor: COLORS.OrangeBG,
    }
})
export default ChatStyle;