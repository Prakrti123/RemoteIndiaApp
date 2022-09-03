import { Icon } from "native-base";
import React, { Component } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    ImageBackground,
} from "react-native";
import { COLORS, icons } from "../../constants";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";
import BookmarkCompStyle from "./BookmarkCompStyle/BookmarkCompStyle";
class BookmarkComponent extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        item: this.props.item,
        bg: this.props.bg,
        saved: this.props.saved,
        saveOnPress: this.props.saveOnPress,
    }

    render() {

        const {
            item,
            saved,
            saveOnPress
        } = this.state;

        return (
            <TouchableOpacity
                style={[BookmarkCompStyle.ServiceView,
                {
                    backgroundColor: this.props.colorBg,
                    border: this.props.border,
                }
                ]}
                onPress={() => { }}
            >
                <View style={[BookmarkCompStyle.imageView,
                {
                    backgroundColor: item.bg
                }
                ]}>
                    <Image
                        source={item.cleaner}
                        resizeMode={'contain'}
                        style={BookmarkCompStyle.cleaner}
                    />
                </View>

                {/* text */}
                <View style={BookmarkCompStyle.text}>

                    <Text style={[BookmarkCompStyle.name,
                    {
                        color: this.props.appThem2?.text_Gray_Scale
                    }]}>
                        {item.name}
                    </Text>

                    <Text style={[BookmarkCompStyle.title, {
                        color: this.props.appThem2?.text_Black_White
                    }]}>
                        {item.title}
                    </Text>

                    <Text style={[BookmarkCompStyle.price]}>
                        {item.price}
                    </Text>

                    <View style={BookmarkCompStyle.ratingView}>

                        <Image
                            source={item.star}
                            resizeMode={'contain'}
                            style={BookmarkCompStyle.star}
                        />

                        <Text style={[BookmarkCompStyle.gray, {
                            color: this.props.appThem2?.text_Gray_Scale
                        }]}>
                            {item.rating}  |  {item.review} reviews
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={BookmarkCompStyle.BookMarkBox}
                    onPress={this.props.savedOnPress}
                >
                    <Image
                        source={saved === false ? icons.SaveLight : icons.SaveDark}
                        resizeMode={'contain'}
                        style={BookmarkCompStyle.BookMark}
                    />
                </TouchableOpacity>

            </TouchableOpacity>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchProps)(BookmarkComponent);