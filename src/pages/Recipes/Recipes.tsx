import React, { useState } from "react";
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
import { RecipeCard, SearchBar, FilterChip } from "../../components";
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
    dishTypes: [],
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
      dishTypes: searchParams.dishTypes,
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

  const renderFilterChip: ListRenderItem<string> = ({ item }) => (
    <FilterChip
      label={item}
      isSelected={searchParams.dishTypes.includes(item)}
      onPress={() => handleOnFiltering(item)}
    />
  );

  const handleOnSearch = (text) => {
    setSearchParams({ currentPage: 0, searchResult: text, dishTypes: [] });
  };

  const handleOnFiltering = (type) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      currentPage: 0,
      dishTypes: prevParams.dishTypes.includes(type)
        ? prevParams.dishTypes.filter((t) => t !== type)
        : [...prevParams.dishTypes, type],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <SearchBar onSearch={handleOnSearch} />
        <Text style={styles.title}>Discover Recipes</Text>
      </View>
      <View style={styles.buttomView}>
        <View style={styles.innerContainer}>
          <FlatList
            data={dishTypes}
            renderItem={renderFilterChip}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.innerContainer}>
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
