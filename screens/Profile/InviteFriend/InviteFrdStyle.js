import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const InviteStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginVertical: SIZES.height * 0.03,
        // backgroundColor: COLORS.purple
    },
    card: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.1,
        backgroundColor: COLORS.white,
    },
    profile: {
        width: SIZES.width * 0.2,
        height: SIZES.width * 0.2,
    }
})
export default InviteStyle;