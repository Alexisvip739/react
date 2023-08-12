import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';

const Stack=createStackNavigator();

export default function AccountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Account' component={Account} options={{title:"Account"}}/>
        </Stack.Navigator>
    )
}