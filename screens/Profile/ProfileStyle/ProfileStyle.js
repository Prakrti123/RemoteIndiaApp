import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const ProfileStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white2
    },
    ImageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    ImageStyle: {
        marginTop: 0,
        width: SIZES.width * 0.24,
        height: SIZES.width * 0.24,
    },
    EditBtn: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: SIZES.height * 0.088,
        left: SIZES.width * 0.57,
        right: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.purple,
    },
    EditIcon: {
        width: 20,
        height: 20,
    },
    Heading: {
        ...FONTS.h2,
        marginTop: 2,
    },
    mailText: {
        ...FONTS.body4,
        marginTop: 2,
    },
    // content
    cotent: {
        paddingBottom: SIZES.height * 0.11,
        // backgroundColor: COLORS.purple,
    },
    Options: {
        flexDirection: 'row',
        marginBottom: 6,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 1.8,
    }
})
export default ProfileStyle;