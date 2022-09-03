import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const FilterModalStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.transparentBlack7
    },
    closeModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    content: {
        position: "absolute",
        left: 0,
        width: SIZES.width,
        height: "100%",
        paddingVertical: SIZES.padding,
        borderTopRightRadius: SIZES.padding,
        borderTopLeftRadius: SIZES.padding,
        backgroundColor: COLORS.white2,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        ...FONTS.h2,
        paddingHorizontal: SIZES.width * 0.05,
        paddingBottom: 15,
    },
    scrollView: {
        paddingBottom: 10,
        justifyContent: 'center',
    },
    subheading: {
        ...FONTS.h2_5,
        paddingVertical: 15,
    },
    category: {
        paddingLeft: SIZES.width * 0.05,
        // backgroundColor: COLORS.red
    },
    PriceView: {
        marginHorizontal: SIZES.width * 0.05,
    },
    Rating: {
        paddingLeft: SIZES.width * 0.05,
    },
    Bottom: {
        flexDirection: 'row',
        marginTop: SIZES.width * 0.08,
        marginHorizontal: SIZES.width * 0.05,
        justifyContent: 'space-between',
    },
    Button: {
        width: SIZES.width * 0.42,
        height: SIZES.height * 0.08,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    BtnText: {
        ...FONTS.h2_5,
    }
})
export default FilterModalStyle;