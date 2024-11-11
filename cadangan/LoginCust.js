import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,StatusBar,Alert,ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const LoginPetani = () => {
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
        navigation.navigate('DashboardsCust'); 
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
        Alert.alert('Login failed', errorMessage);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
    <StatusBar backgroundColor={'#B99B6B'} barStyle={'light-content'}/>
      <View style={styles.iconContainer}>
        <Image 
          source={require('../assets/logofix.png')}
          style={styles.icon}
        />
      </View>

      <Text style={styles.title}>WELCOME BACK, CUSTOMER</Text>
      
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
    
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Password" 
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterCust')} style={{ marginBottom:120 }} >
        <Text style={styles.signupText}>
            Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>  
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B99B6B',
  },
  iconContainer: {
    marginBottom: 60,
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#3C552D',
    paddingVertical: 12,
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 14,
  },
  signupLink: {
    color: '#3C552D',
    fontWeight: 'bold',
  },
});

export default LoginPetani;

