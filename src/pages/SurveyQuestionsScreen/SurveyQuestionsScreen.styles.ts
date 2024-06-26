import { StyleSheet } from "react-native";

export default StyleSheet.create({
  errorText: {
    color: "red",
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.54,
    elevation: 3,
    marginBottom: 20,
    width: "90%",
  },
  questionText: {
    fontSize: 18,
    textAlign: "center",
    padding: 20,
    color: "#000",
    fontFamily: "Catamaran-Bold",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
    color: "#000000",
  },
  optionsContainer: {
    alignItems: "center",
    margin: 40,
    marginLeft: 40,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
