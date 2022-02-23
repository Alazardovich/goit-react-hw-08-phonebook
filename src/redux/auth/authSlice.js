import { createSlice } from "@reduxjs/toolkit";
import authOperations from "../auth/authAsyncThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]: (state, action) => {
      state.token = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
