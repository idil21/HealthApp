import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#8883f0",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    padding: 30,
  },
});
