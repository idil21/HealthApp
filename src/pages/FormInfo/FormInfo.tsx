import React from "react";
import { Formik, ErrorMessage } from "formik";
import {
  TextInput,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import SubmitButton from "../../components/LoginButton";
import styles from "./FormInfo.styles";
import DropdownMenu from "../../components/DropdownMenu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Yup from "yup";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import {
  ActivityLevel,
  DietPreferences,
  ExerciseHabits,
  Sex,
  HealthGoals,
  initialInfoFormValues,
  infoValidationSchema,
} from "./formInfoHelper";

import { usePostRegisterMutation } from "../../redux/api";

function FormInfo({ navigation, route }) {
  const registerValues = route.params?.registerValues;
  const [Register, { isLoading, isError }] = usePostRegisterMutation();

  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });
  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <SafeAreaView style={styles.outer_container}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.title}>
                Let's complete your profile information
              </Text>
              <Text>
                <Icon name="heart" size={30} color="rgb(136, 131, 240)" />
              </Text>
            </View>
            <Formik
              validationSchema={infoValidationSchema}
              initialValues={initialInfoFormValues}
              onSubmit={(values) => {
                const userInfo = {
                  ...registerValues,
                  ...values,
                };

                Register(userInfo);
                console.log(userInfo);
              }}
            >
              {({ handleSubmit, handleChange, values, setValues }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Height"
                    inputMode="decimal"
                    value={values.height}
                    onChangeText={handleChange("height")}
                  />
                  <ErrorMessage name="height" component={Text} />
                  <TextInput
                    style={styles.input}
                    placeholder="Weight"
                    inputMode="decimal"
                    value={values.weight}
                    onChangeText={handleChange("weight")}
                  />
                  <ErrorMessage name="weight" component={Text} />
                  <TextInput
                    style={styles.input}
                    placeholder="Age"
                    inputMode="decimal"
                    value={values.age}
                    onChangeText={handleChange("age")}
                  />
                  <ErrorMessage name="age" component={Text} />

                  <DropdownMenu
                    data={Sex}
                    placeholder="Sex"
                    onSelect={(selectedItem) => {
                      setValues({
                        ...values,
                        sex: selectedItem.value,
                      });
                    }}
                  />
                  <ErrorMessage
                    name="sex"
                    render={(msg) => <Text style={styles.error}>{msg}</Text>}
                  />

                  <DropdownMenu
                    data={HealthGoals}
                    placeholder="Main Goal"
                    onSelect={(selectedItem) => {
                      setValues({
                        ...values,
                        healthGoals: selectedItem.value,
                      });
                    }}
                  />
                  <ErrorMessage
                    name="healthGoals"
                    render={(msg) => <Text style={styles.error}>{msg}</Text>}
                  />

                  <DropdownMenu
                    data={ActivityLevel}
                    placeholder="Activity Level"
                    onSelect={(selectedItem) => {
                      setValues({
                        ...values,
                        activityLevel: selectedItem.title,
                      });
                    }}
                  />
                  <ErrorMessage
                    name="activityLevel"
                    render={(msg) => <Text style={styles.error}>{msg}</Text>}
                  />
                  <DropdownMenu
                    data={DietPreferences}
                    placeholder="Diet Preferences"
                    onSelect={(selectedItem) => {
                      setValues({
                        ...values,
                        dietPreferences: selectedItem.value,
                      });
                    }}
                  />
                  <DropdownMenu
                    data={ExerciseHabits}
                    placeholder="Exercise Habits"
                    onSelect={(selectedItem) => {
                      setValues({
                        ...values,
                        exerciseHabits: selectedItem.title,
                      });
                    }}
                  />

                  <SubmitButton text="Submit" onPress={handleSubmit} />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FormInfo;
