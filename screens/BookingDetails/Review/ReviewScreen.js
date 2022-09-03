import React, { Component } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Footer, LineBreaker } from "../../../components/Index";
import { COLORS, icons, SIZES } from "../../../constants";
import ReviewStyle from "./ReviewStyle";
import { handleToggle } from "../../../store/action/toggleActions";
import { connect } from "react-redux";

class ReviewScreen extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        Services: 'Home Cleaning',
        Category: 'Cleaning',
        Workers: 'Jenny Wilson',
        CardNo: '.... .... .... 4678',
        Date: 'Dec 23, 2024',
        Time: '10:00 AM',
        Workhour: '2',
        TotalAmount: '125.00',
        Promo: '37.50',
        Final: '87.50',
    }

    render() {

        const {
            Services, Category, Workers,
            Date, Time, Workhour, CardNo,
            TotalAmount, Promo, Final,
        } = this.state;

        return (
            <View style={[{
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[ReviewStyle.main, {
                        backgroundColor: this.props.appThem2?.screen_BG,
                    } ]}
                >
                    {/* content */}
                    <View
                        style={[ReviewStyle.content, {
                            backgroundColor: this.props.appThem2?.card_BG2,
                        }]}
                    >
                        {/* service */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Services
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Services}
                            </Text>
                        </View>

                        {/* category */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Category
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Category}
                            </Text>
                        </View>

                        {/* Workers */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Workers
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Workers}
                            </Text>
                        </View>

                        {/* Date & Time */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Date & Time
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Date} | {Time}
                            </Text>
                        </View>

                        {/* Workering Hours */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Workering Hours
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Workhour} hours
                            </Text>
                        </View>
                    </View>

                    {/* service detail */}
                    <TouchableOpacity
                        style={[ReviewStyle.center, ReviewStyle.flex, ReviewStyle.detail, , {
                            backgroundColor: this.props.appThem2?.card_BG2,
                        }]}
                        onPress={() => { }}
                    >

                        <Text
                            style={[ReviewStyle.smlTXT, , {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                            {Services} Details
                        </Text>

                        <Image
                            source={icons.DownArrow}
                            style={[ReviewStyle.downIcon, , {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>

                    <View style={[ReviewStyle.content, {
                        backgroundColor: this.props.appThem2?.card_BG2,
                    }]}>

                        {/* Service */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {Services}
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {TotalAmount}
                            </Text>
                        </View>

                        {/* Promo */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Promo
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: COLORS.purple,
                                }]}
                            >
                                -{Promo}
                            </Text>
                        </View>

                        <LineBreaker
                            color={this.props.appThem2?.lineBreaker}
                        />

                        {/* Final */}
                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <Text
                                style={[ReviewStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                Total
                            </Text>

                            <Text
                                style={[ReviewStyle.midTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Final}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={[ReviewStyle.content, {
                            backgroundColor: this.props.appThem2?.card_BG2,
                        }]}
                    >

                        <View
                            style={[ReviewStyle.flex]}
                        >

                            <View
                                style={[ReviewStyle.flex]}
                            >
                                <Image
                                    source={icons.Master}
                                    style={[ReviewStyle.icon]}
                                />

                                <Text
                                    style={[ReviewStyle.midTXT, {
                                        marginLeft: 10,
                                        color: this.props.appThem2?.text_Black_White
                                    }]}>
                                    {CardNo}
                                </Text>

                            </View>

                            <TouchableOpacity
                            onPress={() => {}}
                            >
                                <Text
                                    style={[ReviewStyle.midTXT, {
                                        color: COLORS.purple,
                                    }]}
                                >
                                    Change
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    

                </ScrollView>

                <Footer
                onPress={() => {
                    this.props.navigation.navigate("PinScreen")
                }}
                    height={SIZES.height * 0.15}
                    ButtonText={'Confirm Payment'}
                />

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


export default connect(mapStateToProps)(ReviewScreen);