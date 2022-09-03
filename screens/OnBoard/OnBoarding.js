import { DarkTheme, ThemeProvider, useNavigation, useTheme } from "@react-navigation/native";
import React, { Component, useContext, useEffect, useRef } from "react";
import {
    Appearance,
    Button,
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Image,
    Animated
} from "react-native";
import { connect } from "react-redux";
import { COLORS, dummyData, FONTS, images, SIZES } from "../../constants";
import darkMode from "../../styles/darkMode";
import { OnBoardStyle } from "../StyleIndex";
import { handleToggle } from "../../store/action/toggleActions";

class OnBoard extends Component {

    constructor(props) {
        super(props);
        // PropFunction(props)
        this.componentRef = React.createRef();
    }

    state = {
        colors: '',
        navigation: this.props.navigation,
        scheme: this.props.scheme,
        theme: this.props.theme,
        card: this.props.card,
        background: this.props.background,
        text: this.props.text,
        primary: this.props.primary,
        imgActive: 0,
        scrollX: new Animated.Value(0),
        complete: false,
        ref: this.props.keyRef,
        currentIndex: 0,
        onViewChangeRef: this.props.onViewChangeRef,
    }

    componentDidMount() {
        (async () => {
            // this.setState({
            // onViewChangeRef: this.state.ref?.current?.scrollToOffset()
            // })

        })();
        // console.log(this.componentRef.current.snapToOffsets);
    }

    render() {

        const { colors } = this.props;

        const { navigation, scheme, theme,
            card, background, text, primary,
            scrollX, complete, currentIndex,
            ref, onViewChangeRef, imgActive
        } = this.state;

        // to get current Slide Index
        const updateCurrentSlideIndex = e => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const IndexOnSlide = Math.round(contentOffsetX / SIZES.width);
            this.setState({
                currentIndex: IndexOnSlide
            })
            // console.log(currentIndex);
        }

        // from next button
        const goNextSlide = () => {
            console.log(currentIndex);
            const nextSlideIndex = currentIndex + 1;
            if (nextSlideIndex != dummyData.slides.length) {
                const offset = nextSlideIndex * SIZES.width;
                this.state.ref?.current?.scrollToIndex({
                    Index: offset,
                    animated: true
                });
                this.setState({
                    currentIndex: nextSlideIndex
                });
            }
        };

        const skip = () => {
            const lastSlideIndex = dummyData.slides.length - 1;
            const offset = lastSlideIndex * SIZES.width;
            this.componentRef?.current?.snapToOffsets({ offset });
            // ref?.current?.scrollToOffset({offset});
            this.setState({
                currentIndex: lastSlideIndex
            });
        };

