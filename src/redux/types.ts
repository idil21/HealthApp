import type { Ingredient, Recipe, User } from "../types";

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

export interface UserDetailsResponseType {
  code: number;
  message: string;
  result: User;
}
