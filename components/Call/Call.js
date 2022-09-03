import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import CallStyle from "./CallStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";

class Call extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        status: this.props.status,
        invitePress: this.props.invitePress,
    }

    componentDidMount() {
        // console.log("status", this.props.IDseleted)
    }

    render() {

        const {
            status, invitePress,
        } = this.state;

        return (
            <TouchableOpacity
                style={[CallStyle.mainView, CallStyle.flex, {
                    backgroundColor: this.props.appThem2?.card_BG,
                }]}
                onPress={this.props.onPress}
                >

                <View style={[CallStyle.flex, {

                }]}>
                    <Image
                        source={this.props.image}
                        style={CallStyle.Image}
                        resizeMode={'contain'}
                    />

                    <View style={CallStyle.textView}>

                        <Text style={[CallStyle.name, {
                            color: this.props.appThem2?.text_Black_White
                        }]}>
                            {this.props.name}
                        </Text>

                        <View style={[CallStyle.flex]}>

                            {this.props.number
                                ?
                                <></>
                                :
                                <Image
                                    source={this.props.icon}
                                    style={[CallStyle.Icon]}
                                />
                            }


                            {this.props.number
                                ?
                                <Text style={[CallStyle.smallTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale
                                }]}>
                                    {this.props.number}
                                </Text>
                                :
                                <Text style={[CallStyle.smallTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale
                                }]}>
                                    {this.props.category} | {this.props.date}
                                </Text>
                            }

                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={this.props.invitePress}
                    style={[CallStyle.CallBTN, CallStyle.center, {
                        width: this.props.status ? SIZES.width * 0.18 : SIZES.width * 0.1,
                        backgroundColor: this.props.status ? COLORS.purple : COLORS.lightPurple
                    }]}>

                    {this.props.FriendInfo
                        ?
                        <Text style={[CallStyle.smallTXT, {
                            fontSize: 16,
                            color: COLORS.white,
                        }]}>
                            {this.props.status}
                        </Text>
                        :
                        <Image
                            source={icons.Phone}
                            style={CallStyle.Call}
                        />
                    }

                </TouchableOpacity>
            </TouchableOpacity>


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

// call the action from redux
const mapDispatchProps = {
    handleToggle
}

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(Call);