import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { COLORS, icons } from "../../constants";
import ChatStyle from "./ChatStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";

class Chat extends Component {

    render() {
        return (
            <TouchableOpacity
                style={[ChatStyle.mainView, ChatStyle.flex, {
                    backgroundColor: this.props.appThem2?.card_BG
                }]}
                // onPres={this.props.onPress}
                onPress={this.props.onPress}
            >

                <View style={[ChatStyle.flex, {

                }]}>
                    <Image
                        source={this.props.image}
                        style={ChatStyle.Image}
                        resizeMode={'contain'}
                    />

                    <View style={ChatStyle.textView}>

                        <Text style={[ChatStyle.name, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            {this.props.name}
                        </Text>

                        <View style={[ChatStyle.flex]}>

                            <Text style={[ChatStyle.smallTXT, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                {this.props.description}
                            </Text>

                        </View>
                    </View>
                </View>

                <View style={[ChatStyle.notiView]}>

                    <View style={[ChatStyle.CallBTN, ChatStyle.center, {
                        backgroundColor: this.props.newMSG ? COLORS.lightPurple : COLORS.transparent
                    }]}>
                        {this.props.newMSG ?
                            <ImageBackground
                                source={icons.PurpleCircle}
                                style={[ChatStyle.Call, ChatStyle.center]}
                            >

                                <Text style={[ChatStyle.smallTXT, {
                                    color: COLORS.white2,
                                }]}>
                                    {this.props.newMSG}
                                </Text>

                            </ImageBackground>
                            :
                            <></>}
                    </View>


                    <Text style={[ChatStyle.smallTXT, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                        {this.props.time}
                    </Text>
                </View>
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
    // handleToggle
}

// check weather the data fetched is in required form or not
// export default connect(mapStateToProps, mapDispatchProps)(Chat);
export default connect(mapStateToProps, mapDispatchProps)(Chat);