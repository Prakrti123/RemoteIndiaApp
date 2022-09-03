import React, { Component } from "react";
import {
    Appearance,
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Button, Modal } from "native-base";
import { Header, LineBreaker, Option } from "../../components/Index";
import { COLORS, icons, images, FONTS, SIZES } from "../../constants";
import ProfileStyle from "./ProfileStyle/ProfileStyle";
import { toggleTheme } from "../../store/action/action";
import { connect } from "react-redux";
import { handleToggle } from "../../store/action/toggleActions";

class ProfilePage extends Component {

    constructor(props) {
        super(props)
        // PropFunction();
    }

    state = {
        theme: this.props.theme,
        showModal: false,
    }

    render() {

        const {
            theme, showModal
        } = this.state;

        const renderHeader = () => {
            return (
                <View>
                    <Header
                        title={"Profile"}
                        leftComponent={images.LightLOGO}
                        rightComponent={icons.More}
                        morePress={() => { }}
                    />
                </View>
            )
        }

        const renderContent = () => {
            return (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={ProfileStyle.cotent}>

                    {/* Profile View */}
                    <View style={[ProfileStyle.ImageView]}>

                        {/* profile icon */}
                        <Image
                            source={theme === true ? icons.Profile3D : icons.Profile3DGirl}
                            style={ProfileStyle.ImageStyle}
                            resizeMode={'contain'}
                        />

                        <TouchableOpacity style={ProfileStyle.EditBtn}>
                            <Image
                                source={icons.Edit}
                                resizeMode={'contain'}
                                style={ProfileStyle.EditIcon}
                            />
                        </TouchableOpacity>

                        <Text
                            style={[ProfileStyle.Heading,
                            {
                                color: this.props.appThem2?.text_Black_White
                            }
                            ]}>
                            Andrew Ainsley
                        </Text>

                        <Text
                            style={[ProfileStyle.mailText,
                            {
                                color: this.props.appThem2?.text_Black_White
                            }
                            ]}>
                            andrew_ainsley@yourdomain.com
                        </Text>

                    </View>

                    {/* edit profile */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate('EditProfile', {
                                // data
                                fullName: 'Andrew Ainsley',
                                firstName: 'Andrew',
                                date: '12/27/1995',
                                mail: 'andrew_ainsley@yourdomain.com',
                                number: '+91 4455667788',
                                gender: 'Male',
                                address: '267 New Delhi',

                            })
                        }}
                    >
                        <Option
                            title={"Edit Profile"}
                            leftComponent={icons.ProfileLine}
                            rightComponent={icons.arrow}
                        />
                    </TouchableOpacity>

                    {/* notification */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate("Notification", {

                                // data
                                noti: true,
                                sound: true,
                                vibrate: false,
                                Offer: true,
                                promoDiscount: false,
                                payment: true,
                                cashback: false,
                                update: true,
                                AvailableService: false,
                                Tips: false,
                            })
                        }}
                    >
                        <Option
                            title={"Notification"}
                            leftComponent={icons.BellLight}
                            rightComponent={icons.arrow}
                        />
                    </TouchableOpacity>

                    {/* wallet */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate("Wallet")
                        }}
                    >
                        <Option
                            title={"Wallet"}
                            leftComponent={icons.wallet}
                            rightComponent={icons.arrow}
                        />
                    </TouchableOpacity>

