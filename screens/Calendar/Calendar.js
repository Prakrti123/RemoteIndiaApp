import React, { Component } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import { BookedService, BookingCard, Header } from "../../components/Index";
import { COLORS, dummyData, icons, images, SIZES } from "../../constants";
import CalStyle from "./CalStyle";

class Calender extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        count: 0,
        newMark: '',
        noOfBooking: 1,
    }

    render() {

        const {
            newMark, noOfBooking, count,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'My Calendar'}
                    leftComponent={images.LightLOGO}
                    rightComponent={icons.More}
                    morePress={() => { }}
                />
            )
        }

        const renderBookings = () => {
            return (
                <View>
                    {/* card */}
                    <FlatList
                        scrollEnabled
                        contentContainerStyle={CalStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Bookings}
                        renderItem={({ item, index }) => (
                            <BookingCard
                                key={`Bookings-${item.id}`}
                                dropDown={false}
                                id={item.id}
                                service={item.service}
                                bgColor={item.status === 'Cancelled' ? COLORS.red : COLORS.lightPurple}
                                color={item.status === 'Cancelled' ? COLORS.white : COLORS.purple}
                                name={item.Name}
                                status={item.status}
                                image={item.image}
                            />
                        )}
                    />
                </View>
            )
        }

        const renderContent = () => {

            const calendarListParams = [

            ]

            const calendarParams = [

            ]

            return (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[CalStyle.content]}>

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
                                    style={CalStyle.icon}
                                />
                                :
                                <Image
                                    source={icons.LeftBack}
                                    resizeMode={'contain'}
                                    style={CalStyle.icon}
                                />
                        }
                        style={CalStyle.Calendar}
                        theme={CalStyle.CalTheme}
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

                    <Text style={CalStyle.heading}>
                        Service Booking ({noOfBooking})
                    </Text>

                    {noOfBooking === 0
                        ?
                        <View style={CalStyle.center}>

                            <Image
                                source={icons.Clipboard}
                                style={CalStyle.IMG}
                                resizeMode={'contain'}
                            />

                            <Text style={CalStyle.bodyText}>
                                You have no service booking
                            </Text>

                            <Text style={CalStyle.subText}>
                                You don't have a service booking on this date
                            </Text>

                        </View>
                        :
                        <>
                            {renderBookings()}
                        </>
                    }

                </ScrollView>
            )
        }

        return (
            <View style={CalStyle.main}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

            </View>
        )
    }
}
export default Calender;