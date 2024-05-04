import type { Ingredient, Recipe } from "../types";

export interface RecipeResponseType {
  content: Recipe[];
}

export interface AuthRequestType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  code: number;
  message: string;
  result: string;
}
