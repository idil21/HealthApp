import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FilterChipProps } from "./FilterChip.types";
import styles from "./FilterChip.style";

const FilterChip = ({ label, isSelected, onPress }: FilterChipProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.chip,
        isSelected ? styles.chipSelected : styles.chipUnselected,
      ]}
    >
      {isSelected && (
        <Icon name="check" size={18} color="#6C0EE4" style={styles.icon} />
      )}
      <Text style={isSelected ? styles.textSelected : styles.textUnselected}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterChip;
