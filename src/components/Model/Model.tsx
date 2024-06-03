import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./Model.styles";

const Model = ({ isResolved, result, handlePress, type }) => {
  const resolvedTexts = {
    obesity: "Obesity Risk",
    diabetes: "Diabetes Risk",
  };

  const unresolvedTexts = {
    obesity: "Check Obesity Risk",
    diabetes: "Check Diabetes Risk",
  };

  const getObesityCategory = (result) => {
    switch (result) {
      case 1:
        return "Insufficient Weight";
      case 2:
        return "Healthy Weight";
      case 3:
        return "Slightly Overweight";
      case 4:
        return "Obese";
      default:
        return "Unknown";
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {isResolved ? (
        <>
          <Text style={styles.title}>{resolvedTexts[type]}</Text>
          {type === "diabetes" ? (
            <Text style={styles.result}>
              Prediction: {result === 1 ? "High" : "Low"}
            </Text>
          ) : (
            <Text style={styles.result}>
              Category: {getObesityCategory(result)}
            </Text>
          )}
        </>
      ) : (
        <>
          <Text style={styles.title}>{unresolvedTexts[type]}</Text>
          <Text style={styles.body}>Tap to start</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Model;
