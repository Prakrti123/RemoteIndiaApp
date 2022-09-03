import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import ShiftingStyle from "./ShiftingStyle";


class Shifting extends Component {

    constructor(props) {
        super(props)
    }
    Shifting
    state = {
        theme: this.props.theme,
        BookMark: false,
    }

    render() {

        const {
            theme, BookMark
        } = this.state;

        const renderHeader = () => {
            return (
                <Header
                    title={"Shifting"}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                    rightComponent={icons.Search}
                    morePress={() => { }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={ShiftingStyle.content}>

                    <FlatList
                        contentContainerStyle={ShiftingStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Shifting}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {

                                        // passing data
                                        service: 'Shifting',
                                        sName: 'House Shifting',
                                        params: {
                                            title: 'House Shifting'
                                        },
                                    })
                                }}
                                key={`Shifting-${item.id}`}
                                id={item.id}
                                item={item}
                                saved={BookMark}
                                theme={theme}
                            />
                        )}
                    />
                </View>
            )
        }

        return (
            <View style={ShiftingStyle.mainView}>

                {/* header */}
                {renderHeader()}

                {/* content */}
                {renderContent()}

            </View>
        )
    }
}
export default function (props) {

    const scheme = Appearance.getColorScheme();
    const theme = scheme === 'light' ? false : true;

    return (
        <Shifting
            {...props}
            theme={theme}
        />
    )
};