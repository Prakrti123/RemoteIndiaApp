import React, { Component } from "react";
import { View, Text, Appearance, ScrollView, FlatList } from "react-native";
import { connect } from "react-redux";
import { Header, SeriveHorizontal, ServiceVertical } from "../../components/Index";
import { COLORS, dummyData, icons } from "../../constants/index";
import PopularSectionStyle from "./PopularSectionStyle";
import { handleToggle } from "../../store/action/toggleActions";


class PopularSection extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        navigation: this.props.navigation,
        IsServiceSelected: 1,
        BookMark: false,
        Service: 1,
    }

    render() {

        const {
            IsServiceSelected,
            BookMark, Service, navigation,
        } = this.state;

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

        const renderContent = () => {
            return (
                <View
                    showsVerticalScrollIndicator={false}
                    style={PopularSectionStyle.content}>

                    <ScrollView
                        contentContainerStyle={PopularSectionStyle.popularView}
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
                                        Selected={IsServiceSelected}
                                        key={`${item.id}`}
                                        id={item.id}
                                        title={item.title}
                                        text={this.props.appThem2?.option_Text}
                                        colorBg={this.props.appThem2?.option_BG}
                                        border={this.props.appThem2?.option_Border}
                                    />
                                )
                            })
                        }
                    </ScrollView >

                    {/* service vertical section */}

                    {/* all */}
                    {Service === 1 ?
                        <FlatList
                            data={dummyData.Default}
                            keyExtractor={item => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
                                    colorBg={this.props.appThem2?.option_BG}
                                    border={this.props.appThem2?.option_Border}
                                />
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
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
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
                            contentContainerStyle={PopularSectionStyle.AllService}
                            renderItem={({ item, index }) => (
                                <ServiceVertical
                                    onPress={this.props.onPress}
                                    id={item.id}
                                    item={item}
                                    saved={BookMark}
                                    text_Black={this.props.appThem2?.text_Black_White}
                                    text_Gray={this.props.appThem2?.text_Gray_Scale}
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
            <View style={[PopularSection.main, {

            }]}>
                {/* content */}
                {renderContent()}
            </View>
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

// export default connect(mapStateToProps, mapDispatchProps)(PopularSection);
export default connect(mapStateToProps, mapDispatchProps)(PopularSection);