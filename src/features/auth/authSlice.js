import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromStorage } from "../../utils/authStorage";

const initialState = {
  users: getUsersFromStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
