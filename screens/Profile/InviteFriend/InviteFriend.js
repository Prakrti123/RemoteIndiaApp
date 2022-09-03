import React, { Component } from "react";
import {
    FlatList,
    Image, Text, TouchableOpacity, View
} from "react-native";
import { connect } from "react-redux";
import { Call, Header } from "../../../components/Index";
import { dummyData, icons } from "../../../constants";
import InviteStyle from "./InviteFrdStyle";
import { handleToggle } from "../../../store/action/toggleActions";

class InviteFriend extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        status: 'invite',
        IDselected: false,
    }

    render() {

        const {
            status, IDselected,
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Invite Friends'}
                    backPress={() => {
                        this.props.navigation.goBack();
                    }}
                    leftComponent={icons.BackIcon}
                />
            )
        }

        return (
            <View style={[InviteStyle.main, {
                backgroundColor: this.props.appThem2?.screen_BG,
            }]}>

                {/* header */}
                {renderHeader()}

                {/* info */}
                <View style={[InviteStyle.content]}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dummyData.FriendInfo}
                        renderItem={({ item, index }) => (
                            <Call
                                key={`FriendInfo-${item.id}`}
                                invitePress={() => {
                                    this.setState({
                                        status: status === 'invite' ? 'invited' : 'invite',
                                        IDselected: item.id
                                    })
                                }}
                                FriendInfo={true}
                                id={item.id}
                                image={item.profile}
                                name={item.name}
                                number={item.contactNo}
                                IDselected={IDselected}
                                status={IDselected === item.id ? status : 'invite'}
                            />
                        )}
                    />
                </View>
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

export default connect(mapStateToProps, mapDispatchProps)(InviteFriend);