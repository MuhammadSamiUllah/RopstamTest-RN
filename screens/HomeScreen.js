import { Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      LogOUt: 'null',
      userEmail: '@Email'
    }
  }
  ShowApiData = ({ item }) => {
    return (
      <View style={{ marginLeft: 2, height: 170, width: 350, elevation: 5, marginTop: 29, borderRadius: 3, backgroundColor: '#27AE60' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center' }}>

          <Text style={{ color: 'white', fontSize: 20 }}>{item.id}</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>{item.title}</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>{item.body}</Text>

        </View>

      </View>

    )
  }
  componentDidMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/Posts');
      const json = await response.json();
      this.setState({ apiData: json });

    } catch (error) {
      console.log(error);
    }
  }
  LogOut = async () => {
    try {
      await AsyncStorage.setItem('@Email', this.state.LogOUt)
      this.props.navigation.navigate('LogInScreen')
    }
    catch (error) {
      console.log(error)
    }

  }
  render() {
    return (
      <View>
       
        
          <TouchableOpacity style={{backgroundColor:'#27AE60',elevation:5,width:160,
          height:40,borderRadius:5,marginLeft:90,marginTop:10}} onPress={() => {
            this.LogOut()
          }} >
            <Text style={{color:'white',marginLeft:60,marginTop:10}}>Log out</Text>
          </TouchableOpacity>
        <FlatList


          data={this.state.apiData}
          renderItem={this.ShowApiData}
          keyExtractor={(item) => item.id}

        />
      </View>
    )
  }
}