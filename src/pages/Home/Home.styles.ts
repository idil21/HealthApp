import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingTop: 60,
  },
  profile: {
    flex: 0.7,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 12,
  },
  cardStyle: {
    paddingTop: 20,
  },
  modelStyle: {
    paddingTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  profileSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.54,
    elevation: 3,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 20,
    marginRight: 10,
    color: "#999", // Gri renk
    fontWeight: "normal",
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "bold", // Kalın yazı tipi
    color: "#000", // Siyah renk
  },
  dateText: {
    fontSize: 12,
    color: "#999",
  },
});
