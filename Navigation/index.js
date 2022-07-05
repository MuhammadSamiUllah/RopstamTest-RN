import { Text, View } from 'react-native'
import React, { Component } from 'react'
import LogInScreen from '../screens/logInScreen';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
export default class Index extends Component {
  render() {
    return (
      <Stack.Navigator>
         <Stack.Screen name='LogInScreen' component={LogInScreen}options={{headerShown: false}}/>
         <Stack.Screen name='HomeScreen' component={HomeScreen} />
       
        
        
      </Stack.Navigator>
    )
  }
}