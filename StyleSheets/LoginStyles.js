import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff6666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#554A4A', // Green background for the button
    paddingVertical: 10, // Vertical padding inside the button
    paddingHorizontal: 20, // Horizontal padding inside the button
    borderRadius: 5, // Rounded corners for the button
    marginTop: 10, // Space above the button
    alignItems: 'center', // Center the text inside the button
  },
  buttonText2: {
    color: '#ff6666', // White text color for the button
    fontSize: 18, // Font size for button text
    fontWeight: 'bold', // Bold text for emphasis
  },
  signupLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007BFF',
  },

});

export default LoginStyles;
