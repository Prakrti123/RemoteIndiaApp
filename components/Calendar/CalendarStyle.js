import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const CalendarStyle = StyleSheet.create({
    main: {

    },
    content: {
        
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
})
export default CalendarStyle;