import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants";

const AllServiceStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        // backgroundColor: COLORS.lightPurple,
    },
    AllService: {
        
    },
    ServiceView: {
        width: SIZES.width * 0.9,
        // height: SIZES.height * 0.6,
        paddingTop: 15,
        marginHorizontal: SIZES.width * 0.05,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: COLORS.yellow,
    },
})
export default AllServiceStyle;