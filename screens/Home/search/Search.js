import React, { Component } from "react";
import {
    View,
    Appearance,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FilterModal from "../../../components/FilterModal/FilterModal";
import FormInput from "../../../components/FormInput";
import { LineBreaker } from "../../../components/Index";
import { COLORS, dummyData, icons } from "../../../constants";
import SearchStyle from "./SearchStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../../store/action/toggleActions";

class Search extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        theme: this.props.theme,
        showFilterModal: false
    }

    render() {

        const {
            theme,
            showFilterModal,
        } = this.state;

        const renderSearchBar = () => {
            return (
                <View style={SearchStyle.searchBar}>

                    {/* search view */}
                    <View style={[SearchStyle.SearchView, { backgroundColor: this.props.appThem2?.inputBox }]}>

                        <View style={SearchStyle.SearchInnerView}>
                            {/* icon */}
                            <Image
                                source={icons.Search}
                                resizeMode={'contain'}
                                style={[SearchStyle.searchIcon, { tintColor: this.props.appThem2?.whiteIcon }]}
                            />

                            {/* textInput */}
                            <FormInput
                                onFocus={() => { }}
                                onChange={() => { }}
                                value={"Value"}
                                valueColor={this.props.appThem2?.inputText}
                                placeholder={"Search"}
                                placeholderStyle={this.props.appThem2?.inputText}
                            />
                        </View>

                        <TouchableOpacity
                            style={theme === false ? SearchStyle.parameterBtn : [SearchStyle.parameterBtn, {
                                padding: 6.8,
                                backgroundColor: COLORS.purple,
                            }]}
                            onPress={() => {
                                this.setState({
                                    showFilterModal: true
                                })
                            }}
                        >
                            {/* icon */}
                            <Image
                                source={icons.Filter}
                                resizeMode={'contain'}
                                style={theme === false ? [SearchStyle.searchIcon, { tintColor: COLORS.primary }] : [SearchStyle.searchIcon, { tintColor: COLORS.white }]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

        const renderContent = () => {
            return (

                <View style={[SearchStyle.content, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}>
                    {/* header */}
                    <View style={SearchStyle.header}>
                        <Text style={[SearchStyle.maintext, {
                            color: this.props.appThem2?.text_Black_White,
                        }]}>
                            Recent
                        </Text>

                        <TouchableOpacity>

                            <Text style={SearchStyle.clearText}>Clear All</Text>
                        </TouchableOpacity>
                    </View>

                    <LineBreaker
                        color={this.props.appThem2?.lineBreaker}
                    />

                    {dummyData.SearchHistory.map((item, index) => {
                        return (
                            <View style={[SearchStyle.HistoryView, {
                                backgroundColor: this.props.appThem2?.screen_BG,
                            }]}>

                                <Text style={[SearchStyle.searchText, {
                                    color: this.props.appThem2?.text_Black_White,
                                }]}>
                                    {item.title}
                                </Text>

                                <TouchableOpacity style={SearchStyle.iconBtn}>
                                    <Image
                                        source={icons.cross}
                                        resizeMode={'contain'}
                                        style={SearchStyle.icon}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            )
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={[SearchStyle.mainView, {
                    backgroundColor: this.props.appThem2?.screen_BG,
                }]}>

                {/* search bar */}
                {renderSearchBar()}

                {/* content */}
                {renderContent()}

                {showFilterModal &&
                    <FilterModal
                        isVisible={showFilterModal}
                        // navigation={navigation}
                        onClose={() => this.setState({
                            showFilterModal: false
                        })}
                    />
                }

            </KeyboardAwareScrollView>
        )
    }
}
// export default function (props) {

//     const scheme = Appearance.getColorScheme()
//     const theme = scheme === 'light' ? false : true;

//     return (
//         <Search
//             {...props}
//             theme={theme}
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

export default connect(mapStateToProps, mapDispatchProps)(Search);