        // FlatList Component
        const renderOnBoardScreen = () => {

            return (

                <Animated.ScrollView
                    ref={ref}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <>
                        {dummyData.slides.map((item, index) => (
                            <View
                                key={`slides-${index}`}
                                style={[OnBoardStyle.SlideComponet, { 
                                    color: this.props.appThem2?.text_Black_White 
                                }]}
                            >
                                <View style={[OnBoardStyle.FlatListStyle, {
                                    // flex: 1,
                                    // flexDirection: 'row',
                                }]}>

                                    {/* skip btn */}
                                    {index < dummyData.slides.length - 1 &&

                                        <TouchableOpacity
                                            style={OnBoardStyle.SkipBTN}
                                            onPress={() => {
                                                skip;
                                                console.log("--Navigate to sign In screen--" + currentIndex)
                                            }}
                                        >
                                            <Text style={[OnBoardStyle.SkipText, {
                                                color: COLORS.cardGary
                                            }]}>Skip</Text>
                                        </TouchableOpacity>
                                    }
                                    {index == dummyData.slides.length - 1 &&
                                        <></>
                                    }

                                    {/* Board Image */}
                                    <Image
                                        source={item.image}
                                        resizeMode={'contain'}
                                        style={OnBoardStyle.BoardImage}
                                    />

                                    {/* lavender Elippse */}
                                    <Image
                                        source={images.LavenderEllipse}
                                        resizeMode={'contain'}
                                        style={OnBoardStyle.LavenderEliipse}
                                    />


                                    {/* title */}
                                    <View style={OnBoardStyle.BoardTitleView}>
                                        <Text style={[OnBoardStyle.BoardTitle, { color: this.props.appThem2?.text_Black_White }]}>
                                            {item.title}
                                        </Text>
                                        <Text style={[OnBoardStyle.BoardSubTitle, { color: this.props.appThem2?.text_Gray_Scale }]}>
                                            {item.subTitle}
                                        </Text>

                                        {/* Next btn */}
                                        {index < dummyData.slides.length - 1 &&
                                            <TouchableOpacity style={{
                                                marginTop: 10,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 50,
                                                backgroundColor: COLORS.primary,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                                onPress={goNextSlide}
                                            >

                                                <Image
                                                    source={images.NextBTN}
                                                    resizeMode={'contain'}
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        tintColor: COLORS.white
                                                    }}
                                                />

                                            </TouchableOpacity>
                                        }

                                        {index == dummyData.slides.length - 1 &&
                                            <TouchableOpacity style={{
                                                marginTop: 10,
                                                width: 220,
                                                height: 50,
                                                borderRadius: 50,
                                                backgroundColor: COLORS.primary,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                                onPress={() => navigation.navigate("SignIn", { navigation: navigation })}
                                            >
                                                <Text style={{
                                                    ...FONTS.h4,
                                                    color: COLORS.white
                                                }}>Get Started</Text>
                                            </TouchableOpacity>
                                        }

                                    </View>

                                </View>
                            </View>
                        ))}

                        {/* <View style={OnBoardStyle.wrapDot}>
                            {dummyData.slides.map((e, index) => (
                                <Text key={e}
                                    style={imgActive == index ? OnBoardStyle.dotActive : OnBoardStyle.dotInActive}
                                >
                                    ●
                                </Text>
                            ))}
                        </View> */}
                    </>
                </Animated.ScrollView>
            )
        }

        // Dots
        const renderDots = () => {

            const dotPosition = Animated.divide(scrollX, SIZES.width)

            return (
                <View style={{
                    flexDirection: 'row',
                    zIndex: 3,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: SIZES.height > 700 ? "35%" : "25%",
                    alignItems: 'center',
                    justifyContent: 'center'

                }}>
                    {dummyData.slides.map((item, index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base, 17, SIZES.base],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`slides-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    backgroundColor: COLORS.primary,
                                    marginHorizontal: SIZES.radius / 2,
                                    width: dotSize,
                                    height: dotSize,

                                }}>

                            </Animated.View>
                        )
                    })}
                </View>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[OnBoardStyle.MainView, { 
                    backgroundColor: this.props.appThem2?.screen_BG, 
                    color:  this.props.appThem2?.text_Black_White,
                }]}>

                    <Image
                        source={images.LavenderEllipse}
                        resizeMode={'contain'}
                        style={OnBoardStyle.PinkEllipse}
                    />

                    {/* Switch BTN */}
                    <>
                        {/* <TouchableOpacity
                    style={
                        theme === false && scheme === 'light' ? OnBoardStyle.DarkModeBTN : [darkMode.DarkModeBTN]
                    }
                    onPress={() => {

                        console.log("theme "+ this.state.theme , this.state.theme=== true ? "darkMode" : "lightMode");

                        (async () => {
                            this.setState({
                                theme: !theme
                            })
                        })();
                    }}
                >
                    <Text
                        style={theme === false && scheme === 'light' ? OnBoardStyle.DarkModeBTN_Text : [darkMode.DarkModeBTN_Text, {color: text}]}
                    >
                        Dark Mode
                    </Text>
                </TouchableOpacity> */}
                    </>

                    {/* OnBoardingScreen */}
                    {renderOnBoardScreen()}

                    {/* Dots */}
                    {renderDots()}

                </View>
            </SafeAreaView>
        )
    }
}
// function PropFunction(props) {

//     const navigation = useNavigation();
//     const scheme = Appearance.getColorScheme();
//     const colors = useTheme();
//     const card = '#0f0f0f'
//     const background = colors.background
//     const text = '#ffffff'
//     const primary = colors.primary
//     const theme = scheme === 'light' ? false : true;

//     const ref = useRef(null);
//     const onViewChangeRef = ref?.current?.scrollToOffset();

//     console.log(ref.current)

//     return (
//         <OnBoard
//             {...props}
//             navigation={navigation}
//             scheme={scheme}
//             colors={colors}
//             theme={theme}
//             card={card}
//             text={text}
//             primary={primary}
//             background={background}
//             KeyRef={ref}
//             onViewChangeRef={onViewChangeRef}
//         />
//     )
// }

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
export default connect(mapStateToProps, mapDispatchProps)(OnBoard);