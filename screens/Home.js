import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import WelcomeScreen from './WelcomeScreen';

const HomePetani = ({ navigation }) => {
  
  const handleLogin = () => {
    navigation.navigate('Login'); 
  };
  const handleRegister = () => {
    navigation.navigate('Register'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginRight:320, marginBottom:100 }} onPress={() => navigation.navigate(WelcomeScreen)} >
        <Icon name="arrow-left-long" size={30} />
      </TouchableOpacity>

      <StatusBar barStyle={'dark-content'} backgroundColor={'#ABBA7C'} />
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/logofix.png")}
          style={styles.icon}
        />
      </View>
      
      <Text style={styles.title}>Selamat Datang Di Agriware</Text>
      
      <Text style={styles.subtitle}>
      Akses akun Anda untuk tetap terhubung dan mengelola semuanya dalam satu tempat!
      </Text>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABBA7C',
  },
  iconContainer: {
    marginBottom: 250,
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#3C552D',
    paddingVertical: 12,
    paddingHorizontal: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    borderColor: '#3C552D',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 5,
    marginBottom:50
  },
  signupButtonText: {
    color: '#3C552D',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePetani;
