import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./AuthNavigator";
import Icon from "@expo/vector-icons/Ionicons";

import {
  Recipes,
  RecipeDetail,
  SignUpScreen,
  Home,
  SurveyHomeScreen,
  SurveyQuestionsScreen,
  SurveyResult,
  FormInfo,
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
      <Stack.Screen name="Home2" component={Home} />
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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Discover") {
                iconName = focused ? "grid" : "grid-outline";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#8883F0",
            tabBarInactiveTintColor: "gray",
          })}
        >
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
