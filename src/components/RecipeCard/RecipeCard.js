import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./RecipeCard.styles";

const RecipeCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.recipe.title}</Text>
        <Text style={styles.kalori}>{props.recipe.kalori}</Text>
      </View>
      <Image style={styles.image} source={{ uri: props.recipe.imageUrl }} />
    </View>
  );
};

export default RecipeCard;
