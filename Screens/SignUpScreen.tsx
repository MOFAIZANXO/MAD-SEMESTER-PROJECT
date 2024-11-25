import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const SignUpScreen = () => {
  // State variables to store the input data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [secureText, setSecureText] = useState(true); // State for password visibility toggle

  // Handle sign-up action
  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert('Please fill in all fields'); // Alert if any field is empty
      return;
    }

    // Typically, here you would send data to an API to sign up the user
    console.log('Sign Up Info:', { name, email, password });
    alert('User signed up!'); // For demonstration purposes, show an alert
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setSecureText(!secureText); // Toggle between show and hide for password
  };

  return (
    <View style={styles.container}>
      {/* Logo Image at the top */}
      <Image 
      source={require('../assets/images/MMP_LOGO.png')}
  style={styles.logo} 
/>

      <Text style={styles.heading}>Sign Up</Text>

      {/* Name Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName} // Update name state on text change
      />

      {/* Email Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Update email state on text change
      />

      {/* Password Input Field */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={secureText} // Toggle password visibility
          value={password}
          onChangeText={setPassword} // Update password state on text change
        />
        {/* Toggle button to show/hide password */}
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
          <Text style={styles.toggleText}>{secureText ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the SignUp screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    padding: 20, // Padding around content
    backgroundColor: '#f0f0f0', // Light gray background
  },
  logo: {
    width: 100, // Width of the logo
    height: 100, // Height of the logo
    alignSelf: 'center', // Center the logo horizontally
    marginBottom: 20, // Space below the logo
    borderRadius: 10,
  },
  heading: {
    fontSize: 24, // Font size for the heading
    marginBottom: 20, // Space below the heading
    textAlign: 'center', // Center the heading text
  },
  input: {
    height: 40, // Height of the input field
    borderColor: 'black', // Border color of input field
    borderWidth: 1, // Border width
    marginBottom: 10, // Space below each input field
    paddingLeft: 10, // Padding on the left side of the input
    borderRadius: 5, // Rounded corners for input fields
  },
  passwordContainer: {
    position: 'relative', // Make it relative for positioning the toggle
  },
  toggleButton: {
    position: 'absolute', // Position the button inside the input container
    right: 10, // Position it to the right side
    top: 12, // Adjust vertical position
  },
  toggleText: {
    color: '#007BFF', // Color of the show/hide text (blue)
  },
  button: {
    backgroundColor: '#ff6666', // Green background for the button
    paddingVertical: 10, // Vertical padding inside the button
    paddingHorizontal: 20, // Horizontal padding inside the button
    borderRadius: 5, // Rounded corners for the button
    marginTop: 20, // Space above the button
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#fff', // White text color for the button
    fontSize: 18, // Font size for button text
    fontWeight: 'bold', // Bold text for emphasis
  },
});

export default SignUpScreen;
