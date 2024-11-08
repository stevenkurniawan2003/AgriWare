import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/Login'; 
import RegisterScreen from '../screens/Register'; 
import HomeScreen from '../screens/HomeScreen';
import Dashboards from '../screens/Dashboards';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboards" component={Dashboards}  options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

