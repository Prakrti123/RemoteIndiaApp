import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
    Animated,
    Appearance, FlatList, Image,
    ImageBackground,
    ScrollView,
    Text, TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FilterModal from "../../components/FilterModal/FilterModal";
import FormInput from "../../components/FormInput";
import { LineBreaker, PopularSection, SeriveHorizontal, ServiceVertical } from "../../components/Index";
import OfferBanner from "../../components/Offer/OfferBanner";
import OfferService from "../../components/Offer/OfferService";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import HomeStyle from "./HomeStyle/HomeStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";
import { template } from "@babel/core";
import { PopService } from "../Index";

class HomePage extends Component {

    constructor(props) {
        super(props);
        // PropFunction(props);
    }

    state = {
        colors: '',
        navigation: this.props.navigation,
        theme: this.props.theme,
        card: COLORS.card,
        text: COLORS.black,
        imgActive: 0,
        showFilterModal: false,

        // popular section
        IsServiceSelected: 1,
        BookMark: false,
    }

    render() {

        const { navigation, theme,
            card, text,
            IsServiceSelected,
            BookMark,
            showFilterModal,
            imgActive,
        } = this.state;

        const renderHeader = () => {
            return (
                <View style={[HomeStyle.MainHeader, {
                    backgroundColor: this.props.appThem2?.screen_BG
                }]}>

                    {/* profile icon */}
                    <TouchableOpacity style={HomeStyle.ProfileBtn}>
                        <Image source={theme === false ? icons.Profile3DGirl : icons.Profile3D}
                            resizeMode="contain"
                            style={HomeStyle.ProfileStyle}
                        />
                    </TouchableOpacity>

                    {/* text */}
                    <View style={HomeStyle.headerTitle}>

                        <View style={HomeStyle.headerLinear}>
                            <Text style={[HomeStyle.smallTitle, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Good Morning 👋🏻
                            </Text>
                        </View>

                        <Text style={[HomeStyle.bigTitle, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Andrew Ainsley
                        </Text>
                    </View>

                    {/* notification and saved */}
                    <View style={HomeStyle.TwoIcons}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Notification") }}>
                            <Image
                                source={icons.BellLight}
                                resizeMode="contain"
                                style={[HomeStyle.RightIcon, {
                                    tintColor: this.props.appThem2?.whiteIcon
                                }]}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Bookmark") }}>
                            <Image
                                source={icons.SaveLight}
                                resizeMode="contain"
                                style={[HomeStyle.RightIcon, {
                                    tintColor: this.props.appThem2?.whiteIcon
                                }]}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

        const updateCurrentSlideIndex = (e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const currentIndex = Math.round(contentOffsetX / SIZES.width);
            // console.log(currentIndex)
            // setImgActive(currentIndex)
            this.setState({
                imgActive: currentIndex
            });
        }

        const renderBanner = () => {
            return (
                <View style={HomeStyle.banner_main}>
                    <View style={HomeStyle.wrap}>
                        <ScrollView
                            // onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal
                            // style={HomeStyle.wrap}
                            onMomentumScrollEnd={updateCurrentSlideIndex}
                        >
                            {dummyData.banners.map((e, index, item) => (
                                <>
                                    <OfferBanner
                                        cotainerStyle={{

                                        }}
                                        key={e.id}
                                        discount={e.discount}
                                        Offer={e.OfferName}
                                        subTitle={e.SubTitle}
                                        BG={e.imageBG}
                                        cleaner={e.Cleaner}
                                        homepage={true}
                                        index={index}
                                        onPress={() => { this.props.navigation.navigate("OfferPage") }}
                                    />
                                </>
                            ))}
                        </ScrollView>
                        <View style={HomeStyle.wrapDot}>
                            {dummyData.banners.map((e, index) => (
                                <Text key={e}
                                    style={imgActive == index ? HomeStyle.dotActive : HomeStyle.dotInActive}
                                >
                                    ●
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
            )
        }

        const renderContent = () => {
            return (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={HomeStyle.ContentView}>

                    {/* search view */}
                    <View style={[HomeStyle.SearchView, {
                        backgroundColor: this.props.appThem2?.inputBox
                    }]}>

                        <View style={HomeStyle.SearchInnerView}>
                            {/* icon */}
                            <Image
                                source={icons.Search}
                                resizeMode={'contain'}
                                style={[HomeStyle.searchIcon, {
                                    tintColor: this.props.appThem2?.IconGrayScale
                                }]}
                            />

                            {/* textInput */}
                            <FormInput
                                onFocus={() => navigation.navigate("Search")}
                                onChange={() => navigation.navigate("Search")}
                                placeholder={"Search"}
                                placeholderStyle={this.props.appThem2?.inputText}
                            />
                        </View>

                        <TouchableOpacity
                            style={[HomeStyle.parameterBtn, {
                                padding: 6.8,
                                backgroundColor: this.props.appThem2?.mainColor,
                            }]}
                            onPress={() => {
                                this.setState({
                                    showFilterModal: true
                                })
                                this.props.navigation.navigate("Search")
                            }}
                        >
                            {/* icon */}
                            <Image
                                source={icons.Filter}
                                resizeMode={'contain'}
                                style={theme === false ? [HomeStyle.searchIcon, { tintColor: COLORS.primary }] : [HomeStyle.searchIcon, { tintColor: COLORS.white }]}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* filter */}
                    <>
                        {showFilterModal &&
                            <FilterModal
                                isVisible={showFilterModal}
                                onClose={() => this.setState({
                                    showFilterModal: false
                                })}
                            />
                        }
                    </>

                    {/* 🍙🍙🍙🍙 The Banner Section 🍙🍙🍙🍙 */}

                    {/* banner header */}
                    <View style={HomeStyle.BannerView}>
                        {/* banner title */}
                        <Text style={[HomeStyle.BannerText, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Special Offers
                        </Text>

                        {/* see all */}
                        <TouchableOpacity
                            style={HomeStyle.SeeBtnStyle}
                            onPress={() => this.props.navigation.navigate("OfferPage")}
                        >
                            <Text style={[HomeStyle.SeeAllBtn, {
                                color: this.props.appThem2?.mainColor
                            }]}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* BannerView */}
                    <ScrollView
                        style={HomeStyle.FlatListView}
                        scrollEnabled
                        snapToAlignment="center"
                    >

                        {/* Banner FlatList */}
                        {/* <FlatList
                            horizontal
                            snapToAlignment="center"
                            data={dummyData.banners}
                            keyExtractor={item => `${item.id}`}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={HomeStyle.FlatList}
                            renderItem={({ item, index }) => (
                                <OfferBanner
                                    cotainerStyle={{

                                    }}
                                    discount={item.discount}
                                    Offer={item.OfferName}
                                    subTitle={item.SubTitle}
                                    BG={item.imageBG}
                                    cleaner={item.Cleaner}
                                    index={index}
                                    onPress={() => { this.props.navigation.navigate("OfferPage") }}
                                />
                            )}
                        /> */}

                        {renderBanner()}

                    </ScrollView>

                    {/* 🍙🍙🍙🍙 Serive Section🍙🍙🍙🍙 */}

                    {/* service header */}
                    <View style={HomeStyle.BannerView}>
                        {/* banner title */}
                        <Text style={[HomeStyle.BannerText, {
                            color: this.props.appThem2?.text_Black_White
                        }]}>
                            Services
                        </Text>

                        {/* see all */}
                        <TouchableOpacity
                            style={HomeStyle.SeeBtnStyle}
                            onPress={() => { navigation.navigate('AllService') }}>
                            <Text style={[HomeStyle.SeeAllBtn, {
                                color: this.props.appThem2?.mainColor
                            }]}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* serviceView */}
                    <Animated.ScrollView
                        contentContainerStyle={[HomeStyle.ServiceView]}
                        scrollEnabled
                    >
                        {dummyData.service.map((item, index) => {
                            return (
                                <OfferService
                                    key={`service-${item.id}`}
                                    item={item}
                                    id={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    color={item.color}
                                    colorBg={item.colorBg}
                                    btn_BG={this.props.appThem2?.btn_BG}
                                    border={this.props.appThem2?.btn_Border}
                                    text={this.props.appThem2?.text_Black_White}
                                    onPress={() => this.props.navigation.navigate("Cleaning", { title: item.title })}
                                />
                            )
                        })}
                    </Animated.ScrollView>

                    {/* line breaker */}
                    <LineBreaker
                        linerStyle={HomeStyle.linerStyle}
                        color={this.props.appThem2?.lineBreaker}
                    />

                    {/* 🍙🍙🍙🍙 popular Service Section 🍙🍙🍙🍙 */}

                    {/* Polular Service header */}
                    <View style={HomeStyle.BannerView}>
                        {/* banner title */}
                        <Text style={[HomeStyle.BannerText, {
                            color: this.props.appThem2?.text_Black_White
                        }]}>
                            Most Popular Services
                        </Text>

                        {/* see all */}
                        <TouchableOpacity
                            style={HomeStyle.SeeBtnStyle}
                            onPress={() => { this.props.navigation.navigate("PopService") }}
                        >
                            <Text style={[HomeStyle.SeeAllBtn, {
                                color: this.props.appThem2?.mainColor
                            }]}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <PopularSection
                            onPress={() => {
                                this.props.navigation.navigate("ServiceDetails", {
                                    service: 'Cleaning',
                                    sName: 'House Cleaning',
                                    params: {
                                        title: 'House Cleaning'
                                    },
                                })
                            }} 
                        />
                    </ScrollView>

                    <>

                        {/* service horizontal section */}
                        {/* <ScrollView
                        contentContainerStyle={HomeStyle.popularView}
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {dummyData.popular.map((item, index) => {
                            return (
                                <SeriveHorizontal
                                    onPress={() => {
                                        this.setState({
                                            IsServiceSelected: item.id
                                        })
                                    }}
                                    key={`popular-${item.id}`}
                                    Selected={IsServiceSelected}
                                    id={item.id}
                                    title={item.title}
                                    text={this.props.appThem2?.option_Text}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )
                        })}
                    </ScrollView> */}

                        {/* service vertical section */}
                        {/* <ScrollView
                        contentContainerStyle={HomeStyle.AllService}
                        scrollEnabled
                        showsVerticalScrollIndicator={false}
                    >
                        {dummyData.Default.map((item, index) => {
                            return (
                                <ServiceVertical
                                    onPress={() => {
                                        this.props.navigation.navigate("ServiceDetails", {
                                            service: 'Cleaning',
                                            sName: 'House Cleaning',
                                            params: {
                                                title: 'House Cleaning'
                                            },
                                        })
                                    }}
                                    key={`Default-${item.id}`}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
                            )
                        })}
                    </ScrollView> */}

                    </>


                </ScrollView>
            )
        }

        return (
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                style={[HomeStyle.MainView, {
                    backgroundColor: this.props.appThem2?.screen_BG
                }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

            </KeyboardAwareScrollView>


        );
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
export default connect(mapStateToProps, mapDispatchProps)(HomePage);