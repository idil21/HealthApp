import React from "react";
import { View, Text, Image } from "react-native";
import { IngredientCardProps } from "./IngredientCard.types";
import styles from "./IngredientCard.style";

const IngredientCard = ({ recipeData }: IngredientCardProps) => {
  const { title, imageUrl } = recipeData;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default IngredientCard;
