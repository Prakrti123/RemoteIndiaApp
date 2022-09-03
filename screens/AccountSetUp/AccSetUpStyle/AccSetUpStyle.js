import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const AccSetUpStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: COLORS.lavender
    },
    HeaderView: {
        marginVertical: 20,
        marginLeft: 15,
        flexDirection: 'row',
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
    HeaderTitle: {
        ...FONTS.h2_5,
        marginHorizontal: 20,
    },
    contentView: {
        flex: 1,
        marginHorizontal: 10,
        // paddingTop: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.black,
    },
    ImageView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageStyle: {
        marginTop: 0,
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.4,
        // backgroundColor: COLORS.lavender
    },
    EditBtn: {
        width: 34,
        height: 34,
        position: 'absolute',
        bottom: 3,
        right: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.purple,
    },
    EditIcon: {
        width: 24,
        height: 24,
    },
    NextView: {
        width: SIZES.width * 0.8,
        marginTop: 10,
        // backgroundColor: COLORS.black
    },
    MainText: {
        ...FONTS.h2_5,
        marginBottom: 8,
    },
    InputView: {
        marginTop: 10,
        // height: SIZES.height * 0.082,
        justifyContent: 'space-around',
    },
    EmailView: {
        flexDirection: 'row',
        width: SIZES.width * 0.88,
        height: 50,
        marginTop: 15,
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
    DOBView: {
        flexDirection: 'row',
        width: SIZES.width * 0.88,
        height: 50,
        marginTop: 15,
        paddingHorizontal: 8,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray
    },

    // continue btn
    ViewBtn: {
        flex: 1,
        // height: SIZES.height * 0.38,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: COLORS.lightPink,
    },
    continueBtn: {
        width: SIZES.width * 0.89,
        height: SIZES.height * 0.066,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.purple,
        borderRadius: 50,
    },
    btnText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
})
export default AccSetUpStyle;