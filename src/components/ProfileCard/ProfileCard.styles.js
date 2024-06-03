import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.54,
    elevation: 3,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  circlePercentage: {
    fontWeight: "bold",
    fontSize: 20,
  },
  circle: {
    alignItems: "flex-end",
  },
  username: {
    fontSize: 18,
    fontWeight: "normal",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "normal",
    fontSize: 14,
  },
  bmiLabel: {
    marginRight: 5,
  },
  bmiValue: {
    fontWeight: "normal",
  },
  currentCaloriesText: {
    // Style for current calories
    fontSize: 14,
    fontWeight: "normal",
    marginTop: 10, // Add some margin on top for spacing
  },
  bodyImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
