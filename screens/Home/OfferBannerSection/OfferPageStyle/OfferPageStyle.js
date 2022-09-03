import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants";

const OfferPageStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.lightPurple,
    },
     // FlatList
    FlatListView: {
        flex: 1,
        width: SIZES.width * 0.9,
        paddingBottom: 5,
        marginBottom: 15,
        marginHorizontal: SIZES.width * 0.05,
        borderRadius: 24,
        // backgroundColor: COLORS.green,
    },
    FlatList: {
        // flex: 1,
        borderRadius: 24,
        
    },
    Offer: {
        // paddingTop: 10,
        // marginTop: 15,
    },
    banner_main: {
        alignItems: 'center',
        marginTop: SIZES.height * .022,
        // width: width,
        // height: height * .23,
        // backgroundColor: COLORS.gray10,
        borderRadius: 10,
        // marginHorizontal:width*.05
    },
    wrap: {
        width: SIZES.width * 0.9,
        height: SIZES.height * .2,
        borderRadius: 8
    },
    wrapDot:{
        position:'absolute',
        bottom: 0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
       margin: 3,
       color: COLORS.black 
    },
    dotInActive:{
        margin: 3,
        color: COLORS.white
    },
})
export default OfferPageStyle;