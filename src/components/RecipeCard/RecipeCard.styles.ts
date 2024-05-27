import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    marginTop: 8,
    marginBottom: 8,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2D0C57",
  },
  kalori: {
    marginTop: 3,
    color: "#0ACF83",
  },
});
