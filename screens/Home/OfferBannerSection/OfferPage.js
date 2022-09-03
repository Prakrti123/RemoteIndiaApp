import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
    Appearance,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from "react-native";
import { Header, OfferBanner, VerticalOfferBanner } from "../../../components/Index";
import { COLORS, dummyData, icons } from "../../../constants";
import OfferPageStyle from "./OfferPageStyle/OfferPageStyle";
import { handleToggle } from "../../../store/action/toggleActions";
import { connect } from "react-redux";

class OfferPage extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        navigation: this.props.navigation,
        theme: this.props.theme,
    }

    render() {

        const {
            navigation, theme
        } = this.state;
        // console.log(this.props.route)

        const renderHeader = () => {
            return (
                <Header
                    title={"Special Offers"}
                    backPress={() => { navigation.goBack() }}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                />
            )
        }

        const renderContent = () => {
            return (
                <View
                    style={OfferPageStyle.FlatListView}
                    
                >

                    {/* Banner FlatList */}
                    <FlatList
                        snapToAlignment="center"
                        data={dummyData.banners} 
                        keyExtractor={item => `${item.id}`}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={OfferPageStyle.FlatList}
                        renderItem={({ item, index }) => (
                            <VerticalOfferBanner
                                pagingEnabled
                                cotainerStyle={[OfferPageStyle.Offer]}
                                discount={item.discount}
                                Offer={item.OfferName}
                                subTitle={item.SubTitle}
                                BG={item.imageBG}
                                cleaner={item.Cleaner}
                                index={index}
                                onPress={() => { this.props.navigation.navigate("OfferPage") }}
                            />
                        )}
                    />

                </View>
            )
        }

        const updateCurrentSlideIndex = (e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const currentIndex = Math.round(contentOffsetX / width);
            // console.log(currentIndex)
            setImgActive(currentIndex)
        }

        const renderBanner = () => {
            return (
                <View style={OfferPageStyle.banner_main}>
                    <View style={OfferPageStyle.wrap}>
                        <ScrollView
                            // onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal
                            style={OfferPageStyle.wrap}
                            onMomentumScrollEnd={updateCurrentSlideIndex}
                        >
                            {dummyData.banners.map((e, index, item) => (
                                <Image
                                    key={e}
                                    resizeMode='stretch'
                                    style={OfferPageStyle.wrap}
                                    source={e}
                                />
                            ))}
                        </ScrollView>
                        <View style={OfferPageStyle.wrapDot}>
                            {dummyData.banners.map((e, index) => (
                                <Text key={e}
                                    style={imgActive == index ? OfferPageStyle.dotActive : OfferPageStyle.dotInActive}
                                >
                                    ●
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
            )
        }

        return (
            <View style={[OfferPageStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>
                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}
            </View>
        )
    }
}
// export default function (props) {

//     const navigation = useNavigation();
//     const scheme = Appearance.getColorScheme();
//     const theme = scheme === 'light' ? false : true;

//     return (
//         <OfferPage
//             {...props}
//             navigation={navigation}
//             theme={theme}
//         />
//     )
// };

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

export default connect(mapStateToProps, mapDispatchProps)(OfferPage);