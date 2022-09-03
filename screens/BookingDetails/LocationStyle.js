import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const LocationStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    bottom: {

    },
    mapContainer: {
        // marginTop: SIZES.height * 0.066,
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        width: SIZES.width,
        height: SIZES.height,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }, 
    map: {
        ...StyleSheet.absoluteFillObject,
        
    },
})
export default LocationStyle;