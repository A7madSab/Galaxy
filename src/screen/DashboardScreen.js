import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from "react-native"
import { Card } from "react-native-elements"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class DashboardScreen extends Component {
    state = {
        screenWidth: 0,
        screenWidth: 0
    }


    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.SummaryCards}>
                    <Card containerStyle={styles.paddingZero} style={styles.Card}>
                        <View>
                            <Text>
                                officia esse est  consectetur id ut eu aute fugiat.
                            </Text>
                        </View>
                    </Card>
                    <Card containerStyle={styles.paddingZero} style={styles.Card}><Text>dipisicing voluptate mollit deserunt  consequat est.</Text></Card>
                    <Card containerStyle={styles.paddingZero} style={styles.Card}><Text>m qui ullamco ut aute.</Text></Card>
                </View>
                <Card>
                </Card>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {

    },
    SummaryCards: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"

    },
    Card: {
        // flexWrap: "wrap",
        // width: wp('30%'),
        // height: hp('50%')
    },
    paddingZero: {
        // padding: 0,
    }
})

export default DashboardScreen;