import React, { Component } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FormInput, Header, HelpDropDown, LineBreaker, SeriveHorizontal } from "../../../components/Index";
import { COLORS, dummyData, icons, images, SIZES } from "../../../constants";
import HelpStyle from "./HelpStyle";
import { handleToggle } from "../../../store/action/toggleActions";
import { connect } from "react-redux";

class Help extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        TabSelected: 'FAQ',
        theme: false,
        IsServiceSelected: 1,
        IsBoxOpened: '',
        Keyword: '',
    }

    render() {

        const {
            theme, IsServiceSelected,
            TabSelected, IsBoxOpened,
            Keyword,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Help Center'}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                    morePress={() => { }}
                    backPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
            )
        }

        const renderTabs = () => {
            return (
                <View style={[HelpStyle.flex, HelpStyle.center]}>

                    <TouchableOpacity
                        style={[HelpStyle.tab, HelpStyle.center, {
                            borderBottomColor: TabSelected != 'FAQ' ? this.props.appThem2?.tab_Border : COLORS.purple
                        }]}
                        onPress={() => {
                            this.setState({
                                TabSelected: 'FAQ',
                            })
                        }}
                    >

                        <Text style={[HelpStyle.tabTXT, {
                            color: TabSelected != 'FAQ' ? COLORS.gray : COLORS.purple
                        }]}>
                            FAQ
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[HelpStyle.tab, HelpStyle.center, {
                            borderBottomColor: TabSelected != 'ContactNo' ? this.props.appThem2?.tab_Border : COLORS.purple
                        }]}
                        onPress={() => {
                            this.setState({
                                TabSelected: 'ContactNo',
                            })
                        }}
                    >

                        <Text style={[HelpStyle.tabTXT, {
                            color: TabSelected != 'ContactNo' ? COLORS.gray : COLORS.purple
                        }]}>
                            Contact No
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        const renderCategory = () => {
            return (
                <ScrollView
                    contentContainerStyle={HelpStyle.category}
                    horizontal
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {dummyData.SettingCategory.map((item, index) => {
                        return (
                            <SeriveHorizontal
                                onPress={() => {
                                    this.setState({
                                        IsServiceSelected: item.id
                                    })
                                }}
                                key={`SettingCategory-${item.id}`}
                                id={item.id}
                                title={item.setting}
                                Selected={IsServiceSelected}
                                text={this.props.appThem2?.option_Text}
                                colorBg={this.props.appThem2?.option_BG}
                                border={this.props.appThem2?.option_Border}
                            />
                        )
                    })}
                </ScrollView>
            )
        }

        const renderSearch = () => {
            return (
                // search View
                <View style={[HelpStyle.SearchView, , {
                    backgroundColor: this.props.appThem2?.inputBox,
                }]}>

                    <View style={[HelpStyle.SearchInnerView]}>
                        {/* icon */}
                        <Image
                            source={icons.Search}
                            resizeMode={'contain'}
                            style={[HelpStyle.searchIcon, {
                                tintColor: COLORS.inputIcon
                            }]}
                        />

                        {/* textInput */}
                        <FormInput
                            onFocus={() => {this.props.navigation.navigate("Search")}}
                            onChange={(text) => {
                                this.setState({
                                    Keyword: text,
                                })
                            }}
                            valueColor={this.props.appThem2?.inputText}
                            value={''}
                            placeholder={"Search"}
                            placeholderStyle={this.props.appThem2?.inputText}
                        />
                    </View>

                    <TouchableOpacity
                        style={theme === false ? HelpStyle.parameterBtn : [HelpStyle.parameterBtn, {
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
                            style={theme === false ? [HelpStyle.searchIcon, { tintColor: COLORS.primary }] : [HelpStyle.searchIcon, { tintColor: COLORS.white }]}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        const renderDropDown = () => {
            return (
                <View
                    scrollEnabled
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={HelpStyle.content}>

                    {dummyData.helpData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={[HelpStyle.main, {
                                    backgroundColor: this.props.appThem2?.option_BG
                                }]}
                                onPress={() => {
                                    this.setState({
                                        IsBoxOpened: item.id
                                    })
                                }}
                            >

                                <View style={HelpStyle.flex}>

                                    <Text style={[HelpStyle.title, {
                                        color: this.props.appThem2?.text_Black_White,
                                    }]}>
                                        {item.title}
                                    </Text>

                                    <Image
                                        resizeMode={'contain'}
                                        source={icons.DownArrow}
                                        style={[HelpStyle.dropIcon, {
                                            // marginBottom: IsBoxOpened != item.id ? -SIZES.width * 0.05 : null,
                                            // paddingBottom: IsBoxOpened != item.id ? -SIZES.width * 0.05 : null,
                                        }]}
                                    />
                                </View>

                                {IsBoxOpened === item.id ?
                                    <>
                                        <LineBreaker
                                            color={this.props.appThem2?.lineBreaker}
                                        />

                                        <Text style={[HelpStyle.description, {
                                            color: this.props.appThem2?.text_Gray_Scale,
                                        }]}>
                                            {item.description}
                                        </Text>
                                    </>
                                    :
                                    <></>
                                }

                            </TouchableOpacity>
                        )
                    })}

                </View>
            )
        }

        const renderContact = () => {
            return (
                <View style={[HelpStyle.content]}>

                    {/* custom */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[HelpStyle.main, {
                            backgroundColor: this.props.appThem2?.option_BG,
                        }]}
                    >
                        <View style={[HelpStyle.flex, { justifyContent: 'flex-start' }]}>
                            <Image
                                resizeMode="contain"
                                source={icons.HeadPhone}
                                style={[HelpStyle.dropIcon, {
                                    paddingHorizontal: SIZES.width * 0.04,
                                }]}
                            />

                            <Text style={[HelpStyle.title, {
                                marginHorizontal: 15,
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Customer Service
                            </Text>
                        </View>


                    </TouchableOpacity>

                    {/* whatsapp */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[HelpStyle.main, {
                            backgroundColor: this.props.appThem2?.option_BG,
                        }]}
                    >
                        <View style={[HelpStyle.flex, { justifyContent: 'flex-start' }]}>
                            <Image
                                resizeMode="contain"
                                source={icons.whatsApp}
                                style={[HelpStyle.dropIcon, {
                                    tintColor: null,
                                    paddingHorizontal: SIZES.width * 0.04,
                                }]}
                            />

                            <Text style={[HelpStyle.title, {
                                marginHorizontal: 15,
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                WhatsApp
                            </Text>
                        </View>

                    </TouchableOpacity>

                    {/* Website */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[HelpStyle.main, {
                            backgroundColor: this.props.appThem2?.option_BG,
                        }]}
                    >
                        <View style={[HelpStyle.flex, { justifyContent: 'flex-start' }]}>
                            <Image
                                resizeMode="contain"
                                source={icons.Globe}
                                style={[HelpStyle.dropIcon, {
                                    paddingHorizontal: SIZES.width * 0.04,
                                    tintColor: COLORS.purple
                                }]}
                            />

                            <Text style={[HelpStyle.title, {
                                marginHorizontal: 15,
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Website
                            </Text>
                        </View>

                    </TouchableOpacity>

                    {/* facebook */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[HelpStyle.main, {
                            backgroundColor: this.props.appThem2?.option_BG,
                        }]}
                    >
                        <View style={[HelpStyle.flex, { justifyContent: 'flex-start' }]}>
                            <Image
                                resizeMode="contain"
                                source={icons.FaceBook}
                                style={[HelpStyle.dropIcon, {
                                    paddingHorizontal: SIZES.width * 0.04,
                                    tintColor: null
                                }]}
                            />

                            <Text style={[HelpStyle.title, {
                                marginHorizontal: 15,
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Facebook
                            </Text>
                        </View>

                    </TouchableOpacity>

                    {/* twitter */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[HelpStyle.main, {
                            backgroundColor: this.props.appThem2?.option_BG,
                        }]}
                    >
                        <View style={[HelpStyle.flex, { justifyContent: 'flex-start' }]}>
                            <Image
                                resizeMode="contain"
                                source={icons.Twitter}
                                style={[HelpStyle.dropIcon, {
                                    paddingHorizontal: SIZES.width * 0.04,
                                    tintColor: null
                                }]}
                            />

                            <Text style={[HelpStyle.title, {
                                marginHorizontal: 15,
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Twitter
                            </Text>
                        </View>


                    </TouchableOpacity>

                    {/* instagram */}
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[HelpStyle.main, {
                            backgroundColor: this.props.appThem2?.option_BG,
                        }]}
                    >
                        <View style={[HelpStyle.flex, { justifyContent: 'flex-start' }]}>
                            <Image
                                resizeMode="contain"
                                source={icons.Insta}
                                style={[HelpStyle.dropIcon, {
                                    paddingHorizontal: SIZES.width * 0.04,
                                    tintColor: null
                                }]}
                            />

                            <Text style={[HelpStyle.title, {
                                marginHorizontal: 15,
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Instagram
                            </Text>
                        </View>


                    </TouchableOpacity>

                </View>
            )
        }

        return (
            <ScrollView style={[HelpStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>

                {/* header */}
                {renderHeader()}

                {/* tab */}
                {renderTabs()}

                {TabSelected === 'FAQ' ?
                    <>
                        {/* setting category */}
                        {renderCategory()}

                        {/* search section */}
                        {renderSearch()}

                        {/* help drop down */}
                        {renderDropDown()}
                    </>
                    :
                    <>
                        {/* contact */}
                        {renderContact()}
                    </>
                }


            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchProps)(Help);