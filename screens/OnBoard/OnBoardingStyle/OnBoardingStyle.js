import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const OnBoardStyle = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: COLORS.white
        // flexDirection: 'row',
    },
    BoardingScreenText: {
        ...FONTS.h3,
    },
    wrap: {
        
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
    DarkModeBTN: {
        zIndex: 3,
        position: 'absolute',
        top: 10,
        right: 150,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0f0f0f",
        borderRadius: SIZES.radius
    },
    DarkModeBTN_Text: {
        ...FONTS.h3,
        color: COLORS.white
    },
    FlatListStyle: {
        flex: 1,
        height: SIZES.height,
        width: SIZES.width,
        // backgroundColor: COLORS.primary
    },
    SlideComponet: {
        // flex: 1,
        alignItems: 'center',
    },
    BoardImage: {
        marginTop: -10,
        marginBottom: -45,
        height: 580,
        width: SIZES.width,
        // backgroundColor: COLORS.black
    },
    PinkEllipse: {
        height: 80,
        width: 80,
        borderRadius: 50,
        tintColor: '#FFCACA',
        position: 'absolute',
        top: "-4%",
        left: "-9%",
        zIndex: 3
    },
    LavenderEliipse: {
        position: 'absolute',
        top: "18%",
        right: "20%",
        zIndex: 2,
        height: 16,
        width: 16,
    },
    BoardTitleView: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    BoardTitle: {
        textAlign: 'center',
        ...FONTS.h1_5,
        color: COLORS.black,
        marginHorizontal: 50,
        marginTop: 10,
    },
    BoardSubTitle: {
        textAlign: 'center',
        ...FONTS.body3,
        color: COLORS.black,
        marginHorizontal: 10,
        marginTop: 10,
    },
    SkipBTN: {
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightGreen,
        borderRadius: 50,
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 3,
    },
    SkipText: {
        ...FONTS.body3,
        color: COLORS.black
    }
});

export default OnBoardStyle;