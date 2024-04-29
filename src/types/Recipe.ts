export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  dishTypes: string;
  instructions: string;
  vegan: boolean;
  vegetarian: boolean;
  dairyFree: boolean;
  glutenFree: boolean;
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
}
