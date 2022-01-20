import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput
} from "react-native";

// Global Configs
const GLOBAL = require('../configs/config_global');

export class SceneLogin extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    // endregion

    // region Function - Login
    login()
    {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
        });
    }
    // endregion

    // region Main Render Function
    render()
    {
        return(
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
                <Text>
                    This is Scene Login
                </Text>

                {/* Text Input */}
                <View style={{ marginVertical: 24, alignItems: 'flex-start', alignSelf: 'stretch' }}>
                    <TextInput
                        style={{ height: 48, alignSelf: 'stretch' }}
                        onChangeText={(text) => {
                            this.setState({ email: text });
                            GLOBAL.DATA.USER.email = text;
                        }}
                        value={this.state.email?.toLowerCase()}
                        placeholder="Email Address"
                        placeholderTextColor={'gray'}
                        onSubmitEditing={() => this.txtPassword.focus()}
                    />

                    <TextInput
                        ref={(comp) => this.txtPassword = comp}
                        style={{ height: 48, alignSelf: 'stretch' }}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        secureTextEntry={true}
                        onSubmitEditing={() => this.login()}
                    />
                </View>

                {/* Buttons */}
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Button
                        title="Go to Home with login info"
                        onPress={() => this.login()}
                    />

                    <Button
                        title="Go to Home without logging in"
                        onPress={() => this.props.navigation.navigate('Home', { name: 'Phat' })}
                    />
                </View>
            </View>
        );
    }
    // endregion
}
