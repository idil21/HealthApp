import { StyleSheet } from "react-native";

const base = StyleSheet.create({
  container: {
    backgroundColor: "#25AE87",
    height: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default {
  default: base,
  disabled: StyleSheet.create({
    container: {
      ...base.container,
      backgroundColor: "#e1e1e1",
    },
    text: {
      ...base.text,
      color: "#BDBDBD",
    },
  }),
  outline: StyleSheet.create({
    container: {
      ...base.container,
      backgroundColor: "transparent",
      borderColor: "#DB040E",
      borderWidth: 1,
    },
    text: {
      ...base.text,
      color: "#DB040E",
    },
  }),
};
