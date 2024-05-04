import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import LoginButton from "../../components/LoginButton";
import Icons2 from "react-native-vector-icons/Octicons";
import styles from "./SurveyQuestionsScreen.styles";

import { usePostSurveyResponseMutation } from "../../redux/api";
import { SurveyResponse } from "../../types";

const SurveyQuestionsScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<SurveyResponse>();
  const surveyQuestions = route.params.questions;

  const [postSurveyResponse, { isLoading, isError }] =
    usePostSurveyResponseMutation();

  const handleAnswerSubmit = (selectedOptionIndex: number) => {
    const surveyFeature = surveyQuestions[currentQuestionIndex].feature;

    const updatedResponses = {
      ...userResponses,
      [surveyFeature]: selectedOptionIndex,
    };

    setUserResponses(updatedResponses);

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("All Responses:", updatedResponses);
      postSurveyResponse(updatedResponses);
      navigation.navigate("SurveyResult");
    }
  };
  const renderOptions = () => {
    const options = surveyQuestions[currentQuestionIndex]["options"];
    return options.map((option: string, index: number) => (
      <TouchableOpacity
        key={index}
        style={styles.optionButton}
        onPress={() => handleAnswerSubmit(index)}
      >
        <Icons2 name="dot" size={24} color="black" />
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProgressBar progress={currentQuestionIndex / surveyQuestions.length} />
        <Text style={styles.questionText}>
          {surveyQuestions[currentQuestionIndex]["question"]}
        </Text>
        <View style={styles.optionsContainer}>{renderOptions()}</View>

        <LoginButton text="Next" onPress={handleAnswerSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurveyQuestionsScreen;
