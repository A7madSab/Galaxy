import React from 'react'
import { Text, View, Button } from "react-native"

export default function WelcomeScreen(props) {
    return (
        <View>
            <Text>Welcome to the welcome screen</Text>
            <Button title="Login" onPress={props.navigation.navigate("Login")} />
            <Button title="Register" onPress={props.navigation.navigate("Register")} />
        </View>
    )
}

