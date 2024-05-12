import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { RecipeCard, SearchBar } from "../../components";
import { Recipe } from "../../types";
import styles from "./Recipes.styles";
import {
  useGetRecipesQuery,
  itemsAdapter,
  itemsSelector,
} from "../../redux/api";

const dishTypes = ["breakfast", "lunch", "dinner", "dessert", "others"];

function Recipes({ navigation }) {
  const [searchParams, setSearchParams] = useState({
    currentPage: 0,
    searchResult: "",
    dishType: "",
  });
  const {
    data: recipeData,
    isLoading,
    isError,
    refetch,
  } = useGetRecipesQuery(
    {
      page: searchParams.currentPage,
      queryText: searchParams.searchResult,
      dishTypes: searchParams.dishType,
    },
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

  const handleOnSearch = (text) => {
    setSearchParams({ currentPage: 0, searchResult: text, dishType: "" });
  };

  const handleOnFiltering = (type) => {
    setSearchParams({ currentPage: 0, dishType: type, searchResult: "" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <SearchBar onSearch={handleOnSearch} />
        <Text style={styles.title}>Discover Recipes</Text>
      </View>
      <View style={styles.buttomView}>
        <View>
          <FlatList
            horizontal
            data={dishTypes}
            keyExtractor={(item) => item}
            renderItem={({ item: type }) => (
              <TouchableOpacity
                onPress={() => handleOnFiltering(type)}
                style={{
                  backgroundColor:
                    searchParams.dishType === type ? "blue" : "gray",
                  padding: 10,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}
              >
                <Text style={{ color: "white" }}>{type}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={recipeData}
            renderItem={renderRecipe}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {
              if (recipeData.length >= 10) {
                setSearchParams((prev) => ({
                  ...prev,
                  currentPage: prev.currentPage + 1,
                }));
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Recipes;
