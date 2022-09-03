import React, { Component } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { FlatList } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { BookedService, Footer, FormInput, SeriveHorizontal } from "../../components/Index";
import { COLORS, dummyData, icons, images, SIZES } from "../../constants";
import BookingDetailStyle from "./BookingDetailStyle";

class BookingDetail extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        currentDate: '',
        newMark: "",
        bookings: 0,
        // time selection
        IsTimeSelected: 1,
        Promo: this.props.route.params ? this.props.route.params.Promo : '',
        IsPromoSelected: false,
    }

    render() {

        console.log(Promo, "PROMOCODE");

        const {
            currentDate, newMark, bookings,
            IsTimeSelected, Promo, IsPromoSelected,

        } = this.state;

        return (
            <KeyboardAvoidingView
                showsVerticalScrollIndicator={false}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[BookingDetailStyle.main, {
                        backgroundColor: this.props.appThem2?.screen_BG,
                    }]}
                >
                    <Text
                        style={[BookingDetailStyle.heading, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}
                    >
                        Select Date
                    </Text>

                    {/* calendar */}
                    <Calendar
                        initialDate=""
                        minDate={'2002-08-10'}
                        maxDate={'2028-08-30'}
                        markedDates={{
                            // '2022-08-16': { selected: true, marked: true, selectedColor: COLORS.purple },      
                        }}
                        onDayPress={day => {
                            this.setState({
                                newMark: day
                            })
                        }}
                        onDayLongPress={day => {
                            // console.log('selected day', day);
                        }}
                        hideExtraDays={true}
                        style={[BookingDetailStyle.Calendar, {
                            backgroundColor: this.props.appThem2?.card_BG,
                        }]}
                        theme={BookingDetailStyle.CalTheme}
                        // theme={[{
                        //     monthTextColor: this.props.appThem2?.text_Purple_White,
                        // }]}
                        // arrow
                        renderArrow={direction =>
                            direction === 'right' ?
                                <Image
                                    source={icons.arrow}
                                    resizeMode={'contain'}
                                    style={BookingDetailStyle.icon}
                                />
                                :
                                <Image
                                    source={icons.LeftBack}
                                    resizeMode={'contain'}
                                    style={BookingDetailStyle.icon}
                                />
                        }
                        enableSwipeMonths={true}
                    />

                    {/* booking service */}
                    {/* <BookedService
                        name={'Working Hours'}
                        description={'Cost increase after 2 hrs of work'}
                        AddPress={() => {
                            this.setState({
                                bookings: bookings < 24 ? bookings + 1 : bookings,
                            })
                        }}
                        SubPress={() => {
                            this.setState({
                                bookings: bookings > 0 ? bookings - 1 : bookings,
                            })
                        }}
                        bookings={bookings}
                    /> */}

                    {/* time selection section */}
                    <Text
                        style={[BookingDetailStyle.heading, {
                            marginTop: 8,
                            color: this.props.appThem2?.text_Black_White,
                        }]}
                    >
                        Choose Start Time
                    </Text>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            marginBottom: 10,
                        }}
                        horizontal
                        data={dummyData.Time}
                        renderItem={({ item, index }) => (
                            <SeriveHorizontal
                                key={`Time-${item.id}`}
                                id={item.id}
                                title={item.title}
                                onPress={() => {
                                    this.setState({
                                        IsTimeSelected: item.id,
                                    })
                                }}
                                Selected={IsTimeSelected}
                                text={this.props.appThem2?.option_Text}
                                colorBg={this.props.appThem2?.option_BG}
                                border={this.props.appThem2?.option_Border}
                            />
                        )}
                    />

                    {/* Promo Code */}
                    <Text
                        style={[BookingDetailStyle.heading, {
                            // marginTop: 8,
                            color: this.props.appThem2?.text_Black_White,
                        }]}
                    >
                        Promo Code
                    </Text>

                    {/* promo code input */}
                    <View
                        style={[BookingDetailStyle.InputView, {
                            backgroundColor: IsPromoSelected ? COLORS.transparent : this.props.appThem2?.inputBox,
                        }]}
                    >
                        {IsPromoSelected && Promo.length === 8
                            ?
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("AddPromo", {
                                        // params
                                        Promo: Promo,
                                    })
                                }}
                                style={BookingDetailStyle.discount}
                            >
                                <Text style={[BookingDetailStyle.btnTxt]}>
                                    {Promo}
                                </Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            Promo: '',
                                            IsPromoSelected: !IsPromoSelected
                                        })
                                    }}>
                                    <Image
                                        source={icons.crossBox}
                                        style={[BookingDetailStyle.icon, {
                                            tintColor: COLORS.white,
                                            width: 25,
                                            height: 25,
                                        }]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            :
                            <FormInput
                                value={Promo}
                                onFocus={() => { }}
                                onChange={(text) => {
                                    this.setState({
                                        Promo: text,
                                        IsPromoSelected: Promo ? true : false
                                    })
                                }}
                                maxLength={8}
                                valueColor={this.props.appThem2?.inputText}
                                placeholder={'Enter Promo Code'}
                                placeholderStyle={this.props.appThem2?.inputText}
                            />
                        }

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("AddPromo")
                            }}
                        >
                            <Image
                                source={icons.plus}
                                resizeMode={'contain'}
                                style={BookingDetailStyle.PlusIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <Footer
                        width={SIZES.width}
                        height={SIZES.height * 0.15}
                        ButtonText={'Continue 125'}
                        onPress={() => {
                            this.props.navigation.navigate("Location")
                        }}
                    />

                </ScrollView>

            </KeyboardAvoidingView>

        )
    }
}

// get all data of the var from redux
const mapStateToProps = (state) => ({
    appTheme: state.Globle.appTheme,
    appThem2: state.Globle.appTheme,
    DarkMode: state.Globle.darkMode,
    error: state.error
})

const mapDispatchProps = {

}

export default connect(mapStateToProps, mapDispatchProps)(BookingDetail);
