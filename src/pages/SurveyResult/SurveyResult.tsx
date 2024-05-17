import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./SurveyResult.styles";
import HomeButton from "../../components/LoginButton";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
function SurveyResult({ navigation }) {
  const handleOnHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="checkmark" size={100} color="#8883f0" />
        </View>
        <Text style={styles.title}>Thank you for completing the survey!</Text>
      </View>

      <HomeButton
        text="Back to home"
        onPress={handleOnHome}
        backgroundColor="#fff"
        color="#8883f0"
      />
    </SafeAreaView>
  );
}

export default SurveyResult;
