import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import Banner from './src/Banner'
import Reward from './src/Reward'
import Inters from './src/Inters'
import AppOpen from './src/AppOpen'
import RewardInters from './src/RewardInters'

export default function App() {
  const Stack = createNativeStackNavigator()
  
  
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen
            name='Home'
            component={Home}
         />
         <Stack.Screen
            name='BannerAd'
            component={Banner}
         />
         <Stack.Screen
            name='RewardAd'
            component={Reward}
         />
         <Stack.Screen
            name='IntersAd'
            component={Inters}
         />
         <Stack.Screen
            name='AppOpenAd'
            component={AppOpen}
         />
         <Stack.Screen
            name='RewardInterstial'
            component={RewardInters}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
