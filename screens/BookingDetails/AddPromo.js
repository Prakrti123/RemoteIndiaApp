import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Footer, NotiComponent, Promo } from "../../components/Index";
import { COLORS, dummyData, SIZES } from "../../constants";
import AddPromoStyle from "./AddPromoStyle";
import { handleToggle } from "../../store/action/toggleActions";
import { connect } from "react-redux";

class AddPromo extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        IsPromoSelected: '',
        Promo: '',
    }

    componentDidMount() {
        // console.log("theme", this.props.a)
    }

    render() {

        const {
            IsPromoSelected,
        } = this.state;

        const renderList = () => {
            return (
                <FlatList
                    scrollEnabled
                    contentContainerStyle={[AddPromoStyle.content]}
                    data={dummyData.Offer}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Promo
                            onPress={() => {
                                this.setState({
                                    IsPromoSelected: item.id,
                                    Promo: JSON.stringify(item.code),
                                })
                            }}
                            icon={item.icon}
                            circle={item.circle}
                            bg={item.imageBg}
                            star={item.star}
                            color={item.color}
                            title={item.title}
                            subTitle={item.subTitle}
                            Selected={IsPromoSelected === item.id ? true : false}

                        />
                    )}
                />
            )
        }

        return (
            <View
                style={[AddPromoStyle.main, {
                    backgroundColor: this.props.appThem2?.screen_BG
                }]}
            >
                {/* render promo */}
                {renderList()}

                <Footer
                    height={SIZES.height * 0.15}
                    ButtonText={'Add Promo'}
                    onPress={() => {
                        this.props.navigation.navigate("BookingDetail", {
                            // params
                            Promo: Promo,
                        })
                    }}
                />

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

export default connect(mapStateToProps, mapDispatchProps)(AddPromo);