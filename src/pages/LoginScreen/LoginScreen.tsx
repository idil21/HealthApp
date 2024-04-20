
import { View, Text,TextInput, Pressable} from 'react-native';
import styles from './LoginScreen.styles';
import LoginButton from '../../components/LoginButton';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Octicons'

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  useEffect(() => {
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  }, [email, password]);

  const validateEmail = (email: string) => {//email logic control
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginPress = () => {
    if (email.trim() === '') {
      setEmailErrorMessage('This field cannot be left blank');
      setTimeout(() => {
        setEmailErrorMessage('');
      }, 3000); 
    } else if (!validateEmail(email)) {
      setEmailErrorMessage('Enter a valid email address.');
      setTimeout(() => {
        setEmailErrorMessage('');
      }, 3000); 
    }
    if (password.trim() === '') {
      setPasswordErrorMessage('This field cannot be left blank');
      setTimeout(() => {
        setPasswordErrorMessage('');
      }, 3000); 
    }

    if (email.trim() !== '' && password.trim() !== '' && validateEmail(email)) {
      // Add your login logic here
      console.log(`Logging in with email: ${email} and password: ${password}`);
      navigation.navigate('SurveyHome');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Email input with error styling */}
      <TextInput
        style={[styles.input, emailErrorMessage ? styles.errorInput : null]}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* Display error message for email */}
      {emailErrorMessage && <Text style={styles.errorMessage}>{emailErrorMessage}</Text>}
      
      {/* Password input with error styling */}
      
      <TextInput
        style={[styles.input, passwordErrorMessage ? styles.errorInput : null]}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
     
      {/* Display error message for password */}
      {passwordErrorMessage && <Text style={styles.errorMessage}>{passwordErrorMessage}</Text>}
      
      <LoginButton text="Login" onPress={handleLoginPress} />
      
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text>
          Don't have an account? Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;