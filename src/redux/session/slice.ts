import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { api } from "../api";

interface AuthState {
  userInfo: User | null;
  sessionPending: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  sessionPending: false,
  isAuthenticated: false,
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      state.sessionPending = false;
    },
    setCredentials: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
      console.log("state UserInfo:", state.userInfo.name);
    },
  },
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

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
