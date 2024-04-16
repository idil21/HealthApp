import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

import recipeData from "../../recipe-data.json";
import { RecipeCard, SearchBar } from "../../components";
import styles from "./Recipes.styles";

function Recipes() {
  const renderRecipe = ({ item }) => <RecipeCard recipe={item} />;
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
