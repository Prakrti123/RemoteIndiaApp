import Geolocation from "@react-native-community/geolocation";
import React, { Component } from "react";
import { Alert, KeyboardAvoidingView, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Footer } from "../../components/Index";
import { COLORS, SIZES } from "../../constants";
import LocationStyle from "./LocationStyle";

class Location extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        location: '',
        latitude: "37.421998333333335",
        longitude: "-122.08400000000002",
        postLatitude: "23.2601",
        postLongitude: "77.3761",
        lastPosition: '',
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
            error => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )
        this.watchId = Geolocation.watchPosition(position => {
            const lastPosition = JSON.stringify(position);
            this.setState({ 
                lastPosition: lastPosition,
            });
        })
    }

    componentWillUnmount() {
        this.watchId != null && Geolocation.clearWatch(this.watchId);
    }


    render() {

        // console.log(Geolocation.getCurrentPosition())

        const {
            location, lastPosition,
            longitude, latitude,
            postLatitude, postLongitude,
        } = this.state;

        return (
            <KeyboardAvoidingView style={LocationStyle.main}>

                <View style={LocationStyle.mapContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={LocationStyle.map}
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

                <Footer
                    location={location}
                    locationComponent={true}
                    height={SIZES.height * 0.35}
                    ButtonText={'Continue'}
                    onPress={() => {
                        this.props.navigation.navigate("PaymentMethod", {
                            // params
                        })
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}
export default Location;