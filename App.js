import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Index from './Navigation';
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index/>
      </NavigationContainer>
    )
  }
}