import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
  },
  separator: {
    height: 16,
  },
  upperView: {
    flex: 2,
    backgroundColor: "#0ACF83",
    justifyContent: "flex-end",
    padding: 20,
  },
  buttomView: {
    flex: 3.5,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 40,
    padding: 20,
    marginTop: -30,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    paddingHorizontal: 8,
    marginTop: 10,
  },
});
