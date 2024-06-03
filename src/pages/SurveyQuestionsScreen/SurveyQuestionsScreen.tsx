import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import LoginButton from "../../components/LoginButton";
import Icons2 from "react-native-vector-icons/Octicons";
import { usePostSurveyResponseMutation } from "../../redux/api";
import { RootState } from "../../redux/store";
import { SurveyResponse } from "../../types";
import { useSelector } from "react-redux";
import styles from "./SurveyQuestionsScreen.styles";

const SurveyQuestionsScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<SurveyResponse>();
  const surveyQuestions = route.params.questions;

  const userId = useSelector((state: RootState) => state.auth.userInfo?.id);

  const [postSurveyResponse, { isLoading, isError }] =
    usePostSurveyResponseMutation();

  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const { question_type, min, max } = currentQuestion;

  const validationSchema = Yup.object().shape({
    answer:
      question_type === "numeric"
        ? Yup.number()
            .min(min, `Must be at least ${min}`)
            .max(max, `Must be at most ${max}`)
            .required("This field is required")
        : Yup.string().required("Please select an answer"),
  });

  const handleSubmit = (values, actions) => {
    const surveyFeature = currentQuestion.feature;
    const updatedResponses = {
      ...userResponses,
      [surveyFeature]: values.answer,
    };
    setUserResponses(updatedResponses);

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      actions.resetForm();
    } else {
      const surveyResponse = { userId, ...updatedResponses };
      console.log(surveyResponse);
      postSurveyResponse(surveyResponse);
      navigation.navigate("SurveyResult");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const renderOptions = (setFieldValue, values) => {
    if (question_type === "numeric") {
      return (
        <>
          <TextInput
            style={styles.optionButton}
            placeholder={`Enter a number between ${min} and ${max}`}
            inputMode="decimal"
            value={String(values.answer)}
            onChangeText={(text) => setFieldValue("answer", text)}
          />
          <ErrorMessage
            name="answer"
            render={(msg) => <Text style={styles.errorText}>{msg}</Text>}
          />
        </>
      );
    }

    return currentQuestion.options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.optionButton}
        onPress={() => setFieldValue("answer", option.value)}
      >
        <Icons2
          name={values.answer === option.value ? "dot-fill" : "dot"}
          size={24}
          color={values.answer === option.value ? "#8883F0" : "gray"}
        />
        <Text style={styles.optionText}>{option.text}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProgressBar progress={currentQuestionIndex / surveyQuestions.length} />
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        <Formik
          initialValues={{ answer: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <>
              <View style={styles.optionsContainer}>
                {renderOptions(setFieldValue, values)}
              </View>
              <View style={styles.buttonContainer}>
                {currentQuestionIndex > 0 && (
                  <View style={styles.buttonWrapper}>
                    <LoginButton
                      text="Back"
                      onPress={handleBack}
                      backgroundColor="#F2F2F2"
                      color="#9D9D9D"
                    />
                  </View>
                )}
                <View style={styles.buttonWrapper}>
                  <LoginButton
                    text={
                      currentQuestionIndex === surveyQuestions.length - 1
                        ? "Finish"
                        : "Next"
                    }
                    onPress={handleSubmit}
                    backgroundColor=""
                    color=""
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurveyQuestionsScreen;
