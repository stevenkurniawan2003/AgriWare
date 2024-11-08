import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const Login = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        Alert.alert('Login successful', `Welcome ${user.email}!`);
        navigation.navigate('Dashboards'); 
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
        Alert.alert('Login failed', errorMessage);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <Image source={require('../assets/biru.jpg')} style={styles.logo} />
        </View>
        <Text style={styles.textLogin}>Login</Text>
        <Text style={{ textAlign: 'center' }}>
          Masukkan Email Dan Password
        </Text>
        <TextInput 
          value={email}
          style={styles.textemail}
          placeholder="Masukkan Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput 
          value={password}
          style={styles.textpw}
          placeholder="Masukkan Password" 
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonlogin} onPress={handleLogin}>
          <Text style={{ color: '#FFFFFF' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'blue'
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'
  },
  textemail: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 5
  },
  textpw: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 5
  },
  buttonlogin: {
    backgroundColor: '#76d1ff',
    marginVertical: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 150
  }
});

export default Login;
