import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import SignUpStyles from '../StyleSheets/SignUpStyles'; // Import SignUp Styles
const SignUpScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleSignUp = () => {
    const missingFields = [];

    if (!name) missingFields.push('Name');
    if (!email) missingFields.push('Email');
    if (!password) missingFields.push('Password');

    if (missingFields.length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Missing Information',
        text2: `Please fill in the following: ${missingFields.join(', ')}`,
      });
      return;
    }

    console.log('Sign Up Info:', { name, email, password });

    Toast.show({
      type: 'success',
      text1: 'Success!',
      text2: 'Your account has been created. Please log in.',
    });

    navigation.navigate('Login');
  };

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={SignUpStyles.container}>
      <Image source={require('../assets/images/MMP_LOGO.png')} style={SignUpStyles.logo} />
      <Text style={SignUpStyles.heading}>Sign Up</Text>

      <TextInput
        style={SignUpStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={SignUpStyles.input}
        placeholder="Example @gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <View style={SignUpStyles.passwordContainer}>
        <TextInput
          style={SignUpStyles.input}
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={SignUpStyles.toggleButton}>
          <Text style={SignUpStyles.toggleText}>{secureText ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={SignUpStyles.button} onPress={handleSignUp}>
        <Text style={SignUpStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
