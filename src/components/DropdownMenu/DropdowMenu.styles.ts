import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dropdownButtonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
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
    width: "80%",
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: "#8883f0",
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
    color: "#8883f0",
  },

  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#8883f0",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
