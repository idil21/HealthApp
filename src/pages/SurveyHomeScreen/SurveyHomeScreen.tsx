import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SurveyQuestionsScreen from "../SurveyQuestionsScreen/SurveyQuestionsScreen";
import questionJson from "../../questions.json";
import styles from "./SurveyHomeScreen.styles";

const SurveyHomeScreen = ({ navigation }) => {
  const handleStartSurvey = () => {
    navigation.navigate("SurveyQuestionsScreen", {
      questions: questionJson.questions,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>XXX TEST</Text>
      <Text style={styles.description}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={[styles.buttonContainer, styles.elevation]}>
        <TouchableOpacity onPress={handleStartSurvey} style={styles.button}>
          <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonTitle}>START</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SurveyHomeScreen;
