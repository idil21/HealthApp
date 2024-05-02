import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RecipeResponseType } from "./types";
import { Ingredient, SurveyResponse, Recipe } from "../types";
import { createEntityAdapter } from "@reduxjs/toolkit";

const URL = "http://127.0.0.1:8080";

const itemsAdapter = createEntityAdapter({
  selectId: (item: Recipe) => item.id,
});

const itemsSelector = itemsAdapter.getSelectors();

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
  }),
});

export const {
  useGetRecipesQuery,
  useGetIngredientsByRecipeIdQuery,
  usePostSurveyResponseMutation,
} = api;

export { itemsSelector, itemsAdapter };

export default api;
