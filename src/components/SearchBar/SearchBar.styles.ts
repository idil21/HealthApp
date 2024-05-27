import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    height: 48,
    backgroundColor: "white",
    borderRadius: 27,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "85%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancelButton: {
    fontSize: 20,
    marginLeft: 10,
    color: "#fff",
  },
});
