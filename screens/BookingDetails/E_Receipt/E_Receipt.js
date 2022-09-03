import React, { Component } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, Modal } from "react-native";
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";
import { Footer, Header, LineBreaker } from "../../../components/Index";
import { COLORS, SIZES, FONTS, icons, images } from "../../../constants";
import EReceiptStyle from "./E_ReceiptStyle";
// import { Modal } from "native-base";

class E_Receipt extends Component {

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
        PayMethod: 'Cedit Card',
        PayDate: 'Dec 23, 2024',
        PayTime: '10:02 AM',
        TransactionID: 'SK23875388',
        Status: 'Paid',
        showMoreOptions: false,
    }

    render() {

        const {
            Services, Category, Workers,
            Date, Time, Workhour, CardNo,
            TotalAmount, Promo, Final,
            PayMethod, PayDate, PayTime,
            TransactionID, Status,
            showMoreOptions,
        } = this.state;

        const renderHeader = () => {
            return (
                <>
                    <Header
                        title={'E-Receipt'}
                        leftComponent={icons.BackIcon}
                        backPress={() => {
                            this.props.navigation.goBack();
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                showMoreOptions: !showMoreOptions
                            })
                        }}>
                        <Image
                            source={icons.More}
                            style={[EReceiptStyle.moreIcon, EReceiptStyle.more]}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>

                    {/* more options */}
                    {showMoreOptions === true
                        ?
                        <>
                            {/* <Modal isOpen={showMoreOptions}> */}
                            {/* more */}
                            <View
                                style={[EReceiptStyle.moreView, {
                                    justifyContent: 'center',
                                    backgroundColor: this.props.appThem2?.card_BG
                                }]}
                            >
                                {/* share */}
                                <TouchableOpacity
                                    style={[EReceiptStyle.flex, {
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                    }]}
                                >
                                    <Image
                                        source={icons.Share}
                                        resizeMode={'contain'}
                                        style={[EReceiptStyle.moreIcon, {
                                            // tintColor: COLORS.purple
                                        }]}
                                    />

                                    <Text style={[EReceiptStyle.smlTXT, {
                                        marginLeft: 15,
                                        color: this.props.appThem2?.text_Gray
                                    }]}>
                                        Share E-Receipt
                                    </Text>
                                </TouchableOpacity>

                                <View style={[EReceiptStyle.lineBreak, {
                                    backgroundColor: this.props.appThem2?.lineBreaker,
                                }]} />

                                {/* download */}
                                <TouchableOpacity
                                    style={[EReceiptStyle.flex, {
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }]}
                                >
                                    <Image
                                        source={icons.Download}
                                        resizeMode={'contain'}
                                        style={[EReceiptStyle.moreIcon, {
                                            tintColor: COLORS.purple
                                        }]}
                                    />

                                    <Text style={[EReceiptStyle.smlTXT, {
                                        marginLeft: 15,
                                        color: this.props.appThem2?.text_Gray
                                    }]}>
                                        Download E-Receipt
                                    </Text>
                                </TouchableOpacity>

                                <View style={[EReceiptStyle.lineBreak, {
                                    backgroundColor: this.props.appThem2?.lineBreaker
                                }]} />

                                {/* print */}
                                <TouchableOpacity
                                    style={[EReceiptStyle.flex, {
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }]}
                                >
                                    <Image
                                        source={icons.Print}
                                        resizeMode={'contain'}
                                        style={[EReceiptStyle.moreIcon, {
                                            // tintColor: COLORS.purple
                                        }]}
                                    />

                                    <Text style={[EReceiptStyle.smlTXT, {
                                        marginLeft: 15,
                                        color: this.props.appThem2?.text_Gray
                                    }]}>
                                        Print
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* </Modal> */}

                        </>
                        :
                        <></>
                    }
                </>
            )
        }

        return (
            <View style={{
                backgroundColor: this.props.appThem2?.screen_BG
            }}>

                {/* header */}
                {renderHeader()}

                <ScrollView
                    scrollEnabled
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[EReceiptStyle.main, {
                        backgroundColor: this.props.appThem2?.screen_BG
                    }]}
                >

                    {/* content */}
                    <View
                        style={[EReceiptStyle.content, {
                            backgroundColor: this.props.appThem2?.card_BG,
                        }]}
                    >
                        {/* barCode */}
                        <Image
                            source={icons.BarCode}
                            style={[EReceiptStyle.barCode, {
                                tintColor: this.props.appThem2?.backIcon
                            }]}
                            resizeMode={'contain'}
                        />

                        {/* service */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Services
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {Services}
                            </Text>
                        </View>

                        {/* category */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Category
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {Category}
                            </Text>
                        </View>

                        {/* Workers */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Workers
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {Workers}
                            </Text>
                        </View>

                        {/* Date & Time */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Date & Time
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {Date} | {Time}
                            </Text>
                        </View>

                        {/* Workering Hours */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Workering Hours
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {Workhour} hours
                            </Text>
                        </View>
                    </View>

                    {/* service detail */}
                    <TouchableOpacity
                        style={[EReceiptStyle.center, EReceiptStyle.flex, EReceiptStyle.detail, {
                            backgroundColor: this.props.appThem2?.card_BG,
                        }]}
                        onPress={() => { }}
                    >
                        <Text
                            style={[EReceiptStyle.smlTXT, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                            {Services} Details
                        </Text>

                        <Image
                            source={icons.DownArrow}
                            style={[EReceiptStyle.downIcon]}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>

                    <View style={[EReceiptStyle.content, {
                        backgroundColor: this.props.appThem2?.card_BG,
                    }]}>

                        {/* Service */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                {Services}
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {TotalAmount}
                            </Text>
                        </View>

                        {/* Promo */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, , {
                                    color: this.props.appThem2?.mainColor,
                                }]}
                            >
                                Promo
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: COLORS.purple,
                                }]}
                            >
                                -{Promo}
                            </Text>
                        </View>

                        {/* Pay method */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Payment Method
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {PayMethod}
                            </Text>
                        </View>

                        <LineBreaker
                            color={this.props.appThem2?.lineBreaker}
                        />

                        {/* Date */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Date
                            </Text>

                            <Text
                                style={[EReceiptStyle.midTXT, {
                                    color: this.props.appThem2?.text_Gray_Scale,
                                }]}
                            >
                                {PayDate} | {PayTime}
                            </Text>
                        </View>

                        {/* Transaction ID */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Transaction ID
                            </Text>

                            <View
                                style={[EReceiptStyle.flex]}
                            >

                                <Text
                                    style={[EReceiptStyle.midTXT, {
                                        color: this.props.appThem2?.text_Gray_Scale,
                                    }]}
                                >
                                    {TransactionID}
                                </Text>

                                <TouchableOpacity
                                    style={EReceiptStyle.center}
                                >
                                    <Image
                                        source={icons.Copy}
                                        resizeMode={'contain'}
                                        style={[EReceiptStyle.icon]}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/* Status */}
                        <View
                            style={[EReceiptStyle.flex]}
                        >

                            <Text
                                style={[EReceiptStyle.smlTXT, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}
                            >
                                Status
                            </Text>

                            <View
                                style={[EReceiptStyle.flex]}
                            >
                                <TouchableOpacity
                                    style={[EReceiptStyle.center, EReceiptStyle.statusBtn]}
                                >
                                    <Text
                                        style={[EReceiptStyle.smlTXT, {
                                            color: COLORS.purple,
                                            marginVertical: 0,
                                        }]}
                                    >
                                        {Status}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </ScrollView>
            </View>
        )
    }
}
// export default E_Receipt;

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
export default connect(mapStateToProps, mapDispatchProps)(E_Receipt);