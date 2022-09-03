import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Modal,
    FlatList,
    Appearance,
    TouchableOpacity,
} from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from '../../constants';
import { SeriveHorizontal, LineBreaker, TwoPointSlider } from '../Index';
import FilterModalStyle from './FilterModalStyle';
import { connect } from 'react-redux';
import { handleToggle } from '../../store/action/toggleActions';

const FilterModal = ({ isVisible, onClose, appThem2 }) => {
    const navigation = useNavigation();
    const scheme = Appearance.getColorScheme()
    const theme = scheme === 'light' ? false : true;
    const ModalAnimatedValue = useRef(new Animated.Value(0)).current;
    const [showFilterModal, setShowFilterModal] = React.useState(isVisible);
    const [IsServiceSelected, setIsServiceSelected] = useState(1);
    const [IsRatingSelected, setIsRatingSelected] = useState(1);

    useEffect(() => {
        if (showFilterModal) {
            Animated.timing(ModalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(ModalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start(() => onClose());
        }
    }, [showFilterModal]);

    const modalY = ModalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 600],
    });

    function renderHeader() {
        return (
            <View style={FilterModalStyle.header}>
                <Text style={[FilterModalStyle.heading, {
                    color: appThem2?.text_Black_White
                }]}>Filter</Text>
            </View>
        );
    }

    function renderLinebraker() {
        return <LineBreaker color={appThem2?.lineBreaker} />;
    }

    function renderCategory() {
        return (
            <View style={FilterModalStyle.category}>
                <Text style={[FilterModalStyle.subheading, {
                    color: appThem2?.text_Black_White
                }]}>Category</Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.popular}
                    renderItem={({ item, index }) => (
                        <SeriveHorizontal
                            onPress={() => {
                                setIsServiceSelected(item.id)
                            }}
                            key={`popular-${item.id}`}
                            id={item.id}
                            title={item.title}
                            text={appThem2?.option_Text}
                            Selected={IsServiceSelected}
                            // UnSelected={}
                            colorBg={appThem2?.option_BG}
                            border={appThem2?.option_Border}
                        />
                    )}
                />
            </View>
        );
    }

    function renderPrice() {
        return (
            <View style={FilterModalStyle.PriceView}>

                <Text style={[FilterModalStyle.subheading, {
                    color: appThem2?.text_Black_White,
                }]}>Price</Text>

                <TwoPointSlider
                    values={[40, 80]}
                    min={20}
                    max={100}
                    prefix="₹"
                    onValueChange={(values) => console.log(values)}
                    selectedStyle={{
                        // color: this.props.appThem2?.text_Black_White,
                    }}
                />
            </View>
        )
    }

    function renderRating() {
        return (
            <View style={FilterModalStyle.Rating}>
                <Text style={[FilterModalStyle.subheading, {
                    color: appThem2?.text_Black_White,
                }]}>Rating</Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.Rating}
                    renderItem={({ item, index }) => (
                        <SeriveHorizontal
                            onPress={() => {
                                setIsRatingSelected(item.id)
                            }}
                            key={`Rating-${item.id}`}
                            Selected={IsRatingSelected}
                            id={item.id}
                            star={icons.Star}
                            title={item.star}
                            text={appThem2?.option_Text}
                            colorBg={appThem2?.option_BG}
                            border={appThem2?.option_Border}
                        />
                    )}
                />

            </View>
        )
    }

    function renderFooter() {
        return (
            <View style={FilterModalStyle.Bottom}>

                <TouchableOpacity
                    style={[FilterModalStyle.Button, {
                        backgroundColor: appThem2?.lightButton_BG,
                    }]}
                >
                    <Text style={[FilterModalStyle.BtnText, {
                        color: appThem2.text_Black_White,
                    }]}>
                        Reset
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[FilterModalStyle.Button, {
                        backgroundColor: COLORS.purple,
                    }
                    ]}
                >
                    <Text style={
                        [FilterModalStyle.BtnText,{
                            color: COLORS.white
                        }]
                    }>
                        Filter
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <View style={[FilterModalStyle.main]}>

                {/* transparent bg */}
                <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
                    <View style={FilterModalStyle.closeModal}></View>
                </TouchableWithoutFeedback>

                <Animated.View style={[FilterModalStyle.content, {
                    top: modalY,
                    backgroundColor: appThem2?.filter_BG
                }]}>
                    {/* header */}
                    {renderHeader()}

                    {/* LineBreaker */}
                    {renderLinebraker()}

                    {/* scrollView */}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterModalStyle.scrollView}>

                        {/* Category */}
                        {renderCategory()}

                        {/* Price */}
                        {renderPrice()}

                        {/* rating */}
                        {renderRating()}

                        {/* bottom btn */}
                        {renderFooter()}

                    </ScrollView>
                </Animated.View>
            </View>
        </Modal>
    );
};

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
export default connect(mapStateToProps, mapDispatchProps)(FilterModal);