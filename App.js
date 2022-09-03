import React, { Component } from 'react';
import {
    Appearance,
    StatusBar,
} from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
    useTheme
} from '@react-navigation/native';
import { COLORS } from './constants';
import Root from './Root/Root';
import store from "./store/index";
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

class App extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        // Scheme: '',
    }

    componentDidMount() {
        (async () => {
            
        })();
    }

    render() {

        return (
            <Provider store={store}>
                <NativeBaseProvider>
                    <NavigationContainer
                        theme={DefaultTheme}
                    >
                        <StatusBar backgroundColor={COLORS.darkGray} />
                        <Root />
                    </NavigationContainer>
                </NativeBaseProvider>
            </Provider>
        )
    }
}
export default App;