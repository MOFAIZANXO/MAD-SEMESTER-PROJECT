import React from 'react';
import { View, StyleSheet, Button, Text ,TouchableOpacity, Image,} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; // Import navigation types
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import SplashStyles from '../StyleSheets/SplashStyles';
// Define the type for navigation prop
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {

  const navigation = useNavigation<SplashScreenNavigationProp>(); // Use the typed navigation

  const navigateToLogin = () => {
    navigation.navigate('Login'); // Navigate to the SignUp screen
  };

  return (
    <View style={SplashStyles.container}>
        <Image 
      source={require('../assets/images/WhiteMMP.png')}
  style={SplashStyles.logo} 
/>

      <Text style={SplashStyles.text}>Welcome to Manage My Property</Text>
      <TouchableOpacity style={SplashStyles.button} onPress={navigateToLogin}>
        <Text style={SplashStyles.buttonText}>Proceed To MMP</Text>
      </TouchableOpacity>
    </View>
  );
};


export default SplashScreen;
