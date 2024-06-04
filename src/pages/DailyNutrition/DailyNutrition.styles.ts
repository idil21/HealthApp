import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    padding: 12,
  },
  totalCaloriesText: {
    fontSize: 12,
    color: "#000",
  },
  dateButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedDateButton: {
    backgroundColor: "#8883f0",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 22,
    marginTop: 10,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  cardContent: {
    minHeight: 60,
  },
  separator: {
    height: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "80%",
    borderRadius: 8,
  },
  mealItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  foodItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  foodItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },
  addButton: {
    backgroundColor: "#8883f0",
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  triangle: {
    fontSize: 20,
    color: "#000",
  },
  quantityText: {
    marginHorizontal: 5,
    fontSize: 18,
    color: "#000",
  },
  titleContainer: {
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
