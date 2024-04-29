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
import HTMLView from "react-native-htmlview";

import styles from "./RecipeDetail.styles";
import { Ingredient } from "../../types";
import { IngredientCard } from "../../components";
import { useGetIngredientsByRecipeIdQuery } from "../../redux/api";

function RecipeDetail({ route, navigation }) {
  const item = route.params?.recipe;
  const {
    data: ingredientData,
    isLoading,
    isError,
  } = useGetIngredientsByRecipeIdQuery(item.id);

  const renderIngredient: ListRenderItem<Ingredient> = ({ item }) => (
    <IngredientCard ingredientData={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.nutrition_container}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.body_container}>
            <Text style={styles.text}>{item.protein}</Text>
            <Text style={styles.label}>Protein</Text>
            <Text style={styles.text}>{item.carbs}</Text>
            <Text style={styles.label}>Carbo</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.text}>{item.fat}</Text>
            <Text style={styles.label}>Fat</Text>
            <Text style={styles.text}>{item.calories}</Text>
            <Text style={styles.label}>Calories</Text>
          </View>
        </View>
        <FlatList
          data={ingredientData}
          renderItem={renderIngredient}
          keyExtractor={(ingredient) => ingredient.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.info_container}>
          <Text style={styles.title}>Preparation</Text>
          <HTMLView
            value={"<label>" + item.instructions + "</label>"}
            stylesheet={styles}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipeDetail;
