import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import ApplianceStyle from "./ApplianceStyle";


class Appliance extends Component {

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
                    title={"Appliance"}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                    rightComponent={icons.Search}
                    morePress={() => { }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={ApplianceStyle.content}>

                    <FlatList
                        contentContainerStyle={ApplianceStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Appliance}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {
                                        service: 'Appliance',
                                        sName: 'Appliance Service',
                                        params: {
                                            title: 'Appliance Service'
                                        },
                                    })
                                }}
                                key={`Appliance-${item.id}`}
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
            <View style={ApplianceStyle.mainView}>

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
        <Appliance
            {...props}
            theme={theme}
        />
    )
};