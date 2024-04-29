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
import Provider from "./src/redux/Provider";
import AppNavigator from "./src/router/AppNavigator";

function App() {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}

export default App;
