import React from "react";
import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const AddPromoStyle = StyleSheet.create({
    main: {
        flex: 1,
        paddingBottom: 15,
        paddingTop: 10,
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        // height: SIZES.height * 0.6,
        paddingBottom: SIZES.height * 0.15,
    },
})
export default AddPromoStyle;