import type { Recipe } from "../../types";

export interface RecipeCardProps {
  recipeData: Recipe;
  onSelect: (recipe: Recipe) => void;
}
