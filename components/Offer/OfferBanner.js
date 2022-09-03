import { View } from "native-base";
import React from "react";
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Appearance,

} from "react-native";
import { images, SIZES, dummyData, COLORS } from "../../constants";
import HomeStyle from "../../screens/Home/HomeStyle/HomeStyle";
import OfferBannerStyle from "./OfferBannerStyle";

class OfferBanner extends React.Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    state = {
        scheme: this.props.scheme,
        theme: this.props.theme,

        scrollX: new Animated.Value(0),
        complete: false,
        ref: this.props.keyRef,
        currentIndex: 0,
        onViewChangeRef: this.props.onViewChangeRef,
    }

    render() {

        const { theme, scrollX, complete, currentIndex, ref, onViewChangeRef } = this.state;

        // Dots
        // const renderDots = () => {

        //     const dotPosition = Animated.divide(scrollX, SIZES.width)

        //     return (
        //         <View style={OfferBannerStyle.dotView}>

        //             {dummyData.banners.map((item, index) => {

        //                 const opacity = dotPosition.interpolate({
        //                     inputRange: [index - 1, index, index + 1],
        //                     outputRange: [0.3, 1, 0.3],
        //                     extrapolate: "clamp"
        //                 })

        //                 const dotSize = dotPosition.interpolate({
        //                     inputRange: [index - 1, index, index + 1],
        //                     outputRange: [SIZES.base, 17, SIZES.base],
        //                     extrapolate: "clamp"
        //                 })

        //                 return (
        //                     <Animated.View
        //                         key={`banners-${index}`}
        //                         opacity={opacity}
        //                         style={{
        //                             borderRadius: SIZES.radius,
        //                             backgroundColor: COLORS.white,
        //                             marginHorizontal: SIZES.radius / 3,
        //                             width: dotSize,
        //                             height: SIZES.base,
        //                         }}>

        //                     </Animated.View>
        //                 )
        //             })}
        //         </View>
        //     )
        // }

        return (
            <TouchableOpacity
                style={OfferBannerStyle.MainView}
                onPress={this.props.onPress}
            >
                {/* BG image */}
                <Image
                    source={this.props.BG}
                    resizeMode={'cover'}
                    style={[OfferBannerStyle.BGimg, 
                        {
                            // marginLeft: this.props.homepage ? ((SIZES.width * 0.005) + (0.85 * this.props.index)) : null
                        }
                    ]}
                />

                {/* div section */}
                <View style={OfferBannerStyle.div}>

                    <View style={OfferBannerStyle.leftView}>

                        {/* offer */}
                        <Text style={OfferBannerStyle.discount}>
                            {this.props.discount}
                        </Text>

                        {/* title */}
                        <Text style={OfferBannerStyle.title}>
                            {this.props.Offer}
                        </Text>

                        {/* subtitle */}
                        <Text style={OfferBannerStyle.subtitle}>
                            {this.props.subTitle}
                        </Text>
                    </View>

                    {/* cleaner image */}
                    <View style={OfferBannerStyle.imgView}>

                        <Image
                            source={this.props.cleaner}
                            resizeMode={'contain'}
                            style={OfferBannerStyle.Cleaner}
                        />
                    </View>
                </View>

                {/* dots */}
                {/* {renderDots()} */}

            </TouchableOpacity>
        )
    }
}
export default function(props) {

    const scheme = Appearance.getColorScheme();
    const theme = scheme === 'light' ? false : true;


    return(
        <OfferBanner
        {...props}
        scheme={scheme}
        theme={theme}
        />
    )
};