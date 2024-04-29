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

import Icons from "react-native-vector-icons/SimpleLineIcons";
const SurveyQuestionsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  //change it all any

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState(
    Array(route.params.questions.length).fill("")
  );
  const surveyQuestions = route.params.questions;

  const handleAnswerSubmit = (selectedOptionIndex: number) => {
    const selectedOption =
      surveyQuestions[currentQuestionIndex]["options"][selectedOptionIndex];
    const updatedResponses = [...userResponses];
    updatedResponses[currentQuestionIndex] = selectedOption;
    setUserResponses(updatedResponses);

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("All Responses:", updatedResponses);
      //sendResponsesToBackend(userResponses);
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
        <Text style={styles.optionText}>{index}</Text>
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
