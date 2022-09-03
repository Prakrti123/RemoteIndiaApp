import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const ReviewStyle = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.white,
        elevation: 6,
    },
    mainView: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        borderBottomStartRadius: 0,
        backgroundColor: COLORS.purpleTrans,
    },
    profile: {
        width: SIZES.width * 0.12,
        height: SIZES.width * 0.12,
        marginRight: 5,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    top: {
        justifyContent: 'flex-start',
    },
    name: {
        marginLeft: 10,
        ...FONTS.h4,
        color: COLORS.black,
    },
    star: {
        width: 10,
        height: 10,
        tintColor: COLORS.purple,
    },
    rating: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLORS.purple,
        backgroundColor: COLORS.white,
        elevation: 2,
    },
    more: {

        marginLeft: 10,
        width: 20,
        height: 20,
        tintColor: COLORS.purple,
    },
    bottom: {
        flexDirection: 'row',
    },
    likes: {
        flexDirection: 'row',
    },
    likeIcon: {
        width: 20,
        height: 20,
    },
    text: {
        marginLeft: 10,
        ...FONTS.body4,
    },
    time: {
        ...FONTS.body5,
        marginLeft: 30,
        color: COLORS.gray1
    },
    review: {
        marginVertical: 10,
        ...FONTS.body3,
        fontSize: 14.5,
        color: COLORS.gray1
    },
    footer: {
        marginHorizontal: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    msgTxt: {
        ...FONTS.h3,
        color: COLORS.purple,
    },
    bookTxt: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    message: {
        width: SIZES.width*0.445,
        height: SIZES.height* 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.lightPurple,
    },
    bookBtn: {
        width: SIZES.width*0.445,
        height: SIZES.height* 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    },
});
export default ReviewStyle;