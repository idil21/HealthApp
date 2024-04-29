import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import { RecipeCard, SearchBar } from "../../components";
import { Recipe } from "../../types";
import styles from "./Recipes.styles";
import axios from "axios";
import { useGetRecipesQuery } from "../../redux/api";

function Recipes({ navigation }) {
  const {
    data: recipeData,
    isLoading,
    isError,
    refetch,
  } = useGetRecipesQuery({ page: 0 });

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
          keyExtractor={(item) => item.id.toString()}
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
