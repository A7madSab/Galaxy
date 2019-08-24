import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation"
import { RegisterScreen, LoginScreen, CheckInScreen, DashboardScreen, InvoicesScreen, CustomersScreen } from "../screen/index"
import React from 'react'
import { Text, View } from "react-native"
import { Icon } from 'react-native-elements'

const AuthStack = createMaterialTopTabNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
})

const DashboardStackNavigation = createStackNavigator({
    Dashboard: {
        screen: DashboardScreen,
        path: 'Dashboard',
        navigationOptions: {
            headerTitle: (
                <View>
                    <Text> Dashboard </Text>
                </View>
            )
        },
    },
}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                )
            }
        }
    })

const CheckInStackNavigation = createStackNavigator({
    CheckIn: {
        screen: CheckInScreen,
        path: 'CheckInScreen',
        navigationOptions: {
            headerTitle: (
                <View>
                    <Text> CheckIn </Text>
                </View>
            )
        },
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                )
            }
        }
    }
)

const InvoicesStackNavigation = createStackNavigator({
    CheckIn: {
        screen: InvoicesScreen,
        path: 'Invoices',
        navigationOptions: {
            headerTitle: (
                <View>
                    <Text> Invoices </Text>
                </View>
            )
        },
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                )
            }
        }
    }
)

const CustomersStackScreenNavigation = createStackNavigator({
    CheckIn: {
        screen: CustomersScreen,
        path: 'Customers',
        navigationOptions: {
            headerTitle: (
                <View>
                    <Text> Customers </Text>
                </View>
            )
        },
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                )
            }
        }
    }
)

const AppStack = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigation
    },
    CheckIn: {
        screen: CheckInStackNavigation
    },
    Invoices: {
        screen: InvoicesStackNavigation
    },
    Customers: {
        screen: CustomersStackScreenNavigation
    }
})

const AppSwitchNavigator = createSwitchNavigator({
    Authentication: {
        screen: AuthStack
    },
    Application: {
        screen: AppStack
    }
})

// {
//     hideStatusBar: false,
//     drawerBackgroundColor: 'rgba(255,255,255,.9)',
//     overlayColor: '#6b52ae',
//     contentOptions: {
//         activeTintColor: '#fff',
//         a   ctiveBackgroundColor: '#6b52ae',
//     }
// }
export default createAppContainer(AppSwitchNavigator)