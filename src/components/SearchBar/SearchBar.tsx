import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import styles from "./SearchBar.styles";
import { Feather, Entypo } from "@expo/vector-icons";

import type { SearchBarProps } from "./SearchBarProps.types";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleOnInputChange = (text: string) => {
    setSearchQuery(text);
    if (text.length > 3 || text === "") {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={
          isFocused ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleOnInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {isFocused && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchQuery("");
            }}
          />
        )}
      </View>

      {isFocused && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setIsFocused(false);
          }}
        >
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
