import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from "./CustomProgressBar.styles";

const CustomProgressBar = ({ bmi }) => {
  const getProgressColor = (bmi) => {
    if (bmi < 18.5) return '#FFD700'; // Gold for underweight
    if (bmi >= 18.5 && bmi <= 24.9) return '#32CD32'; // Green for normal
    if (bmi >= 25 && bmi <= 29.9) return '#FFA500'; // Orange for overweight
    if (bmi >= 30) return '#FF4500'; // Red for obese
  };
   // Convert BMI to a progress value (0 - 1)
   const getProgress = (bmi) => {
    if (bmi > 34.9) return 1; // Max out the progress at the highest category
    return (bmi - 17) / (34.9 - 17); // Scale BMI to fit the progress bar
  };
  
  const getLabelWithBMI = (category, isActive) => {
    return isActive ? `${category} (${bmi.toFixed(1)})` : category;
  };
  return (
    <View style={styles.container}>
    <Progress.Bar
      progress={getProgress(bmi)}
      width={Dimensions.get('window').width - 40} // Responsive width
      color={getProgressColor(bmi)}
      borderWidth={0}
      borderRadius={10}
      unfilledColor="#e0e0e0" // Light grey for unfilled portion
      height={15}
    />

    <View style={styles.labelsContainer}>
      <Text style={[styles.label, bmi < 18.5 && styles.activeLabel]}>
        {getLabelWithBMI('Underweight', bmi < 18.5)}
      </Text>
      <Text style={[styles.label, bmi >= 18.5 && bmi <= 24.9 && styles.activeLabel]}>
        {getLabelWithBMI('Normal', bmi >= 18.5 && bmi <= 24.9)}
      </Text>
      <Text style={[styles.label, bmi >= 25 && bmi <= 29.9 && styles.activeLabel]}>
        {getLabelWithBMI('Overweight', bmi >= 25 && bmi <= 29.9)}
      </Text>
      <Text style={[styles.label, bmi >= 30 && styles.activeLabel]}>
        {getLabelWithBMI('Obese', bmi >= 30)}
      </Text>
    </View>
  </View>
  );
};


export default CustomProgressBar;
