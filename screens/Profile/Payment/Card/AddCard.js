import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '../../../../components/Index';
import { COLORS, FONTS, SIZES, icons, images } from '../../../../constants'
import { utils } from "../../../../util";
import AddCardStyle from './AddCardStyle';

class AddCard extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        cardName: 'Visa',
        cardIMG: icons.Visa,

        CardHName: 'Andrew Ainsley',
        CardNo: '2345 6789 9876 5432',
        ExpiryDate: '09/07/2026',
        CVV: '599',
    }

    render() {

        // console.log(this.props.route)

        const {
            cardName, CardNo,
            cardIMG, CardHName, ExpiryDate, CVV
        } = this.state;

        const renderHeader = () => {
            return (
                <View>

                    <Header
                        title={"Add New Card"}
                        leftComponent={icons.BackIcon}
                        rightComponent={icons.More}
                        backPress={() => { }}
                        morePress={() => { }}
                    />
                </View>
            )
        }

        const renderCard = () => {
            return (
                <ImageBackground
                    source={icons.card}
                    resizeMode={'contain'}
                    style={AddCardStyle.card}
                >
                    {/* ist line */}
                    <View style={AddCardStyle.Line1}>

                        <Text style={AddCardStyle.text}>
                            {cardName}
                        </Text>

                        <Image
                            source={cardIMG}
                            resizeMode={'contain'}
                            style={AddCardStyle.cardIcon}
                        />
                    </View>

                    {/* 2nd line */}
                    <View style={AddCardStyle.Line2}>

                        <Text style={AddCardStyle.bigText}>
                            •••• •••• •••• ••••
                        </Text>
                    </View>

                    {/* 2nd line */}
                    <View style={AddCardStyle.Line2}>

                        <View>
                            <Text style={AddCardStyle.smlBlod}>
                                Card Holders Name
                            </Text>

                            <Text style={AddCardStyle.smlText}>
                                {CardHName}
                            </Text>
                        </View>

                        <View>
                            <Text style={AddCardStyle.smlBlod}>
                                Expiry Date
                            </Text>

                            <Text style={AddCardStyle.smlText}>
                                {ExpiryDate}
                            </Text>
                        </View>

                        <View>
                            <Text style={AddCardStyle.smlBlod}>
                                CVV
                            </Text>

                            <Text style={AddCardStyle.smlText}>
                                {CVV}
                            </Text>
                        </View>

                    </View>
                </ImageBackground>
            )
        }

        const renderInputSection = () => {
            return (
                <View style={AddCardStyle.InputSection}>

                    {/* card Name  */}
                    <>
                        {/* c H Name */}
                        <Text style={[AddCardStyle.title, { color: COLORS.black }]}>
                            Card Holder's Name
                        </Text>

                        <View style={AddCardStyle.inputView}>

                            <TextInput
                                placeholder='Card Holders Name'
                                placeholderTextColor={COLORS.gray}
                                value={CardHName}
                                onChange={(text) => {
                                    this.setState({
                                        CardHName: text
                                    })
                                }}
                            />

                        </View>
                    </>

                    {/* card num */}
                    <>
                        {/* card No */}
                        <Text style={[AddCardStyle.title, { color: COLORS.black }]}>
                            Card Number
                        </Text>

                        <View style={AddCardStyle.inputView}>

                            <TextInput
                                placeholder='Card Number'
                                placeholderTextColor={COLORS.gray}
                                value={CardNo}
                                onChange={(text) => {
                                    this.setState({
                                        CardNo: text
                                    })
                                }}
                            />

                        </View>
                    </>

                    <View style={AddCardStyle.Line1}>

                        {/* expiry date */}
                        <View>

                            {/* Expiry Date */}
                            <Text style={[AddCardStyle.title, { color: COLORS.black }]}>
                                Expiry Date
                            </Text>

                            <View style={AddCardStyle.halfView}>

                                <TextInput
                                    placeholder='Expiry Date'
                                    placeholderTextColor={COLORS.gray}
                                    value={ExpiryDate}
                                    onChange={(text) => {
                                        this.setState({
                                            ExpiryDate: text
                                        })
                                    }}
                                />

                                <TouchableOpacity>
                                    <Image
                                    source={icons.Planner}
                                    resizeMode={'contain'}
                                    style={AddCardStyle.calender}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View>

                            {/* CVV */}
                            <Text style={[AddCardStyle.title, { color: COLORS.black }]}>
                                CVV
                            </Text>

                            <View style={AddCardStyle.halfView}>

                                <TextInput
                                    placeholder='CVV'
                                    placeholderTextColor={COLORS.gray}
                                    value={CVV}
                                    onChange={(text) => {
                                        this.setState({
                                            CVV: text
                                        })
                                    }}
                                />

                            </View>
                        </View>

                    </View>

                </View>
            )
        }

        const renderBTN = () => {
            return (
                <View style={[AddCardStyle.center, AddCardStyle.footer]}>
                    
                    <TouchableOpacity 
                    style={[AddCardStyle.updateBTN, AddCardStyle.center]}
                    onPress={({}) => {this.props.navigation.navigate("EReceipt")}}>
                        <Text style={[AddCardStyle.btnTXT]}>
                            Add New Card
                        </Text>
                    </TouchableOpacity>

                </View>
            )
        }

        return (
            <KeyboardAwareScrollView
                style={AddCardStyle.mainView}>

                {/* header */}
                {renderHeader()}

                {/* card */}
                {renderCard()}

                {/* input */}
                {renderInputSection()}

                {/* add btn */}
                {renderBTN()}

            </KeyboardAwareScrollView>
        )

    }
}

export default AddCard;