import { color } from "native-base/lib/typescript/theme/styled-system";
import React, { Component } from "react";
import { Alert, Image, Text, TouchableOpacity, TurboModuleRegistry, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../../constants";
import { LineBreaker } from "../../Index";
import BookingCStyle from "./BookingCStyle";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import Collapsible from 'react-native-collapsible';
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";

class BookingCard extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        TabSelected: this.props.TabSelected,
        dropDown: this.props.dropDown,
        latitude: "37.421998333333335",
        longitude: "-122.08400000000002",
        postLatitude: "23.2601",
        postLongitude: "77.3761",
        onPress: this.props.onPress,
        isCollapsed: this.props.isCollapsed,
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                // this.setState({ latitude });
                this.setState({
                    latitude: latitude,
                })
                const longitude = JSON.stringify(position.coords.longitude);
                // this.setState({ longitude });
                this.setState({
                    longitude: longitude,
                })
            },
            // error => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )
        this.watchId = Geolocation.watchPosition(position => {
            const lastPosition = JSON.stringify(position);
            this.setState({ lastPosition });
        })
    }

    componentWillUnmount() {
        this.watchId != null && Geolocation.clearWatch(this.watchId);
    }

    render() {

        const {
            dropDown, TabSelected,
            longitude, latitude, onPress,
            postLatitude, postLongitude,
            isCollapsed,

        } = this.state;

        return (

            <View
                style={[BookingCStyle.opacity, {
                    backgroundColor: this.props.card_BG
                }]}
            >

                <View
                    style={[BookingCStyle.flex, BookingCStyle.main, {
                    }]}
                >

                    <View style={[BookingCStyle.flex, {
                        marginVertical: 16,
                    }]}>

                        <Image
                            resizeMode="contain"
                            source={this.props.image}
                            style={BookingCStyle.IMG}
                        />

                        <View style={BookingCStyle.textView}>

                            <Text style={[BookingCStyle.heading, {
                                color: this.props.text_Black
                            }]}
                            >
                                {this.props.service}
                            </Text>

                            <Text style={[BookingCStyle.bodyText, {
                                color: this.props.text_Gray
                            }]}
                            >
                                {this.props.name}
                            </Text>

                            <Text style={[BookingCStyle.subText, {
                                backgroundColor: this.props.bgColor,
                                textAlign: 'center',
                                width: SIZES.width * 0.25,
                                paddingHorizontal: 10,
                                paddingBottom: 6,
                                color: this.props.color,
                            }]}
                            >
                                {this.props.status}
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        style={[BookingCStyle.center, BookingCStyle.chatBTN, {
                            backgroundColor: this.props.appThem2?.name === 'light' ? null : this.props.appThem2?.transperacy
                        }]}
                    >
                        <Image
                            resizeMode="contain"
                            source={icons.chat}
                            style={[BookingCStyle.chat, {
                                tintColor: this.props.appThem2?.name === 'light' ? null : this.props.appThem2?.whiteIcon
                            }]}
                        />
                    </TouchableOpacity>

                </View>

                <LineBreaker
                    color={this.props.lineBreaker}
                />

                <Collapsible collapsed={isCollapsed}>
                    {TabSelected != "Cancelled"
                        ?
                        <View style={[{
                            marginTop: SIZES.height * 0.01,
                            width: SIZES.width * 0.8,
                        }]}
                        >

                            {/* date and time */}
                            <View style={[BookingCStyle.flex]}
                            >
                                <Text style={[BookingCStyle.miniTXT, {
                                    color: this.props.text_Gray
                                }]}>
                                    Date & Time
                                </Text>

                                <Text style={[BookingCStyle.smallTXT, {
                                    color: this.props.text_Black
                                }]}>
                                    {this.props.date} | {this.props.time}
                                </Text>

                            </View>

                            {/* location */}
                            <View style={[BookingCStyle.flex]}
                            >
                                <Text style={[BookingCStyle.miniTXT, {
                                    color: this.props.text_Gray
                                }]}>
                                    Location
                                </Text>

                                <Text style={[BookingCStyle.smallTXT, {
                                    color: this.props.text_Black
                                }]}>
                                    {this.props.location}
                                </Text>

                            </View>

                            {/* map */}
                            <View style={[BookingCStyle.mapContainer]}>

                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={BookingCStyle.map}
                                    initialRegion={{
                                        latitude: Number(latitude),
                                        longitude: Number(longitude),
                                        // latitude: 23.2332,
                                        // longitude: 77.4347,
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                    }}
                                    region={{
                                        latitude: Number(latitude),
                                        longitude: Number(longitude),
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                    }}
                                    showsUserLocation={true}
                                >

                                    {/* current Location */}
                                    <Marker
                                        pinColor={COLORS.purple}
                                        coordinate={{
                                            latitude: Number(latitude),
                                            longitude: Number(longitude),
                                            latitudeDelta: 0.015,
                                            longitudeDelta: 0.0121,
                                        }}
                                    />

                                </MapView>

                            </View>

                            {/* footer btn section */}
                            {TabSelected === "Upcoming"
                                ?
                                <View style={[BookingCStyle.flex]}>

                                    <TouchableOpacity
                                        style={[BookingCStyle.cancel, {
                                            backgroundColor: this.props.appThem2?.option_BG,
                                            borderWidth: 2,
                                            borderColor: COLORS.purple,
                                        }]}
                                        onPress={this.props.onPressCancelBooking}
                                    >
                                        {/* view receipt */}

                                        <Text style={[BookingCStyle.smallTXT, {
                                            color: this.props.appThem2?.mainColor,
                                        }]}>
                                            Cancel Booking
                                        </Text>
                                    </TouchableOpacity>

                                    {/* view receipt */}
                                    <TouchableOpacity
                                        style={BookingCStyle.cancel}
                                        onPress={this.props.onPressEReceipt}
                                    >
                                        <Text style={[BookingCStyle.smallTXT, {
                                            color: COLORS.white,
                                        }]}>
                                            View E-Receipt
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                :

                                <TouchableOpacity
                                    style={BookingCStyle.Receipt}
                                    onPress={this.props.onPressEReceipt}
                                >
                                    {/* view receipt */}

                                    <Text style={[BookingCStyle.smallTXT, {
                                        color: COLORS.white,
                                    }]}>
                                        View E-Receipt
                                    </Text>
                                </TouchableOpacity>
                            }

                        </View>
                        :
                        <></>
                    }
                </Collapsible >

                {dropDown === true
                    ?
                    <View style={[{
                        marginTop: SIZES.height * 0.01,
                        // backgroundColor: COLORS.OrangeBG,
                        width: SIZES.width * 0.8,
                        // height: SIZES.height * 0.45,
                        // display: 'none',
                    }]}
                    >

                        {/* date and time */}
                        <View style={[BookingCStyle.flex]}
                        >
                            <Text style={[BookingCStyle.miniTXT]}>
                                Date & Time
                            </Text>

                            <Text style={[BookingCStyle.smallTXT]}>
                                {this.props.date} | {this.props.time}
                            </Text>

                        </View>

                        {/* location */}
                        <View style={[BookingCStyle.flex]}
                        >
                            <Text style={[BookingCStyle.miniTXT]}>
                                Location
                            </Text>

                            <Text style={[BookingCStyle.smallTXT]}>
                                {this.props.location}
                            </Text>

                        </View>

                        {/* map */}
                        <View style={[BookingCStyle.mapContainer]}>

                            <MapView
                                provider={PROVIDER_GOOGLE}
                                style={BookingCStyle.map}
                                initialRegion={{
                                    latitude: Number(latitude),
                                    longitude: Number(longitude),
                                    // latitude: 23.2332,
                                    // longitude: 77.4347,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}
                                region={{
                                    latitude: Number(latitude),
                                    longitude: Number(longitude),
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}
                                showsUserLocation={true}
                            >

                                {/* current Location */}
                                <Marker
                                    pinColor={COLORS.purple}
                                    coordinate={{
                                        latitude: Number(latitude),
                                        longitude: Number(longitude),
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                    }}
                                />

                            </MapView>

                        </View>

                        {/* view receipt */}
                        <TouchableOpacity
                            style={BookingCStyle.Receipt}
                            onPress={() => {

                            }}
                        >
                            <Text style={[BookingCStyle.smallTXT, {
                                color: COLORS.white,
                            }]}>
                                View E-Receipt
                            </Text>
                        </TouchableOpacity>


                    </View>
                    :
                    <></>
                }

                <TouchableOpacity
                    style={[BookingCStyle.bottom, BookingCStyle.center]}
                    onPress={() => {
                        console.log(isCollapsed);
                        this.setState({
                            isCollapsed: !isCollapsed,
                        })
                    }}
                >

                    <Image
                        resizeMode="contain"
                        source={this.props.arrow}
                        style={[BookingCStyle.down]}
                    />
                </TouchableOpacity>

            </View >
        )
    }
}
// export default BookingCard;

// get all data of the var from redux
const mapStateToProps = (state) => ({
    appTheme: state.Globle.appTheme,
    appThem2: state.Globle.appTheme,
    DarkMode: state.Globle.darkMode,
    error: state.error
})

// call the action from redux
const mapDispatchProps = {
    handleToggle
}

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(BookingCard);