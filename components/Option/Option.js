import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import { COLORS, icons } from "../../constants";
import OptionStyle from "./OptionStyle";
import { toggleTheme } from "../../store/action/action";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";

class Option extends Component {

    constructor(props) {
        super(props);
        PropFunction();
    }

    state = {
    }

    render() {

        const {
           
        } = this.state;

        const toggleThemeHandler = () => {
            if (this.props.appThem2?.name === 'light') {

                console.log("dark", this.props.appThem2.name)
                this.props.handleToggle("dark")
            }
            else {
                console.log("dark", this.props.appThem2.name)
                this.props.handleToggle("light")

            }
        }

        return (
            <View style={[OptionStyle.mainView,
            {
                backgroundColor: this.props.appThem2?.bgOption
            }]}
            >

                {/* left section of option */}

                <View style={OptionStyle.leftView}>

                    {/* Option Icon */}
                    <View
                        style={[OptionStyle.center]}
                        onPress={this.props.backPress}
                    >
                        <Image
                            source={this.props.leftComponent}
                            resizeMode={'contain'}
                            style={[OptionStyle.back,
                            {
                                tintColor: this.props.logout ? COLORS.red : this.props.appThem2?.icon_White_Black
                            }]
                            }
                        />
                    </View>

                    {/* Option title */}
                    <Text
                        style={[OptionStyle.title,
                        { color: this.props.appThem2?.text_Black_White }
                        ]}
                    >
                        {this.props.title}
                    </Text>
                </View>

                {/* Right section of option for Language */}
                <View style={[OptionStyle.leftView]}>

                    {/* for language */}
                    {this.props.language ?
                        <Text style={[OptionStyle.title, {
                            color: this.props.appThem2?.text_Black_White,
                            marginRight: 10,
                        }]}>
                            English (US)
                        </Text>
                        :
                        <></>
                    }

                    {/* dark mode */}
                    {this.props.mode === true ?
                        <TouchableOpacity
                            style={[OptionStyle.mode, {
                                // backgroundColor: theme === false ? COLORS.lightGray : COLORS.purple,
                                backgroundColor: this.props.appThem2?.switch_LightGray_Purlpe,
                                borderColor: this.props.appThem2?.switch_LightGray_Purlpe,
                            }]}
                            onPress={() => {
                                toggleThemeHandler()
                            }}
                        >
                            <View
                                style={[OptionStyle.switch, {
                                    right: this.props.appThem2?.name === "light" ? "50%" : 1,
                                }]}
                            />

                        </TouchableOpacity>
                        :
                        this.props.logout ?
                            <></>
                            :
                            < TouchableOpacity style={[OptionStyle.center, OptionStyle.moreBtn]}
                                onPress={() => this.props.morePress}>
                                {/* more btn */}

                                <Image
                                    source={this.props.rightComponent}
                                    resizeMode={'contain'}
                                    style={[OptionStyle.back, {
                                        tintColor: this.props.appThem2?.backArrow_Black_White
                                    }]}
                                />
                            </TouchableOpacity>
                    }
                </View>

            </View>
        )
    }
}
const PropFunction = (props) => {
    return (
        <Option
            {...props}
        />
    )
};

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
export default connect(mapStateToProps, mapDispatchProps)(Option);