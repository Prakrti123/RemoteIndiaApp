import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import RepairingStyle from "./RepairingStyle";

class Repairing extends Component {

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
                    title={"Repairing"}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                    rightComponent={icons.Search}
                    morePress={() => { }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={RepairingStyle.content}>

                    <FlatList
                        contentContainerStyle={RepairingStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Repairing}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {

                                        // passing data
                                        service: 'Repairing',
                                        sName: 'Repairing Services',
                                        params: {
                                            title: 'Repairing Services'
                                        },
                                    })
                                }}
                                key={`Repairing-${item.id}`}
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
            <View style={RepairingStyle.mainView}>

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
        <Repairing
            {...props}
            theme={theme}
        />
    )
};