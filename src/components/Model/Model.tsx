import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure you have React Navigation set up
import styles from "./Model.styles";
const Model = ({ isResolved, result , navigation }) => {
  
  const handlePress = () => {
    navigation.navigate('SurveyHome'); // Navigate with parameters if needed
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {isResolved ? (
        <>
          <Text style={styles.title}>Your Obesity Risk Prediction</Text>
          <Text style={styles.result}>
            Prediction Accuracy: {result}%
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>Discover Your Obesity Predisposition</Text>
          <Text style={styles.body}>• Understand your genetic risk for obesity to make informed decisions about your health and lifestyle.</Text>
          <Text style={styles.body}>• Tap here to get started.</Text>
        </>
      )}
    </TouchableOpacity>
  );
};



export default Model;
