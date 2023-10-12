import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
        state.value = true;
      
    },
    logout: (state) => {
      state.value = false;
    
  },
  },
});

export const { login, logout } = userSlice.actions;

export const selectLogin = (state) => state.user.value;

export default userSlice.reducer;
