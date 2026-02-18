import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuth = false;
    },
  },
});

export const { addUser, login, logout } = authSlice.actions;
export default authSlice.reducer;
