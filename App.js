import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Dimensions,
} from "react-native";
import AppNavigator from "./src/router/AppNavigator";

function App() {
  return <AppNavigator />;
}

export default App;
