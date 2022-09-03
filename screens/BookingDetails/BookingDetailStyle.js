import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { SIZES, FONTS, COLORS } from "../../constants";

const BookingDetailStyle = StyleSheet.create({
    main: {
        // flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: COLORS.white2,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    content: {
        height: SIZES.height * 0.8,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    heading: {
        marginBottom: 15,
        ...FONTS.h3,
        color: COLORS.black,
    },
    detailTxt: {
        marginBottom: 15,
        ...FONTS.body3,
        color: COLORS.darkGray1,
    },
    btnTxt: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    icon: {
        width: SIZES.width * 0.04,
        height: SIZES.width * 0.04,
        tintColor: COLORS.purple,
    },
    Calendar: {
        marginBottom: 10,
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
        textDayFontSize: 15,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 16,
        calendarBackground: COLORS.transparent,
    },
    InputView: {
        marginBottom: SIZES.height * 0.14,
        paddingHorizontal: 15,
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.062,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
    },
    PlusIcon: {
        width: SIZES.width * 0.08,
        height: SIZES.width * 0.08,
        // tintColor: COLORS.purple,
    },
    discount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: SIZES.width * 0.5,
        height: SIZES.height * 0.06,
        borderRadius: 50,
        backgroundColor: COLORS.purple,
    }
    
})
export default BookingDetailStyle;

// get all data of the var from redux
// const mapStateToProps = (state) => ({
//     appTheme: state.Globle.appTheme,
//     appThem2: state.Globle.appTheme,
//     DarkMode: state.Globle.darkMode,
//     error: state.error
// })

// export default connect(mapStateToProps)(BookingDetailStyle);
