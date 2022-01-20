/*
    Created by Phat Pham
    phphat1996@gmail.com
*/

import React, { Component } from 'react';
import {
    UIManager,
    Platform,
    View,
    StatusBar
} from "react-native";
import { setCustomTextInput, setCustomText } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Utils
import { getFontName } from "./utils/util_font_helper";

// Scene Imports
import {
    SceneHome,
    SceneSplash,
    SceneLogin
} from './scenes';

// Global Configs
const GLOBAL = require('./configs/config_global');

// Navigator
const Stack = createNativeStackNavigator();

class App extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);

        // Enable LayoutAnimation on Android
        if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental)
        {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        // State
        this.state = {

        };
    }
    // endregion

    // region Component Mounting
    componentDidMount()
    {
        GLOBAL.SCENES.MAIN = this;

        // Start all config functions
        this.startAllConfigs();
    }

    componentWillUnmount()
    {
        GLOBAL.SCENES.MAIN = null;
    }
    // endregion

    // region CONFIGS

    startAllConfigs()
    {
        this.configTextProps();
    }

    // region Config - Config Global Text Props
    configTextProps()
    {
        const customTextProps = {
            allowFontScaling: false,
            style: {
                fontSize: 14,
                // fontFamily: getFontName('normal', 'normal'),
                color: GLOBAL.COLOR.BASIC.BLACK_TWO
            }
        };

        setCustomTextInput(customTextProps);
        setCustomText(customTextProps);
    }
    // endregion

    // endregion

    // region Main Render Function
    render()
    {
        return(
            <View style={{ flex: 1 }}>
                {/* Status Bar Config */}
                <StatusBar barStyle={'dark-content'}/>

                {/* Screen Stack */}
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Splash">
                        <Stack.Screen name="Splash" component={SceneSplash} />
                        <Stack.Screen name="Login" component={SceneLogin} />
                        <Stack.Screen name="Home" component={SceneHome} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
    // endregion
}

export default App;
