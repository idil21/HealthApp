import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RecipeResponseType } from "./types";
import { Ingredient, SurveyResponse } from "../types";

const URL = "http://127.0.0.1:8080";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),

  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: ({ page = 0, queryText = "", size = 10, sort = "title" }) => ({
        url: "/recipe",
        params: { page, text: queryText, size, sort },
      }),
      transformResponse: (response: RecipeResponseType) => response.content,
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
  }),
});

export const {
  useGetRecipesQuery,
  useGetIngredientsByRecipeIdQuery,
  usePostSurveyResponseMutation,
} = api;
