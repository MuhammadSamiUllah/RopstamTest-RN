import { Button, Text, View ,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class LogInScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      device_token:'',
      navigationBetweenScreens:false
    }
  }
 LogIn = async() =>{
  
  if(this.state.email == 'hassan.zafar@ropstam.com' ){
    if(this.state.password == '12345678'){
        try {
          await AsyncStorage.setItem('@Email',this.state.email)
          await AsyncStorage.setItem('@password',this.state.password)
          await fetch('http://buddy.ropstambpo.com/api/login',{
            method:'post',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              email:this.state.email,
              password:this.state.password,
              device_token:"zasdcvgtghnkiuhgfde345tewasdfghjkm"
            })
          }).then(res=>res.json())
          .then((res)=>{
            console.log(res.data.user);
            this.props.navigation.navigate('HomeScreen')
          })
          .catch((err)=>{
            console.log(err);
          })
        } catch (error) {
          console.log('error',error)
          console.log(error)
        }
      
    }
  }
 
  //  this.props.navigation.navigate('SecondScreen')
 }
 componentDidMount = async() =>{
  
  try{
    await AsyncStorage.getItem('@Email')
    .then(value=>{
        if(value != 'null'){
            this.props.navigation.navigate('HomeScreen')
            
        }
        console.log('value==>>',value)
    })
    }
    catch(error){
    console .log(error)
    }
 }
    render() {
    return (
      <View style={{justifyContent:'center'}}>
        <View>
          <Text style={{fontWeight:'bold',fontSize:31,marginTop:120,marginLeft:110}}>Hello Again!</Text>
          <Text style={{fontSize:20,marginLeft:110}}>Chance to get your </Text>
          <Text style={{fontSize:20,marginLeft:150}}>life better</Text>
        </View>
        <View style={{marginTop:30}}>
        <TextInput  placeholder='Enter Email' onChangeText={email => this.setState({ email })} style={styles.InputField}/>
        <TextInput placeholder=' Password' onChangeText={password => this.setState({ password })} style={styles.InputField}/>
        
        <TouchableOpacity style={styles.LogIn} onPress={()=>{this.LogIn()}}>
<Text style={{justifyContent:'center',alignContent:'center',alignSelf:'center',fontWeight:'bold',color:'white'}}>Log In</Text>
        </TouchableOpacity>
        </View>
        <View>
          <Text style={{marginLeft:100,marginTop:40}}>Not a member ?</Text>
          <TouchableOpacity ><Text style={styles.registerNow}>Register Now</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
LogIn:{
  marginLeft:70,justifyContent:'center',marginTop:20,borderRadius:5,elevation:5,
  backgroundColor:'#27AE60',height:50,width:240
},
registerNow:{
  color:'#27AE60',
  marginLeft:190,marginTop:-15
},
InputField:{
borderWidth:1,
width:240,borderRadius:5,elevation:2,borderColor:'white',
marginLeft:70,marginTop:17

}
})