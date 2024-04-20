import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  ListRenderItem,
} from "react-native";
import styles from "./RecipeDetail.styles";
import { Button } from "../../components";
import { Recipe } from "../../types";
import { IngredientCard } from "../../components";

function RecipeDetail({ route, navigation }) {
  const item = route.params?.recipe;

  const ingredients = [
    { id: "1", name: "Ingredient 1", quantity: "100g" },
    { id: "2", name: "Ingredient 2", quantity: "2 cups" },
    { id: "3", name: "Ingredient 3", quantity: "1 tsp" },
  ];

  const renderRecipe: ListRenderItem<Recipe> = ({ item }) => (
    <IngredientCard recipeData={item} />
  );

  const Item = ({ title }) => (
    <View style={styles.title}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.nutrition_container}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <View style={styles.body_container}>
            <Text style={styles.text}>{item.protein}g</Text>
            <Text style={styles.label}>Protein</Text>
            <Text style={styles.text}>{item.carbo}g</Text>
            <Text style={styles.label}>Carbo</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.text}>{item.fat}g</Text>
            <Text style={styles.label}>Fat</Text>
            <Text style={styles.text}>{item.calorie}</Text>
            <Text style={styles.label}>Calories</Text>
          </View>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={ingredients}
          renderItem={({ item }) => <Item title={item.name} />}
          horizontal={true}
        />
        <View style={styles.info_container}>
          <Text style={styles.title}>Preparation</Text>
          <Text style={styles.label}> {item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipeDetail;
