import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { useGetUserDetailsQuery } from "../../redux/api";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/session/slice";
import ProfileCard from "../../components/ProfileCard";
import Model from "../../components/Model";
import styles from "./Home.styles";

function Home({ navigation }) {
  const { data: userInfo, isLoading, isError } = useGetUserDetailsQuery();
  const dispatch = useDispatch<AppDispatch>();
  const profilePhoto = require("../../../assets/default-profile.jpg");
  const todayDate = new Date().toLocaleDateString("tr-TR");
  const celebrationIcon = require("../../../assets/confetti.png");

  const handleOnSurvey = () => {
    navigation.navigate("SurveyHome");
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(setCredentials(userInfo));
    }
  }, [userInfo, dispatch]);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileSection}>
          <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.greetingText}>
                Welcome
                <Image source={celebrationIcon} style={styles.icon} />
              </Text>
              <Text style={styles.usernameText}>Dilara Karacan</Text>
              <Text style={styles.dateText}>{todayDate}</Text>
            </View>

            <Image source={profilePhoto} style={styles.profilePhoto} />
          </View>
        </View>
        <View style={styles.cardStyle}>
          <ProfileCard targetCalories="2000" currentCalories="1000" />
        </View>
        <View style={styles.modelStyle}>
          <Model isResolved={true} result="85" handlePress={handleOnSurvey} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
