import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginRight: 10,
  },
  image_container: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#2D0C57",
    marginTop: 8,
  },
  amount: {
    fontSize: 12,
    color: "#9586A8",
    marginTop: 2,
  },
});
