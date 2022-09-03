import React, { Component } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { icons } from "../../../constants";
import BookedServiceStyle from "./BookedServiceStyle";

class BookedService extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        count: this.props.bookings
    }

    render() {

        const { count } = this.state;

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

        return (
            <TouchableOpacity
                style={BookedServiceStyle.BtnView}
                onPress={this.props.onPress}
            >

                <View style={[BookedServiceStyle.flex]}>
                    <Text style={BookedServiceStyle.title}>
                        {this.props.name}
                    </Text>

                    <Text style={BookedServiceStyle.smallTXT}>
                        {this.props.description}
                    </Text>
                </View>

                <View style={BookedServiceStyle.counter}>

                    {/* count decrease */}
                    <TouchableOpacity
                        onPress={this.props.SubPress}
                        // onPress={() => {
                        //     counterSub()
                        // }}
                        style={[
                            BookedServiceStyle.center,
                            BookedServiceStyle.countBtn,
                        ]}
                    >
                        <Image
                            source={icons.minus}
                            resizeMode={'contain'}
                            style={BookedServiceStyle.minus}
                        />
                    </TouchableOpacity>

                    {/* count */}
                    <Text style={BookedServiceStyle.count}>
                        {/* {count} */}
                        {this.props.bookings}
                    </Text>

                    {/* count Increase */}
                    <TouchableOpacity
                        onPress={this.props.AddPress}
                        // onPress={() => {
                        //     counterAdd()
                        // }}
                        style={[
                            BookedServiceStyle.center,
                            BookedServiceStyle.countBtn,
                        ]}
                    >
                        <Image
                            source={icons.plus}
                            resizeMode={'contain'}
                            style={BookedServiceStyle.minus}
                        />
                    </TouchableOpacity>
                </View>


            </TouchableOpacity>

        )
    }
}
export default BookedService;