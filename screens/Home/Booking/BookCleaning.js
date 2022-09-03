import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { BookedService, Header } from "../../../components/Index";
import { dummyData, icons } from "../../../constants";
import BookCStyle from "./BookCStyle";

class BookCleaning extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        TotalPrice: 0,
        count: 0,
        LivingRoom_Cleaning_Booking: 0,
        Terrace_Cleaning_Booking: 0,
        Bedroom_Cleaning_Booking: 0,
        Bathroom_Cleaning_Booking: 0,
        Kitchen_Cleaning_Booking: 0,
        DiningRoom_Cleaning_Booking: 0,
        Garbage_Cleaning_Booking: 0,
    }

    componentDidMount() {
        dummyData.cleaningBookings.map((item, index) => {
            let i = 7;
            while(i>=0) {
                this.setState({
                    TotalPrice: this.state.TotalPrice + item.price * item.bookings
                });
                i--;
            }
        })
    }

    render() {

        const {
            TotalPrice, count, 
            LivingRoom_Cleaning_Booking, 
            Terrace_Cleaning_Booking,
            Bedroom_Cleaning_Booking,
            Bathroom_Cleaning_Booking,
            Kitchen_Cleaning_Booking,
            DiningRoom_Cleaning_Booking,
            Garbage_Cleaning_Booking,
        } = this.state;


        const counterAdd = () => {

            return (
                this.setState({
                    count: count + 1,
                })
            )
        }

        const counterSub = () => {

            return (
                count > 0 ?
                    this.setState({
                        count: count - 1,
                    })
                    :
                    <></>
            )
        }

        const CalculateTotalPrice = () => {


        }

        // console.log(TotalPrice);


        const renderHeader = () => {
            return (
                <Header
                    title={'House Cleaning'}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={BookCStyle.content}>

                    {/* detail */}
                    <Text style={BookCStyle.detailTxt}>
                        Enter the number of items to be cleaned.
                    </Text>

                    {/* card */}
                    <FlatList
                        scrollEnabled
                        contentContainerStyle={BookCStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.cleaningBookings}
                        renderItem={({ item, index }) => (
                            <BookedService
                                key={`cleaningBookings-${item.id}`}
                                onPress={() => {}}
                                SubPress={() => {
                                    counterSub(count)
                                }}
                                AddPress={() => {
                                    counterAdd(count)
                                }}
                                bookings={count}
                                name={item.serviceName}
                                id={item.id}
                            />
                        )}
                    />
                </View>
            )
        }

        const renderFooter = () => {
            return (
                <View style={BookCStyle.footer}>

                    <TouchableOpacity 
                    style={BookCStyle.continue}
                    onPress={() => {
                        this.props.navigation.navigate("BookingDetail", {
                            // prams

                        })
                    }}
                    >

                        <Text style={BookCStyle.btnTxt}>
                            Continue - ${TotalPrice}
                        </Text>
                    </TouchableOpacity>

                </View>
            )
        }

        return (
            <View
                style={BookCStyle.mainView}
            >

                {/* heander */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* footer */}
                {renderFooter()}
            </View>
        )
    }
}
export default BookCleaning;