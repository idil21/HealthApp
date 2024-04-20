import React from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import styles from "./ProgressBar.styles";

const ProgressBar = (props) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={props.progress}
        width={300}
        height={15}
        borderWidth={0}
        unfilledColor="#ddd"
        borderRadius={15}
        color="#8DDD0A"
      />
    </View>
  );
};

export default ProgressBar;
