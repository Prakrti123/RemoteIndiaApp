import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import PaintingStyle from "./PaintingStyle";


class Painting extends Component {

    constructor(props) {
        super(props)
    }

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
                    title={"Painting"}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                    rightComponent={icons.Search}
                    morePress={() => { }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={PaintingStyle.content}>

                    <FlatList
                        contentContainerStyle={PaintingStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Painting}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {
                                        service: 'Painting',
                                        sName: 'House Painting',
                                        params: {
                                            title: 'House Painting'
                                        },
                                    })
                                }}
                                key={`Painting-${item.id}`}
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
            <View style={PaintingStyle.mainView}>

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
        <Painting
            {...props}
            theme={theme}
        />
    )
};