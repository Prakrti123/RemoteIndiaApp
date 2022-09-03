import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const CardStyle = StyleSheet.create({
    mainView: {
        // marginRight: -SIZES.width * 0.05,
        width: SIZES.width,
        height: SIZES.width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 180,
        // backgroundColor: COLORS.white2,
        elevation: 10,
    },
    img: {
        width: SIZES.width,
        height: SIZES.width,
        // borderRadius: 180,
    }
});
export default CardStyle;