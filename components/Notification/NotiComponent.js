import React, { Component } from "react";
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View, Image, FlatList,
} from "react-native";
import { dummyData } from "../../constants";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";
import NotiComponentStyle from "./NotiStyle/NotiComponentStyle";

class NotiComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <TouchableOpacity style={[NotiComponentStyle.mainView, {
                backgroundColor: this.props.appThem2?.card_BG
            }]}>

                {/* icons */}
                <ImageBackground
                    source={this.props.bg}
                    resizeMode={'contain'}
                    style={NotiComponentStyle.bubble}
                >
                    <ImageBackground
                        source={this.props.circle}
                        resizeMode={'contain'}
                        style={NotiComponentStyle.circle}
                    >
                        <Image
                            source={this.props.icon}
                            resizeMode={'center'}
                            style={NotiComponentStyle.icon}
                        />
                    </ImageBackground>
                </ImageBackground>

                <View style={NotiComponentStyle.text}>
                    <Text style={[NotiComponentStyle.title, {
                        color: this.props.appThem2?.text_Black_White
                    }]}>
                        {this.props.title}
                    </Text>

                    <Text style={[NotiComponentStyle.subTitle, {
                        color: this.props.appThem2?.text_Gray_Scale,
                    }]}>
                        {this.props.subTitle}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
// export default NotiComponent;

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

export default connect(mapStateToProps, mapDispatchProps)(NotiComponent);
