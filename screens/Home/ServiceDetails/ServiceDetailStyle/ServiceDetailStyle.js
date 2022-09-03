import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const ServiceDetailStyle = StyleSheet.create({
    mainView: {
        backgroundColor: COLORS.white,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header: {
        zIndex: 3,
        position: 'absolute',
        width: SIZES.width,
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingTop: 30,
        // backgroundColor: COLORS.blue,
    },
    backBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: "#ffffff40"
    },
    backIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.white,
    },
    ImgSliderView: {
        width: SIZES.width,
        height: SIZES.height * 0.4,
        // borderBottomLeftRadius: 200,
        // borderBottomRightRadius: 200,
        backgroundColor: COLORS.orange,
        elevation: 4,
    },
    Slider: {
        // paddingHorizontal: SIZES.width * 0.05,
        alignItems: 'center',
        // backgroundColor: COLORS.lightPink,
    },
    DetailView: {
        paddingHorizontal: 15,
        paddingBottom: 20,
        width: SIZES.width,
        // backgroundColor: COLORS.seaform,
    },
    headingView: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    heading: {
        ...FONTS.h1,
        letterSpacing: 1.5,
    },
    BookMarkBox: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10,
        zIndex: 3,
    },
    BookMark: {
        width: 30,
        height: 30,
        tintColor: COLORS.purple,
    },
    Details: {

    },
    NameView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    CName: {
        ...FONTS.h2_5,
        letterSpacing: 0.5,
        color: COLORS.purple,
    },
    star: {
        marginHorizontal: 10,
        marginLeft: 15,
        width: 20,
        height: 20,
    },
    smallDetail: {
        marginLeft: 5,
        ...FONTS.body4,
        color: COLORS.gray1,
    },
    ServiceView: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        backgroundColor: COLORS.lightPurple,
    },
    serviceDetail: {
        marginLeft: 5,
        ...FONTS.h5,
        color: COLORS.purple,
    },
    Price: {
        marginRight: 5,
        ...FONTS.h1_5,
        color: COLORS.purple,
    },
    readMore: {
        ...FONTS.h5,
        color: COLORS.purple
    },
    ImageView: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Img1: {
        width: SIZES.width * 0.42,
        // height: SIZES.height*0.4,
        // backgroundColor: COLORS.blue,
    },
    Img2: {
        width: SIZES.width * 0.42,
        // height: SIZES.height*0.42,
        // backgroundColor: COLORS.blue,
    },
    ImgStyle: {
        marginBottom: 15,
        width: "100%",
        height: SIZES.height * 0.2,
        borderRadius: 10,
    },
    ReviewView: {
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    RatingView: {
        marginTop: 15,
    }
})
export default ServiceDetailStyle;