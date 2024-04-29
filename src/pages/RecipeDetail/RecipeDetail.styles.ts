import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
    margin: 20,
  },
  info_container: {
    marginTop: 20,
  },
  nutrition_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.54,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  body_container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    color: "#2D0C57",
  },
  label: {
    fontSize: 12,
    color: "#9586A8",
    marginBottom: 5,
    lineHeight: 18,
  },
  title: {
    fontSize: 22,
    color: "#2D0C57",
    fontWeight: "bold",
    marginVertical: 10,
  },
});
