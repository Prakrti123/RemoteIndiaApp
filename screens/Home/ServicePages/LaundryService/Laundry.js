import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import LaundryStyle from "./LaundryStyle";


class Laundry extends Component {

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
                    title={"Laundry"}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                    rightComponent={icons.Search}
                    morePress={() => { }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={LaundryStyle.content}>

                    <FlatList
                        contentContainerStyle={LaundryStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Laundry}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {
                                        service: 'Laundry',
                                        sName: 'Laundry Services',
                                        params: {
                                            title: 'Laundry Services'
                                        },
                                    })
                                }}
                                key={`Laundry-${item.id}`}
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
            <View style={LaundryStyle.mainView}>

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
        <Laundry
            {...props}
            theme={theme}
        />
    )
};