import { Button, Modal } from "native-base";
import React, { Component } from "react";
import {
    Appearance,
    FlatList,
    View, ScrollView,
    Dimensions,
    Animated,
    Text,
    TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";
import { BookmarkComponent, Header, LineBreaker, SeriveHorizontal, ServiceVertical } from "../../../components/Index";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../../constants";
import BookmarkStyle from "./BookmarkStyle/BookmarkStyle";

const { height, width } = Dimensions.get('window');

class Bookmark extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        sliderHeight: new Animated.Value(height / 8),
        Radius: new Animated.Value(0),
        SelectedCard: '',

        theme: this.props.theme,
        BookMark: true,
        IsServiceSelected: 1,
        Service: 1,
        showModal: false,
        item: '',

        id: '1',
        cleaner: 'item.cleaner',
        name: 'item.name',
        title: 'item.title',
        price: 'item.price',
        star: 'item.star',
        rating: 'item.rating',
        review: 'item.review',
        bg: 'item.bg',
    }

    componentDidMount() {
        setTimeout(() => {
            this.startAnimation();
        });
    }

    startAnimation = () => {
        Animated.timing(this.state.sliderHeight, {
            toValue: height / 1.6,
            duration: 1400,
            useNativeDriver: false
        }).start();
        Animated.timing(this.state.Radius, {
            toValue: 20,
            duration: 1400,
            useNativeDriver: false
        }).start();
    }

    render() {

        const {
            sliderHeight, Radius,
            theme, SelectedCard,
            BookMark, IsServiceSelected,
            Service, showModal, item,
            id, cleaner, name, title,
            price, star, rating,
            review, bg,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={"Bookmark"}
                    backPress={() => { this.props.navigation.goBack() }}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                    morePress={(item) => {
                        this.setState({
                            showModal: true,
                            item: item
                        })
                    }}
                />
            )
        }

        const ServiceChoice = (Choice) => {
            console.log(Choice);
            switch (Choice) {
                case 1: {
                    this.setState({
                        // Service: "Default",
                        Service: 1,
                    })
                    console.log(Service)
                    break;
                }
                case 2: {
                    this.setState({
                        // Service: "Cleaning",
                        Service: 2,
                    })
                    console.log(Service)
                    break;
                }
                case 3: {
                    this.setState({
                        // Service: "Repairing",
                        Service: 3,
                    })
                    console.log(Service)
                    break;
                }
                case 4: {
                    this.setState({
                        // Service: "Painting",
                        Service: 4,
                    })
                    console.log(Service)
                    break;
                }
                case 5: {
                    this.setState({
                        // Service: "Laundry",
                        Service: 5,
                    })
                    console.log(Service)
                    break;
                }
                case 6: {
                    this.setState({
                        // Service: "Appliance",
                        Service: 6,
                    })
                    console.log(Service)
                    break;
                }
                case 7: {
                    this.setState({
                        // Service: 'Plumbing',
                        Service: 7,
                    })
                    console.log(Service)
                    break;
                }
                case 8: {
                    this.setState({
                        // Service: "Shifting",
                        Service: 8,
                    })
                    console.log(Service)
                    break;
                }
                default: {
                    this.setState({
                        // Service: "Default"
                        Service: 1,
                    })
                    console.log(Service)
                    break;
                }
            }
        }

        // const renderModal = (item, id, cleaner, name, title, price, star, rating, review, bg) => {

        //     // console.log(item);
        //     return (

        //     )
        // }

        const renderContent = () => {
            return (
                <View style={[BookmarkStyle.content, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}>

                    <ScrollView
                        contentContainerStyle={BookmarkStyle.popularView}
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            dummyData.popular.map((item, index) => {
                                return (
                                    <SeriveHorizontal
                                        onPress={() => {
                                            this.setState({
                                                IsServiceSelected: item.id,
                                                // Service: item.title
                                            })
                                            ServiceChoice(item.id);
                                        }}
                                        key={`${item.id}`}
                                        id={item.id}
                                        title={item.title}
                                        Selected={IsServiceSelected}
                                        text={this.props.appThem2?.option_Text}
                                        colorBg={this.props.appThem2?.option_BG}
                                        border={this.props.appThem2?.option_Border}
                                    />
                                )
                            })
                        }
                    </ScrollView >

                    {Service === 1 ?
                        <FlatList
                            data={dummyData.Default}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <>

                                    <BookmarkComponent
                                        savedOnPress={(item) => {
                                            this.setState({
                                                showModal: true,
                                                SelectedCard: item.id,
                                                item: item,
                                            })
                                        }}
                                        // savedOnPress={(item) => { renderSlider(item) }}
                                        id={item.id}
                                        item={item}
                                        saved={BookMark}
                                        theme={theme}
                                        text={this.props.appThem2?.option_Text}
                                        colorBg={this.props.appThem2?.option_BG}
                                        border={this.props.appThem2?.option_Border}
                                    />


                                    {showModal
                                        ?
                                        <Modal isOpen={showModal} onClose={() => this.setState({ showModal: false })}>

                                            <Modal.Content minWidth="350px"
                                                style={{
                                                    paddingHorizontal: -15,
                                                    backgroundColor: this.props.appThem2?.card_BG,
                                                }}>
                                                {/* <Modal.CloseButton /> */}

                                                <Modal.Body>

                                                    <View
                                                        style={{
                                                            height: 70,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            backgroundColor: this.props.appThem2?.card_BG,
                                                        }}>

                                                        <Text style={{
                                                            ...FONTS.h2_5,
                                                            color: this.props.text_Black_White,
                                                        }}>
                                                            Remove from Bookmark?
                                                        </Text>

                                                    </View>

                                                    <LineBreaker
                                                        color={this.props.appThem2?.lineBreaker2}
                                                    />

                                                    <BookmarkComponent
                                                        id={id}
                                                        item={item}
                                                        saved={BookMark}
                                                        text={this.props.appThem2?.text_Black_White}
                                                        colorBg={this.props.appThem2?.option_BG}
                                                        border={this.props.appThem2?.option_Border}
                                                    />

                                                </Modal.Body>

                                                <View>
                                                    <Button.Group
                                                        style={{
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-around',
                                                            marginHorizontal: 15,
                                                            marginBottom: 15,
                                                        }}>
                                                        <TouchableOpacity
                                                            style={[BookmarkStyle.center, {
                                                                backgroundColor: this.props.appThem2?.transperacy,
                                                                width: "40%",
                                                                height: SIZES.height * 0.06,
                                                                borderRadius: 50,
                                                            }]}
                                                            onPress={() => {
                                                                this.setState({
                                                                    showModal: false
                                                                });
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    color: this.props.text_Black_White,
                                                                }}>
                                                                cancel
                                                            </Text>
                                                        </TouchableOpacity>

                                                        <Button
                                                            style={{
                                                                backgroundColor: COLORS.primary,
                                                                width: "50%",
                                                                borderRadius: 50,
                                                            }}
                                                            onPress={() => {
                                                                this.setState({
                                                                    showModal: false
                                                                });
                                                            }}>
                                                            Yes, Remove
                                                        </Button>
                                                    </Button.Group>
                                                </View>
                                            </Modal.Content>
                                        </Modal>
                                        :
                                        <></>
                                    }
                                </>
                            )}
                        />
                        :
                        <></>
                    }
                    {Service === 2 ?
                        <FlatList
                            data={dummyData.Cleaning}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }
                    {Service === 3 ?
                        <FlatList
                            data={dummyData.Repairing}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }
                    {Service === 4 ?
                        <FlatList
                            data={dummyData.Painting}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }
                    {Service === 5 ?
                        <FlatList
                            data={dummyData.Laundry}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }
                    {Service === 6 ?
                        <FlatList
                            data={dummyData.Appliance}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }
                    {Service === 7 ?
                        <FlatList
                            data={dummyData.Plumbing}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }{Service === 8 ?
                        <FlatList
                            data={dummyData.Shifting}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={BookmarkStyle.AllService}
                            renderItem={({ item, index }) => (
                                <BookmarkComponent
                                    savedOnPress={(item) => {
                                        UnMark(item)
                                    }}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    theme={theme}
                                    text={this.props.appThem2?.text_Black_White}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )}
                        />
                        :
                        <></>
                    }

                </View>
            )
        }

        return (
            <View style={BookmarkStyle.mainView}>

                {/* header */}
                {renderHeader()}

                {/* {content} */}
                {renderContent()}

                {/* modal */}
                {/* {renderModal(SelectedCard, id, cleaner, name, title, price, star, rating, review, bg)} */}

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

export default connect(mapStateToProps, mapDispatchProps)(Bookmark);