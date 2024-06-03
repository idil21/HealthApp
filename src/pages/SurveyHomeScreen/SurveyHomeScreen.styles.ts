import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  buttonContainer: {
    backgroundColor: "#8883F0",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  buttonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
