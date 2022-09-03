import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Appearance,
} from "react-native";
import { connect } from "react-redux";
import { toggleTheme } from "../../store/action/action";
import { handleToggle } from "../../store/action/toggleActions";
import { COLORS, icons } from "../../constants";
import HeaderStyle from "./HeaderStyle";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        theme: this.props.theme,
    }

    render() {

        const { theme } = this.state;

        return (
            <View
            style={[HeaderStyle.mainView, {
                backgroundColor: this.props.appThem2?.screen_BG
            }]}
            >

                {/* left header section */}
                <View style={HeaderStyle.leftView}>
                    {/* back btn */}
                    <TouchableOpacity
                        style={[HeaderStyle.center]}
                        onPress={this.props.backPress}
                    >
                        <Image
                            source={this.props.leftComponent}
                            resizeMode={'contain'}
                            style={[HeaderStyle.back, 
                                { tintColor: this.props.backPress ? this.props.appThem2?.backIcon : null }
                            ]}
                        />
                    </TouchableOpacity>

                    {/* title */}
                    <Text 
                    style={[HeaderStyle.title, 
                        { color: this.props.appThem2?.text_Black_White }
                    ]}
                    >
                        {this.props.title}
                    </Text>
                </View>

                {/* more btn */}
                <View style={HeaderStyle.flex}>

                    {this.props.search ?
                        <TouchableOpacity style={[HeaderStyle.center, HeaderStyle.moreBtn]}
                            onPress={this.props.searchPress}>
                            <Image
                                source={this.props.search}
                                resizeMode={'contain'}
                                style={theme === false ?[ HeaderStyle.back, {marginRight: 10,}] : [HeaderStyle.back, { tintColor: COLORS.white, marginRight: 10, }]}
                            />
                        </TouchableOpacity>
                        :
                        <></>
                    }

                    <TouchableOpacity style={[HeaderStyle.center, HeaderStyle.moreBtn]}
                        onPress={() => this.props.morePress}>
                        <Image
                            source={this.props.rightComponent}
                            resizeMode={'contain'}
                            style={[HeaderStyle.back, 
                                { 
                                    tintColor: null
                                }
                            ]}
                        />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}
// export default function (props) {
//     const scheme = Appearance.getColorScheme();
//     const theme = scheme === 'light' ? false : true;

//     return (
//         <Header
//             {...props}
//             theme={theme}
//         />
//     )
// };

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
export default connect(mapStateToProps, mapDispatchProps)(Header);