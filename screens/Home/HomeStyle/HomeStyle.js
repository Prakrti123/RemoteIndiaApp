import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";

const HomeStyle = StyleSheet.create({
    MainHeader: {
        flexDirection: 'row',
        height: SIZES.height * 0.08,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    MainView: {
        flex: 1,
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
        marginHorizontal: 12,
    },
    headerLinear: {
        flexDirection: 'row',
    },
    smallTitle: {
        ...FONTS.body4,
        color: COLORS.gray1
    },
    bigTitle: {
        ...FONTS.h3,
    },
    RightIcon: {
        width: SIZES.width * 0.07,
        height: SIZES.width * 0.07,
        marginRight: 10,
    },
    TwoIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    //content section
    ContentView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: COLORS.white2
    },
    SearchView: {
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
    InputText: {
        ...FONTS.body3,
        color: COLORS.gray
    },
    BannerView: {
        flex: 1,
        flexDirection: 'row',
        width: SIZES.width * 0.9,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        // elevation: 2,
        // backgroundColor: COLORS.white,
    },
    BannerText: {
        ...FONTS.h2_5,
        letterSpacing: 0.2,
        fontFamily: 'Calibri',
        color: COLORS.black,
    },
    SeeBtnStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SeeAllBtn: {
        ...FONTS.h3,
        letterSpacing: 0.2,
        fontFamily: 'Calibri',
        color: COLORS.primary,
    },
    banner_main: {
        alignItems: 'center',
        borderRadius: 24,
    },
    wrap: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.236,
        borderRadius: 24
    },
    wrapDot:{
        position:'absolute',
        bottom: 10,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
       margin: 3,
       color: COLORS.purple
    },
    dotInActive:{
        margin: 3,
        color: COLORS.white
    },

    // FlatList
    FlatListView: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.236,
        marginBottom: 15,
        borderRadius: 24,
        // backgroundColor: COLORS.green,
    },
    FlatList: {
        borderRadius: 24,
    },
    ServiceView: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // backgroundColor: COLORS.yellow,
    },
    line: {
        width: SIZES.width * 0.83,
        height: 1.4,
        backgroundColor: COLORS.lightGray
    },

    // Popular Serivce Section
    popularView: {
        marginHorizontal: 12,
        marginVertical: 10,
    },
    AllService: {
        marginHorizontal: 12,
        marginVertical: 10,
        paddingHorizontal: 10,
        marginBottom: SIZES.height * 0.12,
    }
    
})
export default HomeStyle;