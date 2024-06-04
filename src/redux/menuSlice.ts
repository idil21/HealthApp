import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types";

interface MenuState {
  items: { [date: string]: Recipe[] };
  totalCalories: { [date: string]: number };
}

const initialState: MenuState = {
  items: {},
  totalCalories: {},
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ item: Recipe; date: string }>) => {
      const { item, date } = action.payload;
      if (!state.items[date]) {
        state.items[date] = [];
        state.totalCalories[date] = 0;
      }
      state.items[date].push(item);
      state.totalCalories[date] += item.calories;
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: number; date: string }>
    ) => {
      const { id, date } = action.payload;
      const index = state.items[date]?.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.totalCalories[date] -= state.items[date][index].calories;
        state.items[date].splice(index, 1);
      }
    },
    clearMenu: (state, action: PayloadAction<string>) => {
      const date = action.payload;
      state.items[date] = [];
      state.totalCalories[date] = 0;
    },
    setTotalCalories: (
      state,
      action: PayloadAction<{ items: Recipe[]; date: string }>
    ) => {
      const { items, date } = action.payload;
      state.items[date] = items;
      state.totalCalories[date] = items.reduce(
        (total, item) => total + item.calories,
        0
      );
    },
  },
});

export const { addItem, removeItem, clearMenu, setTotalCalories } =
  menuSlice.actions;

export default menuSlice.reducer;
