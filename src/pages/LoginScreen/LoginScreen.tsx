import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./LoginScreen.styles";
import LoginButton from "../../components/LoginButton";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Octicons";
import { usePostLoginMutation } from "../../redux/api";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [login, { isLoading }] = usePostLoginMutation();

  useEffect(() => {
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
  }, [email, password]);

  const validateEmail = (email: string) => {
    //email logic control
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginPress = async () => {
    if (email.trim() === "") {
      setEmailErrorMessage("This field cannot be left blank");
      setTimeout(() => {
        setEmailErrorMessage("");
      }, 3000);
    } else if (!validateEmail(email)) {
      setEmailErrorMessage("Enter a valid email address.");
      setTimeout(() => {
        setEmailErrorMessage("");
      }, 3000);
    }
    if (password.trim() === "") {
      setPasswordErrorMessage("This field cannot be left blank");
      setTimeout(() => {
        setPasswordErrorMessage("");
      }, 3000);
    }

    if (email.trim() !== "" && password.trim() !== "" && validateEmail(email)) {
      try {
        const loginResult = await login({ email, password }).unwrap();
        console.log("Login successful:", loginResult);
      } catch (error) {
        console.error("Login failed:", error);
        setPasswordErrorMessage(error.data?.message || "Failed to login");
      }
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
      {emailErrorMessage && (
        <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
      )}

      {/* Password input with error styling */}

      <TextInput
        style={[styles.input, passwordErrorMessage ? styles.errorInput : null]}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      {/* Display error message for password */}
      {passwordErrorMessage && (
        <Text style={styles.errorMessage}>{passwordErrorMessage}</Text>
      )}
      <View style={styles.button_container}>
        <LoginButton
          text="Login"
          onPress={handleLoginPress}
          backgroundColor=""
          color=""
        />
      </View>

      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ marginVertical: 5 }}>
          Don't have an account? Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
