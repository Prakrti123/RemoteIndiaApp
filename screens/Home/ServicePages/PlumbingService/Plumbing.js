import React, { Component } from "react";
import { Appearance, FlatList, View } from "react-native";
import { Header, ServiceVertical } from "../../../../components/Index";
import { dummyData, icons } from "../../../../constants";
import PlumbingStyle from "./PlumbingStyle";


class Plumbing extends Component {

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
                    title={"Plumbing"}
                    leftComponent={icons.BackIcon}
                    backPress={() => { this.props.navigation.goBack() }}
                    rightComponent={icons.Search}
                    morePress={() => { }}
                />
            )
        }

        const renderContent = () => {
            return (
                <View style={PlumbingStyle.content}>

                    <FlatList
                        contentContainerStyle={PlumbingStyle.list}
                        showsVerticalScrollIndicator={false}
                        data={dummyData.Plumbing}
                        renderItem={({ item, index }) => (
                            <ServiceVertical
                                onPress={() => {
                                    this.props.navigation.navigate("ServiceDetails", {
                                        service: 'Plumbing',
                                        sName: 'Plumbing Services',
                                        params: {
                                            title: 'Plumbing Services'
                                        },
                                    })
                                }}
                                key={`Plumbing-${item.id}`}
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
            <View style={PlumbingStyle.mainView}>

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
        <Plumbing
            {...props}
            theme={theme}
        />
    )
};