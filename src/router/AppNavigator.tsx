import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./AuthNavigator";

import {
  Recipes,
  RecipeDetail,
  SignUpScreen,
  SurveyHomeScreen,
  SurveyQuestionsScreen,
  SurveyResult,
} from "../pages";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "#2D0C57",
      }}
    >
      <Stack.Screen name="RecipesScreen" component={Recipes} />
      <Stack.Screen name="RecipeDetailScreen" component={RecipeDetail} />
    </Stack.Navigator>
  );
};

const SurveyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "#2D0C57",
      }}
    >
      <Stack.Screen name="SurveyHome" component={SurveyHomeScreen} />
      <Stack.Screen
        name="SurveyQuestionsScreen"
        component={SurveyQuestionsScreen}
      />
      <Stack.Screen name="SurveyResult" component={SurveyResult} />
    </Stack.Navigator>
  );
};

function AppNavigator() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={SurveyStack} />
          <Tab.Screen name="Discover" component={RecipeStack} />
        </Tab.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
