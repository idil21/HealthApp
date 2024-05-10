import React from "react";
import { Formik,ErrorMessage  } from "formik";
import { TextInput, Text, View, Pressable, ScrollView } from "react-native";
import SubmitButton from '../../components/LoginButton';
import styles from "./FormInfo.styles";
import DropdownMenu from '../../components/DropdownMenu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from "yup";
import {
  useFonts,
  Satisfy_400Regular,
} from "@expo-google-fonts/satisfy";

const ActivityLevel = [
  { title: 'Low Activity', icon: 'play' },
  { title: 'Moderate Activity', icon: 'forward' },
  { title: 'High Activity', icon: 'fast-forward' },
];
const DietPreferences = [
  { title: 'Vegetarian', icon: 'leaf' },
  { title: 'Vegan', icon: 'leaf' },
  { title: 'Gluten-free', icon: 'food-off' },
  // Other options can be added here
];

const HealthConditions = [
  { title: 'Diabetes', icon: 'medication-liquid' },
  { title: 'Hypertension', icon: 'monitor-heart' },
  { title: 'Cholesterol', icon: 'blood-drop' },
  // Other options can be added here
];

const ExerciseHabits = [
  { title: '1-2 times per week', icon: 'dumbbell' },
  { title: '3-4 times per week', icon: 'dumbbell' },
  { title: 'Every day', icon: 'dumbbell' },
  // Other options can be added here
];
const validationSchema = Yup.object().shape({
  height: Yup.number()
    .required("Height is required")
    .positive("Height must be a positive number")
    .integer("Height must be an integer"),
  weight: Yup.number()
    .required("Weight is required")
    .positive("Weight must be a positive number")
    .integer("Weight must be an integer"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  targetWeight: Yup.number()
    .required("Target weight is required")
    .positive("Target weight must be a positive number")
    .integer("Target weight must be an integer"),
  activityLevel: Yup.string().required('Activity Level is required'),
  dietPreferences: Yup.string().required('Diet Preferences is required'),
  healthConditions: Yup.string().required('Health Conditions is required'),
  exerciseHabits: Yup.string().required('Exercise Habits is required'),
});
function FormInfo() {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });
  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <ScrollView>
        <Formik
          initialValues={{
            height: "",
            weight: "",
            age: "",
            gender: "",
            activityLevel: "",
            targetWeight: "",
            dietPreferences: "",
            healthConditions: "",
            exerciseHabits: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, values, setValues }) => (
            <View style={styles.container}>
              
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Satisfy_400Regular', color: 'rgb(136, 131, 240)', fontSize: 30}}>
                  Let's complete your profile information
                </Text>
                <Text><Icon name="heart" size={30} color='rgb(136, 131, 240)' /></Text>
              </View>
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
              <TextInput
                style={styles.input}
                placeholder="Target Weight"
                inputMode="decimal"
                value={values.targetWeight}
                onChangeText={handleChange("targetWeight")}
              />
              <ErrorMessage name="targetWeight" render={(msg) => <Text style={styles.error}>{msg}</Text>} />
              <DropdownMenu
                data={ActivityLevel}
                placeholder="Activity Level"
                onSelect={(selectedItem) => {
                  setValues({ ...values, activityLevel: selectedItem.title });
                }} />
              <ErrorMessage name="activityLevel" render={(msg) => <Text style={styles.error}>{msg}</Text>} />
              <DropdownMenu
                data={DietPreferences}
                placeholder="Diet Preferences"
                onSelect={(selectedItem) => {
                  setValues({ ...values, dietPreferences: selectedItem.title });
                }} />
              <DropdownMenu
                data={HealthConditions}
                placeholder="Health Conditions"
                onSelect={(selectedItem) => {
                  setValues({ ...values, healthConditions: selectedItem.title });
                }} />
              <DropdownMenu
                data={ExerciseHabits}
                placeholder="Exercise Habits"
                onSelect={(selectedItem) => {
                  setValues({ ...values, exerciseHabits: selectedItem.title });
                }} />

              <SubmitButton text="Submit" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
      
    );
  }
  
};

export default FormInfo;
