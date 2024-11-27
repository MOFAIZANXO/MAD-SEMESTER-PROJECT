import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import LoginStyles from '../StyleSheets/LoginStyles'; // Import Login Styles
const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Missing Information',
        text2: 'Please enter both email and password.', 
});
      return;
    }

    // For simplicity, let's pretend to authenticate
    if (email === 'test@test.com' && password === 'password123') {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: 'Welcome back!',
      });
      // Navigate to the next screen after successful login (for example, HomeScreen)
    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid Credentials',
        text2: 'Please check your email or password.',
      });
    }
  };

  return (
    <View style={LoginStyles.container}>
      <Image source={require('../assets/images/MMP_LOGO.png')} style={LoginStyles.logo} />
      <Text style={LoginStyles.heading}>Login</Text>

      <TextInput
        style={LoginStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

<TouchableOpacity style={LoginStyles.button} onPress={handleLogin}>
  <Text style={LoginStyles.buttonText}>LogIn</Text>
</TouchableOpacity>

<Text style={{ textAlign: 'center', marginVertical: 10 , marginTop: 15,}}>
  Don't have an account?
</Text>

<TouchableOpacity style={LoginStyles.button2} onPress={() => navigation.navigate('SignUp')}>
  <Text style={LoginStyles.buttonText2}>Sign Up</Text>
</TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
