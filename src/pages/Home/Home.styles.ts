import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
  },
  profile: {
    flex: 2,
    padding: 10,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
    padding: 12,
  },
  profileHeader: {
    flexDirection: "row",
  },
  cardStyle: {
    paddingTop: 20,
  },
  modelContainer: {
    flexDirection: "row",
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
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  dateText: {
    fontSize: 12,
    color: "#999",
  },
  menuContainer: {
    flex: 1.5,
    padding: 20,
    marginTop: 12,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  separator: {
    height: 10,
  },
});
