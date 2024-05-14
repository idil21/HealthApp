import * as Yup from "yup";

export const ActivityLevel = [
  { title: "Low Activity", icon: "play" },
  { title: "Moderate Activity", icon: "forward" },
  { title: "High Activity", icon: "fast-forward" },
];

export const DietPreferences = [
  { title: "Vegetarian", icon: "leaf" },
  { title: "Vegan", icon: "leaf" },
  { title: "Gluten-free", icon: "food-off" },
  { title: "Dairy-free", icon: "cup-off" },
  { title: "None", icon: "close" },
];

export const ExerciseHabits = [
  { title: "1-2 times per week", icon: "dumbbell" },
  { title: "3-4 times per week", icon: "dumbbell" },
  { title: "Every day", icon: "dumbbell" },
  { title: "None", icon: "close" },
];

export const HealthGoals = [
  { title: "Get fit", icon: "dumbbell" },
  { title: "Be active", icon: "heart" },
  { title: "Be healthy", icon: "stethoscope" },
  { title: "Find balance", icon: "meditation" },
];

export const Sex = [
  { title: "Female", value: 0, icon: "human-female" },
  { title: "Male", value: 1, icon: "human-male" },
];

export interface InfoFormValuesType {
  height: string;
  weight: string;
  age: string;
  sex: number;
  healthGoals: string;
  activityLevel: string;
  dietPreferences: string;
  exerciseHabits: string;
}

export const initialInfoFormValues: InfoFormValuesType = {
  height: "",
  weight: "",
  age: "",
  sex: -1,
  healthGoals: "",
  activityLevel: "",
  dietPreferences: "",
  exerciseHabits: "",
};

export const infoValidationSchema = Yup.object().shape({
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
  sex: Yup.string().required("Sex is required"),
  activityLevel: Yup.string().required("Activity Level is required"),
  dietPreferences: Yup.string().required("Diet Preferences is required"),
  exerciseHabits: Yup.string().required("Exercise Habits is required"),
  healthGoals: Yup.string().required("Health Goal is required"),
});
