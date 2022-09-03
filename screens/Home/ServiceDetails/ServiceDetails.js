import React, { Component } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Card, LineBreaker, Review, SeriveHorizontal } from "../../../components/Index";
import ReviewStyle from "../../../components/Review/ReviewStyle";
import { COLORS, dummyData, icons, images, SIZES } from "../../../constants";
import ServiceDetailStyle from "./ServiceDetailStyle/ServiceDetailStyle";
// import { handleToggle } from "../../../store/action/toggleActions";
import { connect } from "react-redux";

class ServiceDetails extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        theme: false,
        Service: 'Cleaning',
        SName: 'House Cleaning',
        CName: 'Jenny Wilson',
        Rating: '4.8',
        Review: '4,479',
        Price: '$20',
        aboutPrice: 'Floor Price',
        Address: '255 Grand Park Avenue, New York',
        About: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        AboutMore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor. Libero id faucibus nisl tincidunt eget nullam non. Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada fames ac turpis egestas. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Nulla facilisi morbi tempus iaculis urna id volutpat. Sit amet consectetur adipiscing elit ut aliquam purus. Sit amet mattis vulputate enim nulla aliquet. Velit dignissim sodales ut eu sem integer vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Accumsan lacus vel facilisis volutpat est velit.',
        // Service: this.props.navigation.getParam('title'),

        // bookmark
        saved: false,

        // text
        show: false,
        // view photo
        viewMore: false,
        IsRatingSelected: 'All',
    }

    render() {

        const {
            Service, saved, show, viewMore,
            theme, IsRatingSelected,
        } = this.state;
        // console.log(Service)

        const renderHeader = () => {
            return (
                <View style={ServiceDetailStyle.Header}>

                    <TouchableOpacity
                        style={ServiceDetailStyle.backBtn}
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Image
                            source={icons.BackIcon}
                            style={ServiceDetailStyle.backIcon}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        const renderSlider = () => {
            return (
                <View style={ServiceDetailStyle.ImgSliderView}>

                    <FlatList
                        pagingEnabled
                        showsVerticalScrollIndicator={false}
                        scrollToOverflowEnabled
                        contentContainerStyle={[ServiceDetailStyle.Slider, {
                        }]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dummyData.Cleaning}
                        renderItem={({ item, index }) => (
                            <Card
                                key={`Cleaning-${item.id}`}
                                image={item.cleaner}
                            />
                        )}
                    />
                </View>
            )
        }

        const renderDetails = () => {
            return (
                <View style={[ServiceDetailStyle.DetailView, {
                    // backgroundColor: this.props.appThem2?.screen_BG,
                }]}>

                    {/* heading */}
                    <View style={ServiceDetailStyle.headingView}>
                        <Text style={[ServiceDetailStyle.heading, {
                            color: this.props.appThem2?.text_Black_White,
                            // color: COLORS.white,
                        }]}>
                            {this.state.SName}
                        </Text>

                        {/* bookmark */}
                        <TouchableOpacity
                            style={ServiceDetailStyle.BookMarkBox}
                            onPress={() => {
                                this.setState({
                                    saved: !saved
                                })
                            }}
                        >
                            <Image
                                source={saved === false ? icons.SaveLight : icons.SaveDark}
                                resizeMode={'contain'}
                                style={ServiceDetailStyle.BookMark}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* details */}
                    <View style={ServiceDetailStyle.Details}>

                        {/* 1st line detail */}
                        <View style={ServiceDetailStyle.NameView}>

                            {/* name */}
                            <Text style={ServiceDetailStyle.CName}>
                                {this.state.CName}
                            </Text>

                            {/* star rating */}
                            <Image
                                source={icons.Rating}
                                style={ServiceDetailStyle.star}
                            />

                            <Text style={[ServiceDetailStyle.smallDetail, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                {this.state.Rating}
                            </Text>

                            {/* review */}
                            <Text style={[ServiceDetailStyle.smallDetail, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                ({this.state.Review} reviews)
                            </Text>
                        </View>

                        {/* 2nd line detail */}
                        <View style={ServiceDetailStyle.NameView}>

                            {/* service category */}
                            <View style={[ServiceDetailStyle.ServiceView, {
                                // backgroundColor: this.props.appThem2?.transperacy,
                            }]}>
                                <Text style={ServiceDetailStyle.serviceDetail}>
                                    {this.state.Service}
                                </Text>
                            </View>

                            {/* location */}
                            <Image
                                source={icons.LocationPin}
                                style={[ServiceDetailStyle.star, {
                                    tintColor: COLORS.purple,
                                    marginHorizontal: 4,
                                }]}
                            />

                            {/* address */}
                            <Text style={[ServiceDetailStyle.smallDetail, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                {this.state.Address}
                            </Text>
                        </View>

                        {/* 3rd line detail */}
                        <View style={ServiceDetailStyle.NameView}>
                            <Text style={ServiceDetailStyle.Price}>
                                {this.state.Price}
                            </Text>

                            <Text style={[ServiceDetailStyle.smallDetail, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                ({this.state.aboutPrice})
                            </Text>
                        </View>
                    </View>
                </View>
            )
        }

        const renderAbout = () => {
            return (
                <View style={ServiceDetailStyle.DetailView}>

                    {/* heading */}
                    <Text style={[ServiceDetailStyle.CName, {
                        color: this.props.appThem2?.text_Black_White,
                    }]}>
                        About Me
                    </Text>

                    <Text style={[{
                        color: this.props.appThem2?.text_Gray_Scale,
                    }]}>
                        {
                            show === false ?
                                this.state.About
                                :
                                this.state.AboutMore
                        }
                    </Text>

                    <TouchableOpacity style={[ServiceDetailStyle.center, {
                        alignItems: 'flex-start'
                    }]}
                        onPress={() => {
                            this.setState({
                                show: !show
                            })
                        }}>
                        {show === false ?
                            <Text style={ServiceDetailStyle.readMore}>
                                Read More
                            </Text>
                            :
                            <Text style={ServiceDetailStyle.readMore}>
                                Show Less
                            </Text>
                        }

                    </TouchableOpacity>
                </View>
            )
        }

        const renderMedia = () => {
            return (
                <View style={ServiceDetailStyle.DetailView}>

                    {/* heading*/}
                    <View style={[ServiceDetailStyle.headingView, {
                        marginTop: 0,
                    }]}>
                        <Text style={[ServiceDetailStyle.CName, {
                            color: this.props.appThem2?.text_Black_White
                        }]}>
                            Photos & Videos
                        </Text>

                        <TouchableOpacity style={ServiceDetailStyle.center}
                            onPress={() => {
                                this.setState({
                                    viewMore: !viewMore,
                                })
                            }}
                        >
                            {viewMore === false ?
                                <Text style={ServiceDetailStyle.serviceDetail}>
                                    See More
                                </Text>
                                :
                                <Text style={ServiceDetailStyle.serviceDetail}>
                                    See Less
                                </Text>
                            }
                        </TouchableOpacity>
                    </View>

                    {/* images */}
                    <View style={ServiceDetailStyle.ImageView}>

                        <View style={ServiceDetailStyle.Img1}>

                            {viewMore === false
                                ?
                                dummyData.gallary.map((item, index) => {
                                    return (
                                        item.id % 2 === 0 && item.id <= 4 ?
                                            <Image
                                                source={item.image}
                                                style={ServiceDetailStyle.ImgStyle}
                                            />
                                            :
                                            <></>
                                    )
                                })
                                :
                                dummyData.gallary.map((item, index) => {
                                    return (
                                        item.id % 2 === 0 && item.id % 2 <= item.id / 2 ?
                                            <Image
                                                source={item.image}
                                                style={ServiceDetailStyle.ImgStyle}
                                            />
                                            :
                                            <></>
                                    )
                                })
                            }
                        </View>

                        <View style={ServiceDetailStyle.Img2}>

                            {viewMore === false
                                ?
                                dummyData.gallary.map((item, index) => {
                                    return (
                                        item.id % 2 != 0 && item.id <= 4 ?
                                            <Image
                                                source={item.image}
                                                style={ServiceDetailStyle.ImgStyle}
                                            />
                                            :
                                            <></>
                                    )
                                })
                                :
                                dummyData.gallary.map((item, index) => {
                                    return (
                                        item.id % 2 != 0 && item.id >= item.id / 2 ?
                                            <Image
                                                source={item.image}
                                                style={ServiceDetailStyle.ImgStyle}
                                            />
                                            :
                                            <></>
                                    )
                                })
                            }

                        </View>
                    </View>
                </View>
            )
        }

        const renderReview = () => {
            return (
                <View style={[ServiceDetailStyle.DetailView]}>

                    <View style={[ServiceDetailStyle.ReviewView, {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }]}>
                        <View style={[ServiceDetailStyle.NameView, {
                            marginTop: 0,
                            marginLeft: -12,
                        }]}>
                            {/* star rating */}
                            <Image
                                source={icons.Rating}
                                style={ServiceDetailStyle.star}
                            />

                            <Text style={[ServiceDetailStyle.CName, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                {this.state.Rating}
                            </Text>

                            {/* review */}
                            <Text style={[ServiceDetailStyle.CName, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                ({this.state.Review} reviews)
                            </Text>
                        </View>

                        <TouchableOpacity style={ServiceDetailStyle.center}>
                            <Text style={ServiceDetailStyle.serviceDetail}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* service rating */}
                    <FlatList
                        contentContainerStyle={ServiceDetailStyle.RatingView}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dummyData.Rating}
                        renderItem={({ item, index }) => (
                            <SeriveHorizontal
                                onPress={() => {
                                    this.setState({
                                        IsRatingSelected: item.star
                                    })
                                }}
                                Selected={IsRatingSelected}
                                key={`Rating-${item.id}`}
                                id={item.id}
                                star={icons.Star}
                                title={item.star}
                                text={this.props.appThem2?.option_Text}
                                colorBg={this.props.appThem2?.option_BG}
                                border={this.props.appThem2?.option_Border}
                            />
                        )}
                    />

                    {/* review */}
                    <FlatList
                        contentContainerStyle={{
                            marginBottom: 15,
                        }}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.review}
                        renderItem={({ item, index }) => (
                            IsRatingSelected === item.rating || IsRatingSelected === 'All' ?
                                <Review
                                    onPress={() => { }}
                                    id={item.id}
                                    key={`Review-${item.id}`}
                                    profile={item.profile}
                                    name={item.name}
                                    rating={item.rating}
                                    review={item.review}
                                    likes={item.likes}
                                    time={item.time}
                                />
                                :
                                <></>
                        )}
                    />

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker}
                    />

                </View>
            )
        }

        const renderFooter = () => {
            return (
                <View style={ReviewStyle.footer}>

                    {/* message */}
                    <TouchableOpacity
                        style={[ReviewStyle.message, {
                            backgroundColor: this.props.appThem2?.transperacy,
                        }]}>
                        <Text
                            style={[ReviewStyle.msgTxt]}
                        >
                            Message
                        </Text>
                    </TouchableOpacity>

                    {/* Book Now */}
                    <TouchableOpacity
                        style={ReviewStyle.bookBtn}
                        onPress={() => {
                            this.props.navigation.navigate("BookingDetail",
                                {
                                    // parmas
                                    serviceName: 'House Cleaning',
                                }
                            )
                        }}>
                        <Text
                            style={[ReviewStyle.bookTxt]}
                        >
                            Book Now
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[ServiceDetailStyle.mainView, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}
            >

                {/* header */}
                {renderHeader()}

                {/* Image slider */}
                {renderSlider()}

                {/* detail section */}
                {renderDetails()}

                {/* about service */}
                {renderAbout()}

                {/* photos and videos */}
                {renderMedia()}

                {/* review */}
                {renderReview()}

                {/* footer */}
                {renderFooter()}
            </ScrollView>
        )
    }
}
// export default ServiceDetails;

// get all data of the var from redux
const mapStateToProps = (state) => ({
    appTheme: state.Globle.appTheme,
    appThem2: state.Globle.appTheme,
    DarkMode: state.Globle.darkMode,
    error: state.error
})

// // call the action from redux
// const mapDispatchProps = {
//     handleToggle
// }

export default connect(mapStateToProps)(ServiceDetails);