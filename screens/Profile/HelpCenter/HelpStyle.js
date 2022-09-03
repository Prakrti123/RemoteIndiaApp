import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const HelpStyle = StyleSheet.create({
    mainView: {
        // flex: 1,
        backgroundColor: COLORS.white2,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    tab: {
        width: SIZES.width * 0.45,
        height: SIZES.height* 0.08,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.gray2,
    },
    tabTXT: {
        ...FONTS.h3,
        fontSize: 17.5,
        color: COLORS.gray,
    },
    category: {
        marginTop: SIZES.width * 0.05,
        marginHorizontal: 12,
        marginBottom: 14,
        // backgroundColor: COLORS.lightGray,
        
    },
    SearchView: {
        // marginTop: -60,
        marginHorizontal: SIZES.width * 0.05,
        flexDirection: 'row',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.068,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: COLORS.lightGray,
    },
    SearchInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    parameterBtn: {
        borderRadius: 50,
    },
    searchIcon: {
        width: SIZES.width * 0.06,
        height: SIZES.width * 0.06,
        marginHorizontal: 2,
        // margin: 5,
        tintColor: COLORS.gray2,
    },
    content: {
        // flex: 1,
        paddingBottom: 150,
        // height: SIZES.height * 0.632,
        // marginHorizontal: SIZES.width * 0.05,
        // marginVertical: SIZES.width * 0.05,
        // backgroundColor: COLORS.OrangeBG,
    },
    list: {
        flex: 1,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.1,
        // backgroundColor: COLORS.blue
    },
    main: {
        flex: 1,
        elevation: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginHorizontal: SIZES.width * 0.05,
        marginTop: SIZES.width * 0.05,
        width: SIZES.width * 0.9,
        // height: SIZES.height * 0.09,
        borderRadius: 12,
        backgroundColor: COLORS.white,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.black,
        marginBottom: 10,
    },
    description: {
        ...FONTS.body4,
        color: COLORS.gray,
        marginTop: 10,
    },
    dropIcon: {
        marginBottom: 10,
        width: 20,
        height: 20,
        tintColor: COLORS.purple,
    },
})
export default HelpStyle;