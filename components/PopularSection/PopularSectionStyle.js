import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const PopularSectionStyle = StyleSheet.create({
    main: {
        flex: 1,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    content: {
        marginTop: 0,
        marginBottom: 10,
        // backgroundColor: COLORS.black
    },

    // Popular Serivce Section
    popularView: {
        height: SIZES.height * 0.08,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 8,
        // backgroundColor: COLORS.red
    },
    AllService: {
        marginHorizontal: 12,
        // marginVertical: 10,
        paddingHorizontal: 10,
        marginBottom: SIZES.height * 0.12,
    },
    Flatlist: {
        
    },
})
export default PopularSectionStyle;