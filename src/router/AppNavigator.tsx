import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Recipes, RecipeDetail, Home } from "../pages";
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

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={RecipeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
