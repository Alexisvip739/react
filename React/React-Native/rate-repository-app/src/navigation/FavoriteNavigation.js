import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorite from '../screens/Favorite';
import PokemonScreen from '../screens/Pokemon'

const Stack=createStackNavigator();

export default function FavoriteNavigation() {
  return (
        <Stack.Navigator>
            <Stack.Screen name='Favorites' component={Favorite} options={{title:"Favoritos"}}/>
            <Stack.Screen
                name="Pokemon"
                component={PokemonScreen}
                options={{
                title: "",
                headerTransparent: true,
                }}
            />       
       </Stack.Navigator>
    )
}