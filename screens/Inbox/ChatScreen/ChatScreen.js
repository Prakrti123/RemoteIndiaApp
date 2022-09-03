import React, { Component, useCallback, useEffect, useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    View
} from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { COLORS, icons, images } from "../../../constants";
import ChatScreenStyle from "./ChatScreenStyle";

class ChatScreen extends Component {

    constructor(props) {

        super(props)
    }

    state = {
        messages: [
            {
                _id: 1,
                text: 'I have booked your house cleaning service for Decembw=er 23 or 10AM',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: ""
                },
            },
            {
                _id: 2,
                text: 'Hi Jenny good morning',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: '../../../assets/images/CleanerS1.png',
                },
            },
        ],
        idValue: 2,
    }

    componentDidMount() {

        console.log(this.props.route.params.avatar)

        setTimeout(() => {
            this.setState({
                idValue: this.state.idValue - 1,
            })
        }, 100);
    }

    render() {

        const { messages, idValue } = this.state;

        const renderBubble = (props) => {
            return (
                <Bubble
                    {...props}
                    wrapperStyle={{
                        right: {
                            backgroundColor: COLORS.purple
                        }
                    }}
                    textStyle={{
                        right: {
                            color: COLORS.white,
                        },
                        left: {
                            color: COLORS.darkGray3,
                        }
                    }}
                />
            )
        }

        const renderSend = (props) => {
            return (
                <Send {...props}
                    children={
                        <View style={[ChatScreenStyle.sendBtn, ChatScreenStyle.center]}>
                            <Image
                                style={ChatScreenStyle.sendIcon}
                                source={icons.Send}
                            />
                        </View>
                    }
                />
            )
        }

        return (
            <View style={ChatScreenStyle.mainView}>

                <GiftedChat
                    messages={messages}
                    // onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 2,
                    }}
                    alwaysShowSend
                    renderSend={renderSend}
                    renderBubble={renderBubble}
                    scrollToBottom
                    
                />

            </View>
        )
    }
}
export default function (props) {

    const onSend = useCallback((messages = []) => {
        this.setState({
            messages: previousMessages => GiftedChat.append(previousMessages, messages)
        })
    }, []);

    return (
        <ChatScreen
            {...props}
        // renderMessage={renderMessage}
        />
    )
};