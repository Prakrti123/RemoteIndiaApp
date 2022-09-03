import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from "react-native";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";
import { BookingCard, BookingDetail, Header, LineBreaker, SuccessCancelmodal } from "../../components/Index";
import { icons, images, COLORS, dummyData, FONTS, SIZES } from "../../constants";
import BookingStyle from "./BookingStyle";
import { Modal } from "native-base";

class BookingPage extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        TabSelected: 'Upcoming',
        UpcomingBookings: '',
        dropDown: false,
        showDetails: 1,
        isCollapsible: false,
        showCancelModal: false,
        cancelModal: false,
    }

    componentDidMount() {
        this.state.cancelModal
            ?
            setTimeout(() => {
                this.setState({
                    cancelModal: false
                })
            }, 2000)
            :
            <></>
    }

    render() {

        const {
            TabSelected,
            UpcomingBookings,
            dropDown,
            showDetails,
            isCollapsible,
            showCancelModal,
            cancelModal,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'My Bookings'}
                    leftComponent={images.LightLOGO}
                    rightComponent={icons.More}
                    morePress={() => { }}
                />
            )
        }

        const renderTabs = () => {
            return (
                <View style={[BookingStyle.flex, BookingStyle.center]}>

                    <TouchableOpacity
                        style={[BookingStyle.tab, BookingStyle.center, {
                            borderBottomColor: TabSelected != 'Upcoming' ? this.props.appThem2?.tab_Border : COLORS.purple
                        }]}
                        onPress={() => {
                            this.setState({
                                TabSelected: 'Upcoming',
                            })
                        }}
                    >

                        <Text style={[BookingStyle.tabTXT, {
                            color: TabSelected != 'Upcoming' ? COLORS.gray : COLORS.purple
                        }]}>
                            Upcoming
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[BookingStyle.tab, BookingStyle.center, {
                            borderBottomColor: TabSelected != 'Completed' ? this.props.appThem2?.tab_Border : COLORS.purple
                        }]}
                        onPress={() => {
                            this.setState({
                                TabSelected: 'Completed',
                            })
                        }}
                    >

                        <Text style={[BookingStyle.tabTXT, {
                            color: TabSelected != 'Completed' ? COLORS.gray : COLORS.purple
                        }]}>
                            Completed
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[BookingStyle.tab, BookingStyle.center, {
                            borderBottomColor: TabSelected != 'Cancelled' ? this.props.appThem2?.tab_Border : COLORS.purple
                        }]}
                        onPress={() => {
                            this.setState({
                                TabSelected: 'Cancelled',
                            })
                        }}
                    >

                        <Text style={[BookingStyle.tabTXT, {
                            color: TabSelected != 'Cancelled' ? COLORS.gray : COLORS.purple
                        }]}>
                            Cancelled
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        const renderBookings = () => {
            return (
                <View>
                    {/* card */}
                    <FlatList
                        scrollEnabled
                        contentContainerStyle={[BookingStyle.list]}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Bookings}
                        renderItem={({ item, index }) => (

                            TabSelected === item.status
                                ?
                                <BookingCard
                                    key={`Bookings-${item.id}`}
                                    id={item.id}
                                    onPress={() => {
                                        this.setState({
                                            showDetails: item.id
                                        })
                                    }}
                                    onCancelStyle={() => {
                                        this.setState({
                                            showModal: !showModal
                                        })
                                    }}
                                    card_BG={this.props.appThem2?.card_BG}
                                    service={item.service}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    lineBreaker={this.props.appThem2?.lineBreaker}
                                    bgColor={TabSelected === 'Cancelled' ? COLORS.red : TabSelected === 'Completed' ? COLORS.green : this.props.appThem2?.status_Color}
                                    color={TabSelected === 'Cancelled' ? COLORS.white : TabSelected === 'Completed' ? COLORS.white : this.props.appThem2?.status_Text}
                                    name={item.Name}
                                    status={item.status}
                                    image={item.image}
                                    dropDown={dropDown}
                                    isCollapsible={isCollapsible}
                                    renderMap={showDetails === item.id ? true : false}
                                    arrow={showDetails === item.id && dropDown ? icons.UpArrow1 : icons.DownArrow}
                                    date={TabSelected != 'Cancelled' ? item.date : null}
                                    time={TabSelected != 'Cancelled' ? item.time : null}
                                    location={TabSelected != 'Cancelled' ? item.Location : null}
                                    profile={TabSelected != 'Cancelled' ? item.profile : null}
                                    onPressReceiptShow={() => {
                                        this.props.navigation.navigate("")
                                    }}
                                    TabSelected={TabSelected}
                                    onPressCancelBooking={() => {
                                        console.log(cancelModal, "cancel Modal")
                                        this.setState({
                                            showCancelModal: true
                                        })
                                    }}
                                    onPressEReceipt={() => {
                                        this.props.navigation.navigate("EReceipt");
                                    }}
                                />
                                :
                                <></>
                        )}
                    />

                    {/* cancellation process modal */}

                    <Modal
                        isOpen={showCancelModal}
                        onClose={() => this.setState({ showCancelModal: false })}
                        style={[BookingStyle.modal, {
                            backgroundColor: this.props.appThem2?.filter_BG,
                        }]}
                    >
                        <Modal.Body
                            style={BookingStyle.modalBody}>

                            {/* dash */}
                            <View style={BookingStyle.dash}
                            ></View>

                            {/* heading */}
                            <Text style={[BookingStyle.tabTXT, {
                                ...FONTS.h2,
                                color: COLORS.red,
                                marginBottom: 15,
                            }]}>
                                Cancel Booking
                            </Text>

                            {/* text */}
                            <Text style={[BookingStyle.txt, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Are you sure want to cancel your service booking?
                            </Text>

                            {/* subtxt */}
                            <Text style={[BookingStyle.txt, {
                                fontSize: 14,
                                letterSpacing: 0.5,
                                fontWeight: '100',
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                Only 80% of the money you can refund from your payment according to our policy
                            </Text>

                            <LineBreaker
                                color={this.props.appThem2?.lineBreaker}
                            />

                            <View style={[BookingStyle.flex, {
                                marginTop: 15,
                                flex: 1,
                                width: SIZES.width * 0.9,
                                justifyContent: 'space-evenly',
                            }]}>

                                {/* cancel btn */}
                                <TouchableOpacity
                                    style={[BookingStyle.btn, {
                                        backgroundColor: this.props.appThem2?.transperacy,
                                    }]}
                                    onPress={() => {
                                        this.setState({
                                            showCancelModal: !showCancelModal,
                                        })
                                    }}
                                >

                                    <Text style={[BookingStyle.btnTxt, {
                                        color: this.props.appThem2?.text_Purple_White,
                                    }]}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>

                                {/* confirm cancellation btn */}
                                <TouchableOpacity
                                    style={[BookingStyle.btn, {
                                        backgroundColor: COLORS.purple,
                                    }]}
                                    onPress={() => {
                                        this.setState({
                                            cancelModal: true
                                        })
                                    }}
                                >
                                    <Text style={[BookingStyle.btnTxt, {
                                        color: COLORS.white,
                                        // backgroundColor: COLORS.purple,
                                    }]}>
                                        Yes, Cancel Booking
                                    </Text>
                                </TouchableOpacity>

                                {cancelModal === true
                                    ?
                                    <SuccessCancelmodal
                                        cancelModal={cancelModal}
                                        type={'cancel'}
                                        title={"Cancel Booking Successful!"}
                                        subTitle={"You have successful canceled your service booking 80% funds will be returned to your account"}
                                    />
                                    :
                                    <></>
                                }

                            </View>

                        </Modal.Body>
                    </Modal>


                </View>
            )
        }

        const renderNoBookings = () => {
            return (
                <View style={BookingStyle.center}>

                    <Image
                        source={images.NoBooking}
                        style={BookingStyle.IMG}
                        resizeMode={'contain'}
                    />

                    <Text style={[BookingStyle.noBokingBodyTXT, {
                        color: this.props.appThem2?.text_Black
                    }]}>
                        You have no Upcoming booking
                    </Text>

                    <Text style={[BookingStyle.noBookingSubText, {
                        color: this.props.appThem2?.text_Gray
                    }]}>
                        You don't have a Upcoming booking. Make a new booking by clicking the button below
                    </Text>

                    <TouchableOpacity
                        style={BookingStyle.makeNewBooking}
                        onPress={() => {

                        }}
                    >
                        <Text style={[BookingStyle.smallTXT, {
                            color: COLORS.purple,
                        }]}>
                            Make New Booking
                        </Text>
                    </TouchableOpacity>

                </View>
            )
        }

        const renderContent = () => {
            return (
                <View style={BookingStyle.content}>
                    {/* tabs */}
                    {renderTabs()}

                    {TabSelected === 'Upcoming' && UpcomingBookings === 0
                        ?
                        <>
                            {/* no bookings */}
                            {renderNoBookings()}
                        </>
                        :
                        <>
                            {/* bookings */}
                            {renderBookings()}
                        </>
                    }


                </View>
            )
        }

        return (
            <View style={[BookingStyle.main, {
                backgroundColor: this.props.appThem2?.screen_BG
            }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}
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

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(BookingPage);