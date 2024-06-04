import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import styles from "./ProfileCard.styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CustomProgressBar from "../CustomProgressBar";
import { number } from "yup";
const ProfileCard = ({ bmi, targetCalories, currentCalories }) => {
  const fillPercentage = Math.min(
    (currentCalories / targetCalories) * 100,
    100
  );
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View>
          <View style={styles.iconTextContainer}>
            <Image
              source={require("../../../assets/successful.png")}
              style={styles.icon}
            />
            <Text style={styles.username}>Your Progress</Text>
          </View>
          <Text style={styles.currentCaloriesText}>
            Current Calories: {currentCalories}
          </Text>
          <Text style={styles.text}>Target Calories: {targetCalories}</Text>
        </View>

        <View style={styles.circle}>
          <AnimatedCircularProgress
            size={100}
            width={15}
            fill={fillPercentage}
            tintColor="#0BCE83"
            backgroundColor="#e0e0e0"
          >
            {() => (
              <Text style={styles.circlePercentage}>
                {fillPercentage.toFixed(0)}%
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
      <CustomProgressBar bmi={bmi} />
    </View>
  );
};

export default ProfileCard;
