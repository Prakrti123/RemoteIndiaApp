import React, { Component } from "react";
import {
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from "react-redux";
import { COLORS, icons, images } from "../../constants";
import ReviewStyle from "./ReviewStyle";

class Review extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[ReviewStyle.btn, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}>
                <View style={[ReviewStyle.mainView, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}>

                    {/* top */}
                    <View style={[ReviewStyle.flex]}>

                        <View style={ReviewStyle.flex}>
                            <Image
                                source={this.props.profile}
                                style={ReviewStyle.profile}
                            />

                            <View style={[ReviewStyle.top]}>
                                <Text style={[ReviewStyle.name, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}>
                                    {this.props.name}
                                </Text>
                            </View>
                        </View>


                        <View style={ReviewStyle.flex}>
                            <TouchableOpacity
                                style={[ReviewStyle.rating, {
                                    backgroundColor: this.props.appThem2?.option_BG,
                                }]}
                                onPress={() => { }}
                            >
                                <Image
                                    source={icons.Star}
                                    style={ReviewStyle.star}
                                />

                                <Text style={[ReviewStyle.name, {
                                    color: COLORS.purple,
                                }]}>
                                    {this.props.rating}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                // style={ReviewStyle.more}
                                onPress={() => { }}
                            >
                                <Image
                                    source={icons.More}
                                    style={ReviewStyle.more}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* review */}
                    <Text style={[ReviewStyle.review, {
                        color: this.props.appThem2?.text_Gray_Scale
                    }]}>
                        {this.props.review}
                    </Text>

                    {/* bottom */}
                    <View style={ReviewStyle.bottom}>

                        <View style={ReviewStyle.likes}>
                            <Image
                                resizeMode={'contain'}
                                source={icons.like}
                                style={ReviewStyle.likeIcon}
                            />

                            {/* no of like */}
                            <Text style={[ReviewStyle.text, {
                                color: this.props.appThem2?.text_Black_White
                            }]}>
                                {this.props.likes}
                            </Text>
                        </View>

                        <Text style={[ReviewStyle.time, {
                            color: this.props.appThem2?.text_Gray_Scale
                        }]}>
                            {this.props.time}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => ({
    appTheme: state.Globle.appTheme,
    appThem2: state.Globle.appTheme,
    DarkMode: state.Globle.darkMode,
    error: state.error
})

export default connect(mapStateToProps)(Review);

