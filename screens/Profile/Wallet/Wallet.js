import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Header } from "../../../components/Index";
import { icons } from "../../../constants";
import { handleToggle } from "../../../store/action/toggleActions";

class Wallet extends Component {

    constructor(props) {
        super(props)
    }

    state = {

    }

    render() {

        const {

        } = this.state;

        const renderHeader = () => {
            return(
                <Header
                title={"Wallet"}
                leftComponent={icons.BackIcon}
                backPress={() => {
                    this.props.navigation.goBack();
                }}
                />
            )
        }

        return (
            <View style={{
                flex: 1,
                backgroundColor: this.props.appThem2?.screen_BG,
            }}>

                {/* header */}
                {renderHeader()}

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
    handleToggle,
}

export default connect(mapStateToProps, mapDispatchProps)(Wallet);