import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./RecipeCard.styles";
import type { RecipeCardProps } from "./RecipeCard.types";

const RecipeCard = ({ recipeData, onSelect }: RecipeCardProps) => {
  const { title, imageUrl, calorie } = recipeData;
  const handleOnSelect = () => {
    onSelect(recipeData);
  };
  return (
    <TouchableOpacity onPress={handleOnSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.kalori}>{calorie}</Text>
        </View>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
