import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SIZES } from "../../../../constants";

const BookmarkStyle = StyleSheet.create({
    mainView: {

    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    content: {
        // marginVertical: 10,
        // marginHorizontal: SIZES.width * 0.05,
    },
    list: {

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

    Slider: {
        width: SIZES.width,
        zIndex: 3,
    },
})
export default BookmarkStyle;