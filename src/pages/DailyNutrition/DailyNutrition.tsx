import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
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
import styles from "./DailyNutrition.styles";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addItem, setTotalCalories } from "../../redux/menuSlice";

import {
  useGetRecipesQuery,
  itemsAdapter,
  itemsSelector,
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
const mealTypes = ["breakfast", "lunch", "dinner", "dessert", "others"];

const DailyNutrition = () => {
  const [selectedDate, setSelectedDate] = useState(generateNext7Days()[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [quantities, setQuantities] = useState({});
  const last7Days = generateNext7Days();

  const [addFood] = usePostAddFoodToMenuMutation();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const [searchParams, setSearchParams] = useState({
    currentPage: 0,
    searchResult: "",
  });
  const { data: recipeData } = useGetRecipesQuery(
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
  const {
    data: currentMenu,
    isLoading: menuLoading,
    isError: menuError,
    refetch: refetchMenu,
  } = useGetCurrentMenuQuery({ userId, date });

  const handleAddMeal = useCallback(
    (foodItem) => {
      const recipeId = foodItem.id;
      const dishType = selectedMealType;
      const food = { userId, recipeId, dishType, date };

      addFood(food).then(() => {
        setModalVisible(false);
        setQuantities({});
        dispatch(addItem({ item: foodItem, date }));
        refetchMenu();
      });
    },
    [addFood, userId, selectedMealType, date, refetchMenu]
  );

  useEffect(() => {
    if (currentMenu) {
      dispatch(setTotalCalories({ items: currentMenu, date }));
    }
  }, [currentMenu, date]);

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

  const renderDateItem: ListRenderItem<string> = ({ item: day }) => (
    <TouchableOpacity
      key={day}
      style={[
        styles.dateButton,
        selectedDate === day && styles.selectedDateButton,
      ]}
      onPress={() => setSelectedDate(day)}
    >
      <Text style={styles.dateText}>{moment(day).format("MMM DD")}</Text>
    </TouchableOpacity>
  );

  if (menuLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Daily Nutrition</Text>
      <View style={styles.dateContainer}>
        <FlatList
          data={last7Days}
          horizontal={true}
          renderItem={renderDateItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={mealTypes}
        renderItem={({ item: mealType }) => (
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
                  {mealType === "dessert" && (
                    <Image
                      source={require("../../../assets/cupcake.png")}
                      style={styles.icon}
                    />
                  )}
                  {mealType === "others" && (
                    <Image
                      source={require("../../../assets/candies.png")}
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
                      {currentMenu
                        ?.filter((item) => item.dishTypes === mealType)
                        .reduce((total, item) => total + item.calories, 0) || 0}
                    </Text>
                  </Title>
                </View>
                <FlatList
                  data={currentMenu?.filter(
                    (item) => item.dishTypes === mealType
                  )}
                  renderItem={renderMealItem}
                  keyExtractor={(item, index) => item.id + index.toString()}
                />
              </Card.Content>
            </TouchableOpacity>
          </Card>
        )}
        keyExtractor={(item) => item}
      />

      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <SearchBar onSearch={handleOnSearch} />
          <FlatList
            data={recipeData}
            renderItem={renderFoodItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            style={{ padding: 20 }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
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
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default DailyNutrition;
