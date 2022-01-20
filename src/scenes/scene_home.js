import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from "react-native";

// Global Configs
const GLOBAL = require('../configs/config_global');

export class SceneHome extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);
        this.state = {

        };

        console.log('Route', props.route);
    }
    // endregion

    // region Function - Login
    login()
    {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Splash' }]
        });
    }
    // endregion

    // region Main Render Function
    render()
    {
        return(
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    This is Scene Home, welcome back {this.props.route.params?.name || 'No Name'} ({GLOBAL.DATA.USER.email || 'Not Logged In'})
                </Text>

                <Button
                    title="Reset to Splash"
                    onPress={() => this.login()}
                />

                {
                    this.props.navigation.canGoBack() &&
                    <Button
                        title="Go Back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                }
            </View>
        );
    }
    // endregion
}
