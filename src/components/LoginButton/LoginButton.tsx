import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import styles from "./LoginButton.styles";
export default function LoginButton({ text, onPress, backgroundColor, color }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, backgroundColor && { backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, color && { color }]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
