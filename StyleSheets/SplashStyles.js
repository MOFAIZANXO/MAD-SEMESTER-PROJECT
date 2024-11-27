import { StyleSheet } from 'react-native';

const SplashStyles = StyleSheet.create({
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
      backgroundColor: '#554A4A', // Green background for the button
      paddingVertical: 10, // Vertical padding inside the button
      paddingHorizontal: 20, // Horizontal padding inside the button
      borderRadius: 5, // Rounded corners for the button
      marginTop: 50, // Space above the button
      alignItems: 'center', // Center the text inside the button
    },
    buttonText: {
      color: '#ff6666', // White text color for the button
      fontSize: 18, // Font size for button text
      fontWeight: 'bold', // Bold text for emphasis
    },
    text:{
      fontSize: 24,
      fontWeight:'bold',
      color: 'white',
      margintop: 30,
    }
  });
  
  export default SplashStyles;