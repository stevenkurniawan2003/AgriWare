import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'
import Login from '../screens/Login'; 
import Register from '../screens/Register'; 
import Home from '../screens/Home';
import DashboardsPetani from '../petani/DashboardsPetani';
import DashboardsCust from '../customer/DashboardsCustomer';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/>
        <Stack.Screen name="DashboardsPetani" component={DashboardsPetani}  options={{ headerShown: false }}/>
        <Stack.Screen name="DashboardsCust" component={DashboardsCust}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

