import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
} from "react-native";
import recipeData from "../../recipe-data.json";
import { RecipeCard, SearchBar } from "../../components";
import { Recipe } from "../../types";
import styles from "./Recipes.styles";

function Recipes({ navigation }) {
  const handleOnRecipeSelect = (recipe: Recipe) => {
    navigation.navigate("RecipeDetailScreen", { recipe });
  };
  const renderRecipe: ListRenderItem<Recipe> = ({ item }) => (
    <RecipeCard recipeData={item} onSelect={handleOnRecipeSelect} />
  );

  const handleSearch = (text) => {};
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <SearchBar onSearch={handleSearch} />
        <Text style={styles.title}>Discover Recipes</Text>
      </View>
      <View style={styles.buttomView}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={recipeData}
          renderItem={renderRecipe}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Recipes;
