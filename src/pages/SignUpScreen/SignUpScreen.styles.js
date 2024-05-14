import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outer_container: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 24,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    fontSize: 12,
  },
  errorInput: {
    borderColor: "red",
  },
});
