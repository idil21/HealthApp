import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import styles from './SignUpScreen.styles';
import LoginButton from '../../components/LoginButton';


const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  useEffect(() => {
    setUsernameErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  }, [username,email, password]);

  const validateEmail = (email: string) => {//email logic control
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSignUp = () => {
    // Validate inputs
    if (username.trim() === '') {
      setUsernameErrorMessage('Username cannot be empty.');
      setTimeout(() => {
        setUsernameErrorMessage('');
      }, 3000);
    }
    if (email.trim() === '') {
      setEmailErrorMessage('Email cannot be empty.');
      setTimeout(() => {
        setEmailErrorMessage('');
      }, 3000);
    }
    if (password.trim() === '') {
      setPasswordErrorMessage('Password cannot be empty.');
      setTimeout(() => {
        setPasswordErrorMessage('');
      }, 3000);
    }

    if (email.trim() !== '' && password.trim() !== '' && validateEmail(email)) {
      // Add your login logic here
      console.log(`Logging in with email: ${email} and password: ${password}`);
      navigation.navigate('LoginScreen');
    }
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>
      <TextInput
        style={[styles.input, usernameErrorMessage ? styles.errorInput : null]}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {usernameErrorMessage ? <Text style={styles.errorMessage}>{usernameErrorMessage}</Text> : null}
      <TextInput
        style={[styles.input, emailErrorMessage ? styles.errorInput : null]}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailErrorMessage ? <Text style={styles.errorMessage}>{emailErrorMessage}</Text> : null}
      <TextInput
        style={[styles.input, passwordErrorMessage ? styles.errorInput : null]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordErrorMessage ? <Text style={styles.errorMessage}>{passwordErrorMessage}</Text> : null}
      <LoginButton text="Sign Up" onPress={handleSignUp} />
      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Have an account? Sign-in</Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
