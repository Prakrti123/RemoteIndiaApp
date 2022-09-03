import { Icon } from "native-base";
import React, { Component } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    ImageBackground,
} from "react-native";
import { COLORS, icons } from "../../constants";
import ServiceVerticalStyle from "./ServiceVerticalStyle";

class ServiceVertical extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        item: this.props.item,
        saved: this.props.saved,
    }

    render() {

        const {
            item, saved, navigation,
        } = this.state;

        return (
            <TouchableOpacity
                style={[ServiceVerticalStyle.ServiceView,
                {
                    backgroundColor: this.props.colorBg,
                }
                ]}
                onPress={this.props.onPress}
            >
                <View style={[ServiceVerticalStyle.imageView,
                {
                    backgroundColor: item.bg
                }
                ]}>
                    <Image
                        source={item.cleaner}
                        resizeMode={'contain'}
                        style={ServiceVerticalStyle.cleaner}
                    />
                </View>

                {/* text */}
                <View style={ServiceVerticalStyle.text}>

                    <Text style={[ServiceVerticalStyle.name,
                    {
                        color: this.props.text_Gray
                    }]}>
                        {item.name}
                    </Text>

                    <Text style={[ServiceVerticalStyle.title, {
                        color: this.props.text_Black
                    }]}>
                        {item.title}
                    </Text>

                    <Text style={[ServiceVerticalStyle.price]}>
                        {item.price}
                    </Text>

                    <View style={ServiceVerticalStyle.ratingView}>

                        <Image
                            source={item.star}
                            resizeMode={'contain'}
                            style={ServiceVerticalStyle.star}
                        />

                        <Text style={[ServiceVerticalStyle.gray, {
                            color: this.props.text_Gray
                        }]}>
                            {item.rating}  |  {item.review} reviews
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={ServiceVerticalStyle.BookMarkBox}
                    onPress={() => {
                        this.setState({
                            saved: !saved
                        })
                    }}
                >
                    <Image
                        source={saved === false ? icons.SaveLight : icons.SaveDark}
                        resizeMode={'contain'}
                        style={ServiceVerticalStyle.BookMark}
                    />
                </TouchableOpacity>

            </TouchableOpacity>
        )
    }
}
export default ServiceVertical;