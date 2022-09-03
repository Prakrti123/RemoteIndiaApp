import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const NotiStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    flex: {
        
    },
    center: {
        alignItems:'center',
        justifyContent: "center",
    },
    content: {
        marginTop: 20,
        marginBottom: 5,
    },
    optionView: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width,
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
    }
})
export default NotiStyle;