import React from "react";
import { View, Text, Image } from "react-native";
import { IngredientCardProps } from "./IngredientCard.types";
import styles from "./IngredientCard.style";

const IngredientCard = ({ ingredientData }: IngredientCardProps) => {
  const { name, image, amount, unit } = ingredientData;

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.amount}>{`${amount} ${unit}`}</Text>
    </View>
  );
};

export default IngredientCard;
