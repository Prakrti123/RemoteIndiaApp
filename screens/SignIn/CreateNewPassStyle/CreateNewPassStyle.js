import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const CreateNewPassStyle = StyleSheet.create({
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
        width: SIZES.width * 0.85,
        height: SIZES.width * 0.85,
        // backgroundColor: COLORS.lavender
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
    TwoInputView: {
        height: SIZES.height * 0.082,
        justifyContent: 'space-around',
        // backgroundColor: COLORS.lavender
    },
    EmailView: {
        flexDirection: 'row',
        height: 50,
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
    PasswordView: {
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 8,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray
    },
    rememberView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TickBox: {
        marginVertical: 15,
        width: 25,
        height: 25,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: COLORS.primary
    },
    
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
        backgroundColor: COLORS.primary,
        borderRadius: 50,
    },
    btnText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    // modal
    ModalContent: {
        paddingHorizontal: -15,
        backgroundColor: COLORS.white2
    },
    ModalBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Bubble: {
        width: SIZES.width * 0.68,
        height: SIZES.width * 0.68,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.96,
    },
    PurpleCircle: {
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.96,
    },
    Shield: {
        width: SIZES.width * 0.14,
        height: SIZES.width * 0.14,
        // marginRight: 15,
    },
    ModalText: { 
        marginTop: -20,
        marginBottom: 10,
        ...FONTS.h2,
        color: COLORS.purple
    },
    ModalSubText: {
        ...FONTS.body3,
        paddingHorizontal: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: COLORS.black,
    }

})
export default CreateNewPassStyle;