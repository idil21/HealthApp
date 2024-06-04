import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./AuthNavigator";
import Icon from "@expo/vector-icons/Ionicons";
import {
  Recipes,
  RecipeDetail,
  Chat,
  Home,
  SurveyHomeScreen,
  SurveyQuestionsScreen,
  SurveyResult,
  DailyNutrition,
} from "../pages";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Discover") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Daily") {
            iconName = focused ? "calendar" : "calendar-outline";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8883F0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={RecipeStack} />
      <Tab.Screen name="Daily" component={DailyNutrition} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

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

const AppNavigator = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "#2D0C57",
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="SurveyHome" component={SurveyHomeScreen} />
            <Stack.Screen
              name="SurveyQuestionsScreen"
              component={SurveyQuestionsScreen}
            />
            <Stack.Screen name="SurveyResult" component={SurveyResult} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
