import React from 'react';
import { View, StyleSheet, Button, Text ,TouchableOpacity, Image,} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; // Import navigation types
import { useNavigation } from '@react-navigation/native';

// Define the type for navigation prop
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>(); // Use the typed navigation

  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };

  return (
    <View style={styles.container}>
       <Image 
 // style={styles.logo} 
  //source={require('./assets/MMP LOGO.png')} 
/>

      <Text style={styles.text}>Welcome to Manage My Property</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToSignUp}>
        <Text style={styles.buttonText}>Proceed To MMP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6666',
  },
  logo: {
    width: 100, // Width of the logo
    height: 100, // Height of the logo
    alignSelf: 'center', // Center the logo horizontally
    marginBottom: 20, // Space below the logo
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'white', // Green background for the button
    paddingVertical: 10, // Vertical padding inside the button
    paddingHorizontal: 20, // Horizontal padding inside the button
    borderRadius: 5, // Rounded corners for the button
    marginTop: 20, // Space above the button
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#ff6666', // White text color for the button
    fontSize: 18, // Font size for button text
    fontWeight: 'bold', // Bold text for emphasis
  },
  text:{
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
  }
});

export default SplashScreen;
