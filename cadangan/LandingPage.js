import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native'

const LandingPage = ({ navigation }) => {
  const handlePetani = () => {
    navigation.navigate('HomeScreen');
  };
  const handleUser = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#2B65EC'}/>
      <ScrollView>
        <View style={{ marginTop:20,justifyContent:'center',alignItems:'center' }} >
          <Text style={{ fontSize:30,fontWeight:'bold' }} >LandingPage</Text>
        </View>
        <View>
          <Image source={require('../assets/bgpetani.jpg')} style={styles.logo}/>
        </View>
          <TouchableOpacity style={styles.buttonpetani} onPress={handlePetani} >
            <Text 
            style={{ 
              fontWeight:'bold',
              fontSize:20,
              color:'white' 
              }}>Petani</Text>
          </TouchableOpacity>
          <View style={{ alignItems:'center' }}>
            <Text>------OR------</Text>
          </View>
          <TouchableOpacity style={styles.buttonuser} onPress={handleUser} >
            <Text style={{ 
              fontWeight:'bold',
              fontSize:20,
              color:'white' 
              }}>User</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2B65EC'
  },
  logo: {
    width: 350,
    height: 550,
    borderRadius:10,
    marginTop:20,
    marginHorizontal:20,
    borderWidth: 2,
    elevation:3,
    opacity:0.8
  },
  buttonpetani:{
    backgroundColor: '#151B54',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:20
  },
  buttonuser:{
     backgroundColor: '#151B54',
     alignItems:'center',
     justifyContent:'center',
     paddingVertical:10,
     marginHorizontal:20,
     borderRadius:20
  }
})