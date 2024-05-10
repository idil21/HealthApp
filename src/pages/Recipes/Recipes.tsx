import React, { useState, useEffect, useCallback } from "react";
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
import {
  useGetRecipesQuery,
  itemsAdapter,
  itemsSelector,
} from "../../redux/api";

function Recipes({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResult, setSearchResult] = useState("");
  const {
    data: recipeData,
    isLoading,
    isError,
    refetch,
  } = useGetRecipesQuery(
    { page: currentPage, queryText: searchResult },
    {
      selectFromResult: ({ data, ...otherParams }) => ({
        data: itemsSelector.selectAll(data ?? itemsAdapter.getInitialState()),
        ...otherParams,
      }),
    }
  );

  const handleOnRecipeSelect = (recipe: Recipe) => {
    navigation.navigate("RecipeDetailScreen", { recipe });
  };
  const renderRecipe: ListRenderItem<Recipe> = ({ item }) => (
    <RecipeCard recipeData={item} onSelect={handleOnRecipeSelect} />
  );

  const handleSearch = (text) => {
    setSearchResult(text);
    setCurrentPage(0);
  };

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
          onEndReached={() => {
            setCurrentPage(currentPage + 1);
          }}
        />
      </View>
    </View>
  );
}

export default Recipes;
