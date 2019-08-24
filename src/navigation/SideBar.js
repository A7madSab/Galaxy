import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

class SideBar extends React.Component {
    state = {
        currentPage: '',
    }

    render() {
        return (
            <View>
                <Text>CheckinScreen</Text>
                <Button title="Open Sidebar" onPress={() => props.navigation.openDrawer()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default SideBar