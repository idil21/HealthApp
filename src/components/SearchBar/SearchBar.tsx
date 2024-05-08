import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import styles from "./SearchBar.styles";
import { Feather, Entypo } from "@expo/vector-icons";

import type { SearchBarProps } from "./SearchBarProps.types";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnInputChange = (text: string) => {
    setSearchQuery(text);
    if (text.length > 3 || text === "") {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={20}
        color="black"
        style={{ marginLeft: 1 }}
      />
      <TextInput
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleOnInputChange}
      />
    </View>
  );
};

export default SearchBar;
