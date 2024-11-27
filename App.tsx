import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/splashScreen';
import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';
import { RootStackParamList } from './types'; // Import the navigation types
import Toast from 'react-native-toast-message';
const Stack = createStackNavigator<RootStackParamList>(); // Use the RootStackParamList

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Optional: Hide the header for Splash
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} // Optional: Set a custom title for SignUp
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Log In' }} // Optional: Set a custom title for Login
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
