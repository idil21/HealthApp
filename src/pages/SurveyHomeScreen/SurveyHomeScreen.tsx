import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SurveyQuestionsScreen from "../SurveyQuestionsScreen/SurveyQuestionsScreen";
import questionJson from "../../questions.json";
import styles from "./SurveyHomeScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";

const SurveyHomeScreen = ({ navigation }) => {
  const handleStartSurvey = () => {
    navigation.navigate("SurveyQuestionsScreen", {
      questions: questionJson.questions,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Health Check: Assess Your Risk for Obesity and Diabetes
      </Text>
      <Text style={styles.description}>
        {" "}
        Welcome to our health assessment survey! Take a few minutes to answer
        questions about your daily routines and symptoms. This survey is
        designed to help you understand your predisposition to obesity and
        diabetes, empowering you with knowledge to take proactive steps for your
        health.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleStartSurvey}>
          <Text style={styles.buttonTitle}>START</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SurveyHomeScreen;
