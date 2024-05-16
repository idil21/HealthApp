import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import CircularProgress2 from 'react-native-circular-progress-indicator';
import styles from "./ProfileCard.styles";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomProgressBar from '../CustomProgressBar';
const ProfileCard = ({ bmi, targetCalories, currentCalories }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View>
          <View style={styles.iconTextContainer}>
            <Image source={require('../../../assets/successful.png')} style={styles.icon} />
            <Text style={styles.username}>Your Progress</Text>
          </View>
          <Text style={styles.currentCaloriesText}>Current Calories: {currentCalories}</Text>
          <Text style={styles.text}>Target Calories: {targetCalories}</Text>
          

        </View>
        
        <View style={styles.circle}>
        <AnimatedCircularProgress
        size={100}
        width={15}
        fill={(currentCalories/targetCalories)*100}
        tintColor="#32CD32"
        backgroundColor="#e0e0e0"
       >
        {
          (fill) => (
            <Text style={styles.circlePercentage}>
              { fill }%
            </Text>
          )
        }
       </AnimatedCircularProgress>
       </View>
      </View>
      <CustomProgressBar bmi={30} />
      
    </View>
  );
};



export default ProfileCard;
