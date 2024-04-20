import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import styles from "./LoginButton.styles";
export default function LoginButton({ text, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
