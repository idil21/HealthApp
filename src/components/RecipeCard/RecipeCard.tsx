import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./RecipeCard.styles";
import type { RecipeCardProps } from "./RecipeCard.types";

const RecipeCard = ({ recipeData, onSelect }: RecipeCardProps) => {
  const { title, image, calories } = recipeData;
  const handleOnSelect = () => {
    onSelect(recipeData);
  };
  return (
    <TouchableOpacity onPress={handleOnSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.kalori}>{calories}KCAL</Text>
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
