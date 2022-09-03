import React, { Component } from "react";
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View, Image, FlatList,
} from "react-native";
import { connect } from "react-redux";
import { COLORS, dummyData, icons } from "../../constants";
import PromoStyle from "./PromoStyle";
import { handleToggle } from "../../store/action/toggleActions";

class Promo extends Component {

    render() {

        return (
            <View style={[PromoStyle.Btn, {
                backgroundColor: this.props.appThem2?.card_BG
            }]}>

                <View
                    style={[PromoStyle.mainView, {
                        // backgroundColor: this.props.appThem2?.card_BG
                    }]}>

                    {/* icons */}
                    <ImageBackground
                        source={this.props.bg}
                        resizeMode={'contain'}
                        style={[PromoStyle.bubble]}
                    >
                        <ImageBackground
                            source={this.props.circle}
                            resizeMode={'contain'}
                            style={PromoStyle.circle}
                        >
                            <ImageBackground
                                source={this.props.icon}
                                resizeMode={'center'}
                                style={PromoStyle.icon}
                            >
                                <Image
                                    source={this.props.star}
                                    resizeMode={'center'}
                                    style={PromoStyle.star}
                                />
                            </ImageBackground>
                        </ImageBackground>
                    </ImageBackground>

                    <View style={PromoStyle.text}>
                        <Text style={[PromoStyle.title, {
                            color: this.props.appThem2?.text_Black_White
                        }]}>
                            {this.props.title}
                        </Text>

                        <Text style={[PromoStyle.subTitle, {
                            color: this.props.appThem2?.text_Gray_Scale
                        }]}>
                            {this.props.subTitle}
                        </Text>
                    </View>

                </View>

                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Image
                        source={ this.props.Selected ? icons.Check : icons.UnCheck}
                        resizeMode={'center'}
                        style={PromoStyle.Check}
                    />
                </TouchableOpacity>

            </View>


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

export default connect(mapStateToProps, mapDispatchProps)(Promo);