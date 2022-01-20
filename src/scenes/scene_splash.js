import React, { Component } from 'react';
import {
    View,
    Text
} from "react-native";

// Global Configs
const GLOBAL = require('../configs/config_global');

export class SceneSplash extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);
        this.state = {
            remainingTime: 5
        };

        // Timer
        this.timer = null;
    }
    // endregion

    // region Component Mounting
    componentDidMount()
    {
        this.timer = setInterval(() => {
            if (this.state.remainingTime > 0)
            {
                this.setState({ remainingTime: this.state.remainingTime - 1 });
            }
            else
            {
                clearInterval(this.timer);
                this.props.navigation.replace('Login');
            }
        }, 1000);
    }
    // endregion

    // region Main Render Function
    render()
    {
        return(
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    This is Scene Splash
                </Text>

                <Text style={{ marginTop: 24, fontWeight: 'bold' }}>
                    Going to Login screen in {this.state.remainingTime} second{this.state.remainingTime > 1 ? 's' : ''}
                </Text>
            </View>
        );
    }
    // endregion
}
