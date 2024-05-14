import { StyleSheet } from "react-native";

export default StyleSheet.create({
  chip: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chipSelected: {
    backgroundColor: "#E2CBFF",
  },
  chipUnselected: {
    backgroundColor: "#FFFFFF",
  },
  textSelected: {
    color: "#6C0EE4",
    fontSize: 16,
  },
  textUnselected: {
    color: "#9586A8",
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
});
