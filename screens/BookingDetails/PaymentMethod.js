import React, { Component } from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { PayCard } from "../../components/Index";
import { dummyData, icons } from "../../constants";
import PayMathodStyle from "./PayMethodStyle";
import { handleToggle } from "../../store/action/toggleActions";
import { connect } from "react-redux";

class PaymentMethod extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        cardIMG: '',
        cardName: '',
        IsSelected: 1,
        paid: '$87.50',
        refund: '$70.00',
    }

    render() {

        const {
            cardIMG, cardName, paid,
            IsSelected, refund
        } = this.state;

        return (
            <View style={[PayMathodStyle.main, {
                backgroundColor: this.props.appThem2?.screen_BG
            }]}>

                {/* text */}
                <Text style={[PayMathodStyle.text, {
                    color: this.props.appThem2?.text_Gray_Scale
                }]}>
                    Please select a payment refund method (only 80% will be refunded!)
                </Text>

                {/* list */}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dummyData.PaymentCard}
                    renderItem={({ item, index }) => (

                        <PayCard
                            id={item.id}
                            key={`PaymentCard-${item.id}`}
                            onPress={() => {
                                this.setState({
                                    IsSelected: item.id,
                                })
                            }}
                            image={item.image}
                            cardName={item.card}
                            cardNo={item.cardNo}
                            Selected={IsSelected === item.id ? icons.Check : icons.UnCheck}
                        />
                    )}
                />

                <View style={PayMathodStyle.bottom}>

                    <View>

                        {/* amount */}
                        <View style={[PayMathodStyle.flex,
                        {
                            justifyContent: 'center',
                            marginBottom: 15,
                        }]}
                        >

                            {/* paid amount */}
                            <Text style={[PayMathodStyle.payTXT, {
                                color: this.props.appThem2?.text_Gray_Scale,
                            }]}>
                                Paid: {paid}
                            </Text>

                            {/* refund amount */}
                            <Text style={[PayMathodStyle.refundTXT, {
                                color: this.props.appThem2?.text_Black_White,
                            }]}>
                                Refund: {refund}
                            </Text>
                        </View>

                        {/* continue btn */}
                        <TouchableOpacity
                            style={[PayMathodStyle.btn, PayMathodStyle.center]}
                            onPress={() => {
                                this.props.navigation.navigate("ReviewScreen");
                            }}
                        >
                            <Text style={[PayMathodStyle.btnTXT]}>
                                Continue
                            </Text>
                        </TouchableOpacity>

                    </View>
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

export default connect(mapStateToProps, mapDispatchProps)(PaymentMethod);