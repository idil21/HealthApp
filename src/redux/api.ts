import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  RecipeResponseType,
  AuthRequestType,
  LoginResponseType,
} from "./types";
import { Ingredient, SurveyResponse, Recipe, User } from "../types";
import { createEntityAdapter } from "@reduxjs/toolkit";
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
    getRecipes: builder.query({
      query: ({ page = 0, queryText = "", size = 10, sort = "title" }) => ({
        url: "/recipe",
        params: { page, text: queryText, size, sort },
      }),
      transformResponse: (response: RecipeResponseType) => {
        return itemsAdapter.addMany(
          itemsAdapter.getInitialState(),
          response.content
        );
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page;
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        //return `${endpointName}-${queryArgs?.queryText}-${queryArgs?.size}-${queryArgs?.sort}`;
        return endpointName;
      },
      merge: (currentState, incomingState) => {
        itemsAdapter.addMany(
          currentState,
          itemsSelector.selectAll(incomingState)
        );
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
          const { data } = await queryFulfilled;
          console.log("yeto", data.result);
          AsyncStorage.setItem("token", data.result);
        } catch (error) {
          console.error("Error during login:", error);
        }
      },
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetIngredientsByRecipeIdQuery,
  usePostSurveyResponseMutation,
  usePostLoginMutation,
} = api;

export { itemsSelector, itemsAdapter };

export default api;
