import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const StackNavStyle = StyleSheet.create({
    MainHeader: {
        backgroundColor: COLORS.white,
        height: SIZES.height * 0.08,
    },
    MainView: {
        flex: 1,
        backgroundColor: COLORS.purple
    },
    tabBar: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.08,
        marginHorizontal: SIZES.width * 0.05,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: SIZES.width * 0.05,
        borderRadius: 50,
        elevation: 4,
        backgroundColor: COLORS.white,
    },
    // headerLeft
    ProfileBtn: {
        width: SIZES.height * 0.08,
        height: SIZES.height * 0.08,
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    ProfileStyle: {
        width: SIZES.height * .06,
        height: SIZES.height * .06, 
        // marginLeft: 10 ,
    },
    BackStyle: {
        width: SIZES.width * .07,
        height: SIZES.height * .04, 
    },
    // headerTitle
    headerTitle: {

    },
    headerLinear: {
        flexDirection: 'row',
    },
    smallTitle: {
        ...FONTS.body4,
        color: COLORS.gray1
    },
    title: {
        ...FONTS.h2_5,
        marginLeft: 15,
    },
    bigTitle: {
        ...FONTS.h3,
    },
    RightIcon: {
        width: SIZES.width * 0.07,
        height: SIZES.width * 0.07,
        marginRight: 10,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})
export default StackNavStyle;