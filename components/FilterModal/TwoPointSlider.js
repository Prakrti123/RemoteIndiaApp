import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { Component } from "react";
import { Appearance, Text, View } from "react-native";
import { SIZES } from "../../constants";
import TwoPointSliderStyle from "./TwoPointSliderStyle";

class TwoPointSlider extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        theme: this.props.theme,
    }

    render() {

        const {
            theme
        } = this.state;

        return (
            <MultiSlider
                values={this.props.values}
                sliderLength={SIZES.width* 0.9}
                min={this.props.min}
                max={this.props.max}
                step={1}
                markerOffsetY={20}
                minMarkerOverlapDistance={50}
                selectedStyle={TwoPointSliderStyle.selected}
                trackStyle={TwoPointSliderStyle.tracker}
                customMarker={(e) => {
                    return (
                        <View
                            style={TwoPointSliderStyle.markerView}>
                            <View
                                style={TwoPointSliderStyle.marker} />
                            <Text
                                style={TwoPointSliderStyle.markerText}>
                                {this.props.prefix}{e.currentValue}
                            </Text>
                        </View>
                    )
                }}
                onValueChange={(values) => onValueChange(values)}
            />
        )
    }
}
export default function (props) {

    const scheme = Appearance.getColorScheme();
    const theme = scheme === 'light' ? false : true;

    return (
        <TwoPointSlider
            {...props}
            theme={theme}
        />
    )
}