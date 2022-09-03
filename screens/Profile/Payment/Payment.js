import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Header, PayCard } from "../../../components/Index";
import { dummyData, icons } from "../../../constants";
import PaymentStyle from "./PaymentStyle";

class Payment extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        cardIMG: '',
        cardName: '',
    }

    render() {

        const {
            cardIMG, cardName
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={'Wallet'}
                    backPress={() => {
                        this.props.navigation.goBack();
                    }}
                    morePress={() => {}}
                    leftComponent={icons.BackIcon}
                    rightComponent={icons.More}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={PaymentStyle.content}>

                    {/* list */}
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dummyData.PaymentCard}
                        renderItem={({ item, index }) => (
                            <>
                                {/* {this.setState({
                                    cardIMG: item.image,
                                    cardName: item.card,
                                })} */}
                                <PayCard
                                    id={`PaymentCard-${item.id}`}
                                    image={item.image}
                                    cardName={item.card}
                                    cardNo={item.cardNo}
                                    status={item.status}
                                />
                            </>
                        )}
                    />

                </View>
            )
        }

        const renderUpdate = () => {
            return (
                <View style={[PaymentStyle.center, PaymentStyle.footer]}>
                    <TouchableOpacity
                        style={[PaymentStyle.updateBTN, PaymentStyle.center]}
                        onPress={({ }) => {
                            this.props.navigation.navigate("AddCard", {
                                // data
                                cardIMG: cardIMG,
                                cardName: cardName,
                            })
                        }}>
                        <Text style={[PaymentStyle.btnTXT]}>
                            Add New Card
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={PaymentStyle.mainView}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

                {/* update btn */}
                {renderUpdate()}
            </View>
        )
    }
}
export default Payment;