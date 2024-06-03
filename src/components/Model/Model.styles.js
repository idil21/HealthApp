import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#666",
  },
  result: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 8,
  },
});
