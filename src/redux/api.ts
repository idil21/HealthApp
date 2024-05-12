import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  RecipeResponseType,
  AuthRequestType,
  LoginResponseType,
  UserDetailsResponseType,
  RecipesRequestType,
} from "./types";
import { Ingredient, SurveyResponse, Recipe, User } from "../types";
import { EntityState, createEntityAdapter } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "http://127.0.0.1:8080";

const itemsAdapter = createEntityAdapter({
  selectId: (item: Recipe) => item.id,
});

const itemsSelector = itemsAdapter.getSelectors();

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");

      if (token !== null && token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRecipes: builder.query<EntityState<Recipe, number>, RecipesRequestType>({
      query: (params = {}) => ({
        url: "/recipe",
        params: {
          page: params.page || 0,
          text: params.queryText || "",
          size: params.size || 10,
          sort: params.sort || "title",
          vegan: params.vegan,
          vegetarian: params.vegetarian,
          dairyFree: params.dairyFree,
          glutenFree: params.glutenFree,
          dishTypes: params.dishTypes,
        },
      }),
      transformResponse: (response: RecipeResponseType) => {
        console.log(response.content);
        return itemsAdapter.addMany(
          itemsAdapter.getInitialState(),
          response.content
        );
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        //return `${endpointName}-${queryArgs?.queryText}-${queryArgs?.size}-${queryArgs?.sort}`;
        return endpointName;
      },
      merge: (currentState, incomingState, { arg: { page } }) => {
        if (page === 0) {
          return itemsAdapter.setAll(
            currentState,
            itemsSelector.selectAll(incomingState)
          );
        } else {
          itemsAdapter.addMany(
            currentState,
            itemsSelector.selectAll(incomingState)
          );
        }
      },
    }),
    getIngredientsByRecipeId: builder.query<Ingredient[], number>({
      query: (recipeId) => `/recipeIngredients/${recipeId}`,
    }),
    postSurveyResponse: builder.mutation<void, SurveyResponse>({
      query: (surveyResponse) => ({
        url: "/surveyResponse",
        method: "POST",
        body: JSON.stringify(surveyResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    postLogin: builder.mutation<LoginResponseType, AuthRequestType>({
      query: ({ email, password }) => ({
        url: "/user/authenticate",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          await AsyncStorage.removeItem("token");
          const { data } = await queryFulfilled;

          AsyncStorage.setItem("token", data.result);
        } catch (error) {
          console.error("Error during login:", error);
        }
      },
    }),
    getUserDetails: builder.query<User, void>({
      query: () => "/user/details",
      transformResponse: (response: UserDetailsResponseType) => {
        console.log("result =", response.result);
        return response.result;
      },
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetIngredientsByRecipeIdQuery,
  usePostSurveyResponseMutation,
  usePostLoginMutation,
  useGetUserDetailsQuery,
} = api;

export { itemsSelector, itemsAdapter };

export default api;
