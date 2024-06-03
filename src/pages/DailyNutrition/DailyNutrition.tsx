import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  ListRenderItem,
} from "react-native";
import { Appbar, Card, Title } from "react-native-paper";
import moment from "moment";
import CustomButton from "../../components/LoginButton";
import { Recipe } from "../../types";
import { SearchBar } from "../../components";
const { width: screenWidth } = Dimensions.get("window");

import {
  useGetRecipesQuery,
  itemsAdapter,
  itemsSelector,
  useGetUserDetailsQuery,
  usePostAddFoodToMenuMutation,
  useGetCurrentMenuQuery,
} from "../../redux/api";

const generateNext7Days = () => {
  let days = [];
  for (let i = 0; i < 7; i++) {
    days.push(moment().add(i, "days").format("YYYY-MM-DD"));
  }
  return days;
};

const DailyNutrition = () => {
  const [selectedDate, setSelectedDate] = useState(generateNext7Days()[0]);
  const [meals, setMeals] = useState({ breakfast: [], lunch: [], dinner: [] });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [quantities, setQuantities] = useState({});
  const last7Days = generateNext7Days();

  const [addFood, { data: dailyMenu }] = usePostAddFoodToMenuMutation();
  const { data: userInfo, isLoading, isError } = useGetUserDetailsQuery();
  const [searchParams, setSearchParams] = useState({
    currentPage: 0,
    searchResult: "",
  });
  const { data: recipeData, refetch } = useGetRecipesQuery(
    {
      page: searchParams.currentPage,
      queryText: searchParams.searchResult,
    },
    {
      selectFromResult: ({ data, ...otherParams }) => ({
        data: itemsSelector.selectAll(data ?? itemsAdapter.getInitialState()),
        ...otherParams,
      }),
    }
  );

  const userId = userInfo?.id;
  const date = selectedDate;
  const { data: currenMenu } = useGetCurrentMenuQuery({ userId, date });

  const handleAddMeal = (foodItem) => {
    const updatedMeals = { ...meals };
    const recipeId = foodItem.id;
    const dishType = foodItem.dishTypes;
    const food = { userId, recipeId, dishType, date };

    addFood(food);
    const quantity = quantities[foodItem.id] || 1;
    const existingItemIndex = updatedMeals[selectedMealType].findIndex(
      (meal) => meal.id === foodItem.id
    );

    if (existingItemIndex >= 0) {
      updatedMeals[selectedMealType][existingItemIndex].quantity += quantity;
    } else {
      updatedMeals[selectedMealType] = [
        ...meals[selectedMealType],
        { ...foodItem, quantity },
      ];
    }

    setMeals(updatedMeals);
    setModalVisible(false);
    setQuantities({});
  };

  const handleOnSearch = (text) => {
    setSearchParams({ currentPage: 0, searchResult: text });
  };

  const renderMealItem: ListRenderItem<Recipe> = ({ item }) => {
    const totalQuantity = 1;
    const totalCalories = totalQuantity * item.calories;
    return (
      <View style={styles.mealItem}>
        <Text>
          {item.title} - {totalQuantity}
        </Text>
        <Text>Calories: {totalCalories} Kalori</Text>
        <Text>
          Carbs: {(parseInt(item.carbs) * totalQuantity).toFixed(2)}g, Protein:{" "}
          {(parseInt(item.protein) * totalQuantity).toFixed(2)}g, Fat:{" "}
          {(parseInt(item.fat) * totalQuantity).toFixed(2)}g
        </Text>
      </View>
    );
  };

  const renderFoodItem: ListRenderItem<Recipe> = ({ item }) => (
    <View style={styles.foodItemContainer}>
      <View style={styles.foodItem}>
        <Text>{item.title}</Text>
        <Text>{item.calories} kcal</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() =>
            setQuantities((prev) => ({
              ...prev,
              [item.id]: (prev[item.id] || 1) + 1,
            }))
          }
        >
          <Text style={styles.triangle}>▲</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantities[item.id] || 1}</Text>
        <TouchableOpacity
          onPress={() =>
            setQuantities((prev) => ({
              ...prev,
              [item.id]: Math.max((prev[item.id] || 1) - 1, 1),
            }))
          }
        >
          <Text style={styles.triangle}>▼</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handleAddMeal(item)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Daily Nutrition" />
      </Appbar.Header>

      <View style={styles.dateContainer}>
        <ScrollView horizontal={true}>
          {last7Days.map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dateButton,
                selectedDate === day && styles.selectedDateButton,
              ]}
              onPress={() => setSelectedDate(day)}
            >
              <Text style={styles.dateText}>
                {moment(day).format("MMM DD")}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {["breakfast", "lunch", "dinner"].map((mealType) => (
        <Card key={mealType} style={styles.card}>
          <TouchableOpacity
            onPress={() => {
              setSelectedMealType(mealType);
              setModalVisible(true);
            }}
          >
            <Card.Content style={styles.cardContent}>
              <View style={styles.titleContainer}>
                {mealType === "breakfast" && (
                  <Image
                    source={require("../../../assets/breakfast.png")}
                    style={styles.icon}
                  />
                )}
                {mealType === "lunch" && (
                  <Image
                    source={require("../../../assets/lunch.png")}
                    style={styles.icon}
                  />
                )}
                {mealType === "dinner" && (
                  <Image
                    source={require("../../../assets/dinner.png")}
                    style={styles.icon}
                  />
                )}
                <Title>
                  {mealType.charAt(0).toUpperCase() + mealType.slice(1)} -
                  <Text style={styles.totalCaloriesText}>
                    {" "}
                    Total Calories:{" "}
                    {meals[mealType].reduce(
                      (total, item) => total + item.quantity * item.calories,
                      0
                    )}
                  </Text>
                </Title>
              </View>
              <FlatList
                data={currenMenu}
                renderItem={renderMealItem}
                keyExtractor={(item, index) => item.id + index.toString()}
              />
            </Card.Content>
          </TouchableOpacity>
        </Card>
      ))}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <SearchBar onSearch={handleOnSearch} />
          <FlatList
            data={recipeData}
            renderItem={renderFoodItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {
              if (recipeData.length >= 10) {
                setSearchParams((prev) => ({
                  ...prev,
                  currentPage: prev.currentPage + 1,
                }));
              }
            }}
          />
          <CustomButton
            text="Cancel"
            onPress={() => setModalVisible(false)}
            backgroundColor=""
            color=""
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  totalCaloriesText: {
    fontSize: 12,
    color: "#000",
  },
  dateButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 19,
  },
  selectedDateButton: {
    backgroundColor: "#8883f0",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  card: {
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: screenWidth - 20,
    alignSelf: "center",
  },
  cardContent: {
    minHeight: 60,
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

export default DailyNutrition;
