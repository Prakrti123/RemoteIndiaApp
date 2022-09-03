import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const CalStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    content: {
        marginHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.width * 0.05,
        paddingBottom: SIZES.height * 0.15,
    },
    Calendar: {
        borderRadius: 10,
        backgroundColor: COLORS.purpleTrans
    },
    CalTheme: {
        todayTextColor: COLORS.OrangeBG,
        dayTextColor: COLORS.darkGray,
        monthTextColor: COLORS.purple,
        textDayFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: '700',
        textDayHeaderFontWeight: '400',
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 16,
        calendarBackground: COLORS.transparent,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    icon: {
        width: SIZES.width * 0.04,
        height: SIZES.width * 0.04,
        tintColor: COLORS.purple,
    },
    heading: {
        marginTop: 20,
        ...FONTS.h3,
        fontSize: 18,
        color: COLORS.black,
    },
    IMG: {
        marginTop: 20,
        width: SIZES.width * 0.5,
        height: SIZES.width * 0.5,
    },
    bodyText: {
        marginTop: 20,
        ...FONTS.h3_5,
        // fontSize: 18,
        color: COLORS.black,
    },
    subText: {
        marginTop: 15,
        ...FONTS.body4,
        // fontSize: 18,
        color: COLORS.gray1,
    },
    list: {
        marginBottom: 20,
        // paddingTop: 5,
        paddingBottom: 15,

    },
})

export default CalStyle;