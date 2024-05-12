import * as Yup from "yup";

export interface RegisterFormValuesType {
  name: string;
  email: string;
  password: string;
}

export const initialRegisterFormValues: RegisterFormValuesType = {
  name: "",
  email: "",
  password: "",
};

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
