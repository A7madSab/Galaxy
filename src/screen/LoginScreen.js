import React, { Component } from 'react'
import { Text, View, Button } from "react-native"

export default class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text> LoginScreen </Text>
                <Button title="Login" onPress={() => this.props.navigation.navigate("Application")} />
            </View>
        )
    }
}

