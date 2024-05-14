import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outer_container: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: "Satisfy_400Regular",
    color: "#8883f0",
    fontSize: 30,
    paddingVertical: 20,
  },
  error: {
    color: "#8883f0",
    fontSize: 12,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.54,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
    width: "80%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dropdownLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  button_container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  dropdown: {
    width: 150,
  },
});

export default styles;
