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
export interface SurveyResultType {
  code: number;
  message: string;
  result: {
    diabetes: number;
    obesity: number;
  };
}
export interface UserDetailsResponseType {
  code: number;
  message: string;
  result: User;
}

export interface currentMenuRequestType {
  userId: number;
  date: string;
}

export interface DailyMenuResponseType {
  code: number;
  message: string;
  result: Recipe[];
}

export interface RecipesRequestType {
  page?: number;
  queryText?: string;
  size?: number;
  sort?: string;
  vegan?: boolean;
  vegetarian?: boolean;
  dairyFree?: boolean;
  glutenFree?: boolean;
  dishTypes?: string[];
}
