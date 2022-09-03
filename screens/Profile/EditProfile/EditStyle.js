import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const EditStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        // backgroundColor: COLORS.OrangeBG
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems:'center',
        justifyContent: "center",
    },
    content: {
        paddingHorizontal: SIZES.width * 0.05,
        marginTop: 20,
        marginBottom: 5,
    },
    inputView: {
        paddingHorizontal: 15,
        marginBottom: 15,
        justifyContent: 'center',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.075,
        borderRadius: 8,
        backgroundColor: COLORS.lightGray,
    },
    EmailIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        tintColor: COLORS.gray
    },
    DOBView: {
        flexDirection: 'row',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.075,
        // marginTop: 15,
        // paddingHorizontal: 8,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray
    },
    footer: {
        marginVertical: 15,
    },
    updateBTN: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
    btnTXT: {
        ...FONTS.h3_5,
        color: COLORS.white
    }
})
export default EditStyle;