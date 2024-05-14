import React from "react";
import { TextInput, Text, View, Pressable } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./DropdowMenu.styles";
const DropdownMenu = ({ data, placeholder, onSelect }) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        onSelect(selectedItem, index);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            {selectedItem && (
              <Icon
                name={selectedItem.icon}
                style={styles.dropdownButtonIconStyle}
              />
            )}
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || placeholder}
            </Text>
            <Icon
              name={isOpened ? "chevron-up" : "chevron-down"}
              style={styles.dropdownButtonArrowStyle}
            />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            <Text style={styles.dropdownItemTxtStyle}>{item.index}</Text>
          </View>
        );
      }}
      dropdownStyle={styles.dropdownButtonStyle}
    />
  );
};

export default DropdownMenu;
