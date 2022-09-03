import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../../constants";

const ModalStyle = StyleSheet.create({
    main: {

    },
    content: {
        
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    // modal
    ModalContent: {
        paddingHorizontal: -SIZES.width * 0.05,
        paddingBottom: SIZES.height * 0.02,
        borderRadius: SIZES.height * 0.04,
        backgroundColor: COLORS.white2
    },
    ModalBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Bubble: {
        width: SIZES.width * 0.68,
        height: SIZES.width * 0.68,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.96,
    },
    PurpleCircle: {
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.96,
    },
    Shield: {
        width: SIZES.width * 0.14,
        height: SIZES.width * 0.14,
        tintColor: COLORS.white2
    },
    ModalText: { 
        marginTop: -20,
        marginBottom: 10,
        ...FONTS.h2,
        color: COLORS.purple
    },
    ModalSubText: {
        ...FONTS.body3,
        paddingHorizontal: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: COLORS.black,
    },
    button: {
        marginTop: 15,
        width: SIZES.width * 0.66,
        height: SIZES.height * 0.07,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    }
})
export default ModalStyle;