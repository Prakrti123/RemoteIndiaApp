import React from "react";
import {
    StyleSheet
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const BottomTabStyle = StyleSheet.create({
    HomeIcon: {
        width: 20,
        height: 20,
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
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BtnStyle : {
        padding: 14,
        position: 'absolute',
        bottom: 12,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: COLORS.white,
        elevation: 2,
        backgroundColor: COLORS.OrangeBG,
    },
    text: {
        ...FONTS.body5,
        color: COLORS.OrangeBG,
    }
}) 
export default BottomTabStyle;