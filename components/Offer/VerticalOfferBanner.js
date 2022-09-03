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
import VerticalOfferBannerStyle from "./VerticalOfferBannerStyle";


class VerticalOfferBanner extends React.Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    state = {
        scheme: this.props.scheme,
        theme: this.props.theme,
    }

    render() {

        const { theme } = this.state;

        return (
            <TouchableOpacity
                style={VerticalOfferBannerStyle.MainView}
                onPress={this.props.onPress}
            >
                {/* BG image */}
                <Image
                    source={this.props.BG}
                    resizeMode={'cover'}
                    style={VerticalOfferBannerStyle.BGimg}
                />

                {/* div section */}
                <View style={VerticalOfferBannerStyle.div}>

                    <View style={VerticalOfferBannerStyle.leftView}>

                        {/* offer */}
                        <Text style={VerticalOfferBannerStyle.discount}>
                            {this.props.discount}
                        </Text>

                        {/* title */}
                        <Text style={VerticalOfferBannerStyle.title}>
                            {this.props.Offer}
                        </Text>

                        {/* subtitle */}
                        <Text style={VerticalOfferBannerStyle.subtitle}>
                            {this.props.subTitle}
                        </Text>
                    </View>

                    {/* cleaner image */}
                    <View style={VerticalOfferBannerStyle.imgView}>

                        <Image
                            source={this.props.cleaner}
                            resizeMode={'cover'}
                            style={VerticalOfferBannerStyle.Cleaner}
                        />
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}
export default function(props) {

    const scheme = Appearance.getColorScheme();
    const theme = scheme === 'light' ? false : true;


    return(
        <VerticalOfferBanner
        {...props}
        scheme={scheme}
        theme={theme}
        />
    )
};