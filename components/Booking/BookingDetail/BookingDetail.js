import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, images } from "../../../constants";
import { LineBreaker } from "../../Index";
import BookingDetailStyle from "./BookingDetailStyle";

class BookingDetail extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        dropDown: this.props.dropDown,
    }

    render() {

        const {
            dropDown,
        } = this.state;

        return (
            <View
                style={[BookingDetailStyle.opacity]}
            >

                <View
                    style={[BookingDetailStyle.flex, BookingDetailStyle.main, {
                    }]}
                >

                    <View style={[BookingDetailStyle.flex, {
                        marginVertical: 16,
                    }]}>

                        {/* <Image
                            resizeMode="contain"
                            source={this.props.image}
                            style={BookingDetailStyle.IMG}
                        /> */}

                        <View style={BookingDetailStyle.textView}>

                            <Text style={BookingDetailStyle.heading}
                            >
                                {this.props.service}
                            </Text>

                            <Text style={BookingDetailStyle.bodyText}
                            >
                                {this.props.name}
                            </Text>

                            <Text style={[BookingDetailStyle.subText, {
                                backgroundColor: this.props.bgColor,
                                color: this.props.color,
                            }]}
                            >
                                {this.props.status}
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        style={[BookingDetailStyle.center, BookingDetailStyle.chatBTN]}
                    >
                        <Image
                            resizeMode="contain"
                            source={icons.chat}
                            style={BookingDetailStyle.chat}
                        />
                    </TouchableOpacity>

                </View>

                <LineBreaker
                    color={COLORS.lightGray}
                />

                {dropDown === true
                    ?
                    <View style={[]}
                    >

                        <View style={[BookingDetailStyle.flex]}
                        >

                            <View>
                                <Text style={[BookingDetailStyle.smallTXT]}>
                                    {this.props.date}
                                </Text>

                            </View>
                        </View>

                    </View>
                    :
                    <></>
                }

                <TouchableOpacity
                    style={[BookingDetailStyle.bottom, BookingDetailStyle.center]}
                    onPress={this.props.onPress}
                >

                    <Image
                        resizeMode="contain"
                        source={this.props.arrow}
                        style={[BookingDetailStyle.down]}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}
export default BookingDetail;