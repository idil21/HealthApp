import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import styles from "./SignUpScreen.styles";
import { Formik } from "formik";
import LoginButton from "../../components/LoginButton";
import {
  initialRegisterFormValues,
  registerValidationSchema,
} from "./formHelper";
import NextButton from "../../components/LoginButton";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={initialRegisterFormValues}
        onSubmit={(values) =>
          navigation.navigate("FormInfo", { registerValues: values })
        }
      >
        {({ handleChange, handleSubmit, errors, values }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={values.name}
              onChangeText={handleChange("name")}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              textContentType="oneTimeCode"
              value={values.password}
              blurOnSubmit={false}
              onChangeText={handleChange("password")}
            />

            <NextButton text="Next" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpScreen;
