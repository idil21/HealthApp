import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.styles";

const Button = ({
  text,
  type = "default",
  loading,
  onPress,
  disabled,
  ...rest
}: ButtonProps) => {
  const styleKey = disabled ? "disabled" : type;
  const handlePress = () => {
    if (loading || disabled || !onPress) {
      return;
    }
    onPress();
  };
  return (
    <TouchableOpacity
      style={styles[styleKey].container}
      disabled={loading || disabled}
      onPress={handlePress}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles[styleKey].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
