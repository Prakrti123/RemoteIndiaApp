import React, { Component } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Call, Chat, Header } from "../../components/Index";
import { COLORS, dummyData, icons, images } from "../../constants";
import InboxStyle from "./InboxStyle";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";

class Inbox extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        tabSelected: 'Chats'
    }

    render() {

        const {
            tabSelected
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    search={icons.Search}
                    searchPress={() => { this.props.navigation.navigate("Search") }}
                    leftComponent={images.LightLOGO}
                    rightComponent={icons.More}
                    title={'Inbox'}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={InboxStyle.content}>

                    {/* tab */}
                    <View style={InboxStyle.tab}>

                        {/* chats tab */}
                        <TouchableOpacity style={[InboxStyle.chats, {
                            borderColor: tabSelected === 'Chats' ? COLORS.purple : this.props.appThem2?.tab_Border,
                        }]}
                            onPress={() => {
                                this.setState({
                                    tabSelected: 'Chats'
                                })
                            }}>

                            <Text style={[InboxStyle.tabTXT, {
                                color: tabSelected === 'Chats' ? COLORS.purple : COLORS.gray,
                            }]}>
                                Chats
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[InboxStyle.chats, {
                            borderColor: tabSelected === 'Calls' ? COLORS.purple : this.props.appThem2?.tab_Border,
                        }]}
                            onPress={() => {
                                this.setState({
                                    tabSelected: 'Calls'
                                })
                            }}>

                            <Text style={[InboxStyle.tabTXT, {
                                color: tabSelected === 'Calls' ? COLORS.purple : COLORS.gray,
                            }]}>
                                Calls
                            </Text>
                        </TouchableOpacity>

                    </View>

                    {tabSelected === "Chats" ?
                        <View style={InboxStyle.list}
                        >
                            <FlatList
                                // contentContainerStyle={InboxStyle.list}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled
                                data={dummyData.Chats}
                                renderItem={({ item, index }) => (
                                    <Chat
                                        key={`Chats-${item.id}`}
                                        onPress={() => {
                                            // this.props.navigation.navigate("ChatScreen", {

                                            //     // passing data
                                            //     userName: item.name,
                                            //     avatar: item.image
                                            // });
                                        }}
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        description={item.description}
                                        time={item.time}
                                        newMSG={item.newMSG}
                                    />
                                )}
                            />
                        </View>
                        :
                        <View style={InboxStyle.list}
                        >
                            <FlatList
                                // contentContainerStyle={InboxStyle.list}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled
                                data={dummyData.Calls}
                                renderItem={({ item, index }) => (
                                    <Call
                                        key={`Calls-${item.id}`}
                                        id={item.id}
                                        onPress={() => {
                                        }}
                                        image={item.image}
                                        name={item.name}
                                        category={item.category}
                                        date={item.date}
                                        icon={item.category === 'Incoming' ? icons.DownArrow1 : item.category === 'Outgoing' ? icons.UpArrow : item.category === 'Missed' ? icons.Canceled : <></>}
                                    />
                                )}
                            />
                        </View>
                    }

                </View>
            )
        }

        const renderAddBtn = () => {
            return (
                <TouchableOpacity style={[InboxStyle.AddBtn, InboxStyle.center]}>
                    <Text style={InboxStyle.plus}>
                        +
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={[InboxStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* Add Button */}
                {renderAddBtn()}
            </View>
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

// check weather the data fetched is in required form or not
export default connect(mapStateToProps, mapDispatchProps)(Inbox);