                    {/* security */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate('Security')
                        }}
                    >
                        <Option
                            title={"Security"}
                            leftComponent={icons.security}
                            rightComponent={icons.arrow}
                        />
                    </TouchableOpacity>

                    {/* language */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate("Language", {
                                // params
                                language: 'English (US)',
                            });
                        }}
                    >
                        <Option
                            title={"Language"}
                            leftComponent={icons.BellLight}
                            rightComponent={icons.arrow}
                            language={true}
                        />
                    </TouchableOpacity>

                    {/* Dark Mode */}
                    <View
                        style={ProfileStyle.Options}
                    >
                        <Option
                            title={"Dark Moade"}
                            leftComponent={icons.EyeIcon}
                            rightComponent={icons.arrow}
                            mode={true}
                            theme={theme}
                        />
                    </View>

                    {/* Privacy */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate("Privacy", {
                                // params
                            })
                        }}
                    >
                        <Option
                            title={"Privacy Policy"}
                            leftComponent={icons.lock}
                            rightComponent={icons.arrow}
                            onSwitchTheme={() => {
                                console.log('hhhhhh')
                            }}
                        />
                    </TouchableOpacity>

                    {/* help */}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate("Help")
                        }}
                    >
                        <Option
                            title={"Help Center"}
                            leftComponent={icons.help}
                            rightComponent={icons.arrow}
                        />
                    </TouchableOpacity>

                    {/* invite friends*/}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.props.navigation.navigate("InviteFriend", {
                                // parmas

                            })
                        }}
                    >
                        <Option
                            title={"Invite Friends"}
                            leftComponent={icons.people}
                            rightComponent={icons.arrow}
                        />
                    </TouchableOpacity>

                    {/* Logout*/}
                    <TouchableOpacity
                        style={ProfileStyle.Options}
                        onPress={() => {
                            this.setState({
                                showModal: !showModal,
                            })
                        }}
                    >
                        <Option
                            title={"Logout"}
                            leftComponent={icons.exit}
                            rightComponent={icons.arrow}
                            logout={true}
                        />
                    </TouchableOpacity>

                    <>
                        <Modal
                            style={{
                                backgroundColor: this.props.appThem2?.filter_BG,
                            }}
                            isOpen={showModal}
                            onClose={() => this.setState({ showModal: false })}>
                            <Modal.Content minWidth="350px"
                                style={{
                                    paddingHorizontal: -15,
                                    backgroundColor: this.props.appThem2?.card_BG,
                                }}>
                                {/* <Modal.CloseButton /> */}
                                <Modal.Body style={{ alignItems: 'center', backgroundColor: this.props.appThem2?.card_BG, }}>

                                    <View style={{
                                        height: 70,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: this.props.appThem2?.card_BG,
                                    }}>
                                        <Text style={{
                                            ...FONTS.h2_5,
                                            color: this.props.appThem2?.text_Black_White,
                                        }}>
                                            LOGOUT
                                        </Text>

                                        <LineBreaker
                                            color={this.props.appThem2?.lineBreaker}
                                        />
                                    </View>

                                    <Text style={{
                                        ...FONTS.h3,
                                        marginBottom: 30,
                                        color: this.props.appThem2?.text_Gray_Scale
                                    }}>
                                        Are you sure you want to Logout?
                                    </Text>

                                    <LineBreaker
                                        color={this.props.appThem2?.lineBreaker}
                                    />

                                    <View
                                        style={{ 
                                            flexDirection: 'row', 
                                            justifyContent: 'space-between',
                                            marginTop: 30,
                                        }}
                                    >

                                        <Button
                                            style={{
                                                backgroundColor: this.props.appThem2?.transperacy,
                                                width: SIZES.width * 0.4,
                                                borderRadius: 50,
                                            }}
                                            onPress={() => {
                                                this.setState({
                                                    showModal: false
                                                });
                                            }}>
                                            <Text style={{ color: COLORS.purple }}>
                                                cancel
                                            </Text>
                                        </Button>

                                        <Button
                                            style={{
                                                backgroundColor: COLORS.primary,
                                                width: SIZES.width * 0.4,
                                                borderRadius: 50,
                                            }}
                                            onPress={() => {
                                                this.setState({
                                                    showModal: false
                                                });
                                                this.props.navigation.navigate("SignIn")
                                            }}>
                                            <Text style={{ color: COLORS.white }}>
                                                Logout
                                            </Text>
                                        </Button>

                                    </View>
                                </Modal.Body>
                            </Modal.Content>
                        </Modal>
                    </>

                </ScrollView >
            )
        }

        return (
            <View style={
                [ProfileStyle.mainView,
                {
                    // backgroundColor: theme === false ? COLORS.card : COLORS.white
                    backgroundColor: this.props.appThem2?.screen_BG
                }
                ]} >

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}
            </View >
        )
    }
}

// a function to use props

// const PropFunction = (props) => {
//     return (
//         <ProfilePage
//             {...props}
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
export default connect(mapStateToProps, mapDispatchProps)(ProfilePage);