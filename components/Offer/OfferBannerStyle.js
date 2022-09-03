import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const OfferBannerStyle = StyleSheet.create({
    MainView: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        // backgroundColor: COLORS.lavender,
    },
    div: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftView: {
        marginTop: - SIZES.height * 0.01,
        width: SIZES.width * 0.5
    },
    imgView: {
        zIndex: -1,
    },
    Cleaner: {
        marginTop: 25,
        width: SIZES.width * 0.3,
        height: SIZES.height * 0.3,
    },
    discount: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    title: {
        ...FONTS.h2_5,
        color: COLORS.white,
    },
    subtitle: {
        ...FONTS.body4,
        color: COLORS.white,
    },
    BGimg: {
        // marginLeft: SIZES.width * 0.005,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.236,
        borderRadius: 24,
        zIndex: -2,
    },
    dotView: {
        flexDirection: 'row',
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: SIZES.height * 0.02,
        // backgroundColor: COLORS.lavender
    }

})
export default OfferBannerStyle;