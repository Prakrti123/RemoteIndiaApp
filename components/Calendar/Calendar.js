import React, { Component } from "react";
import { Image, View } from "react-native";
import { COLORS, icons } from "../../constants";
import CalendarStyle from "./CalendarStyle";

class Calendar extends Component {

    constructor(props) {
        super(props)
    }

    state={

    }

    render() {

        const {

        } = this.state;

        return(
            <View>
                <Calendar
                        // Initially visible month. Default = now
                        initialDate={'2022-08-01'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2002-08-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2028-08-30'}

                        markedDates={{
                            '2022-08-16': { selected: true, marked: true, selectedColor: COLORS.purple },
                            newMark: { selected: true, color: COLORS.primary }
                        }}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => {
                            this.setState({
                                newMark: day.dateString
                            })
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={day => {
                            console.log('selected day', day);
                        }}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={false}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={direction =>
                            direction === 'right' ?
                                <Image
                                    source={icons.arrow}
                                    resizeMode={'contain'}
                                    style={CalendarStyle.icon}
                                />
                                :
                                <Image
                                    source={icons.LeftBack}
                                    resizeMode={'contain'}
                                    style={CalendarStyle.icon}
                                />
                        }
                        style={CalendarStyle.Calendar}
                        theme={CalendarStyle.CalTheme}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={false}
                        // Disable right arrow. Default = false
                        disableArrowRight={false}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}
                        // Enable the option to swipe between months. Default = false
                        enableSwipeMonths={true}
                    />
            </View>
        )
    }
}
export default Calendar;