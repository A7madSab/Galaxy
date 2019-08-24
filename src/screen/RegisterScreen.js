import React, { Component } from 'react'
import { Text, View, Button } from "react-native"

export default class RegisterScreen extends Component {
    render() {
        return (
            <View>
                <Text> RegisterScreen </Text>
                <Button title="Register" onPress={() => this.props.navigation.navigate("Application")} />
            </View>
        )
    }
}