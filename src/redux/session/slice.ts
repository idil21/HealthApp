import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { api } from "../api";

const initialState = {
  sessionPending: false,
  isAuthenticated: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.postLogin.matchPending, (state, action) => {
        state.sessionPending = true;
        state.isAuthenticated = false;
      })
      .addMatcher(api.endpoints.postLogin.matchFulfilled, (state, action) => {
        state.sessionPending = false;
        state.isAuthenticated = true;
      })
      .addMatcher(api.endpoints.postLogin.matchRejected, (state, action) => {
        state.sessionPending = false;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
