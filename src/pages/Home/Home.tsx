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

function Home({ navigation }) {
  const { data: userInfo, isLoading, isError } = useGetUserDetailsQuery();
  const dispatch = useDispatch<AppDispatch>();
  const profilePhoto = require("../../../assets/default-profile.jpg");
  const todayDate = new Date().toLocaleDateString("tr-TR");
  const celebrationIcon = require("../../../assets/confetti.png");

  const handleSurveyButtonClick = () => {
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
    <View style={styles.container}>
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
          <Model isResolved={true} result="85" navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingTop: 60,
  },
  profile: {
    flex: 0.7,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start", // Sol hizalama
    padding: 12,
  },
  cardStyle: {
    paddingTop: 20,
  },
  modelStyle: {
    paddingTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  profileSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.54,
    elevation: 3,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 20,
    marginRight: 10,
    color: "#999", // Gri renk
    fontWeight: "normal",
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "bold", // Kalın yazı tipi
    color: "#000", // Siyah renk
  },
  dateText: {
    fontSize: 12,
    color: "#999",
  },
});

export default Home;
