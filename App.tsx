import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/splashScreen';
import SignUpScreen from './Screens/SignUpScreen';
import { RootStackParamList } from './types'; // Import the navigation types

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
