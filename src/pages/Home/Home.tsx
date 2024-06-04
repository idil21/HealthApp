import React, { useCallback, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  ListRenderItem,
} from "react-native";
import {
  useGetUserDetailsQuery,
  usePostDailyMenuMutation,
  useGetSurveyResultQuery,
} from "../../redux/api";
import type { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/session/slice";
import ProfileCard from "../../components/ProfileCard";
import Model from "../../components/Model";
import styles from "./Home.styles";
import { useFocusEffect } from "@react-navigation/native";
import { RootState } from "../../redux/store";

import { RecipeCard } from "../../components";
import { Recipe } from "../../types";

function Home({ navigation }) {
  const { data: userInfo, isLoading, isError } = useGetUserDetailsQuery();
  const dispatch = useDispatch<AppDispatch>();
  const [getMenu, { data: dailyMenu }] = usePostDailyMenuMutation();
  const {
    data: surveyResult,
    isLoading: isSurveyLoading,
    isError: isSurveyError,
    refetch,
  } = useGetSurveyResultQuery(userInfo?.id);
  const todayDate = new Date().toISOString().split("T")[0];
  const totalCalories = useSelector<RootState, number>(
    (state) => state.menu.totalCalories[todayDate] || 0
  );

  const profilePhoto = require("../../../assets/default-profile.jpg");
  const celebrationIcon = require("../../../assets/confetti.png");

  const handleOnSurvey = () => {
    navigation.navigate("SurveyHome");
  };

  const renderRecipe: ListRenderItem<Recipe> = ({ item }) => (
    <RecipeCard
      recipeData={item}
      onSelect={() => {
        console.log("working...");
      }}
    />
  );

  const isSurveyResolved = (type) => {
    if (type === "obesity") {
      return surveyResult?.result?.obesity != null;
    }
    if (type === "diabetes") {
      return surveyResult?.result?.diabetes != null;
    }
    return false;
  };

  const getDailyMenu = useCallback(() => {
    if (userInfo) {
      dispatch(setCredentials(userInfo));
      getMenu(userInfo);
    }
  }, [getMenu, userInfo, dispatch]);

  useEffect(() => {
    getDailyMenu();
  }, [getDailyMenu]);

  useFocusEffect(
    useCallback(() => {
      if (userInfo?.id) {
        console.log("refetching....");
        refetch();
      }
    }, [refetch, userInfo?.id])
  );
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileSection}>
          <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
              <View style={styles.profileHeader}>
                <Text style={styles.greetingText}>Welcome</Text>
                <Image source={celebrationIcon} style={styles.icon} />
              </View>
              <Text style={styles.usernameText}>{userInfo.name}</Text>
              <Text style={styles.dateText}>{todayDate}</Text>
            </View>
            <Image source={profilePhoto} style={styles.profilePhoto} />
          </View>
        </View>
        <View style={styles.cardStyle}>
          <ProfileCard
            targetCalories={userInfo.totalCalories}
            currentCalories={totalCalories}
            bmi={userInfo.bmi}
          />
        </View>
        <View style={styles.modelContainer}>
          <Model
            isResolved={isSurveyResolved("obesity")}
            result={surveyResult?.result.obesity ?? ""}
            handlePress={handleOnSurvey}
            type="obesity"
          />
          <Model
            isResolved={isSurveyResolved("diabetes")}
            result={surveyResult?.result.diabetes ?? ""}
            handlePress={handleOnSurvey}
            type="diabetes"
          />
        </View>
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={dailyMenu}
          renderItem={renderRecipe}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => (
            <Text style={styles.menuTitle}>Recommended Recipes for You</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
