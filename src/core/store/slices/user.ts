/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserSlice = {
  isOnboarded: boolean;
};

const initialState: UserSlice = {
  isOnboarded: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsOnboarded(state, action: PayloadAction<boolean>) {
      state.isOnboarded = action.payload;
    },
  },
});

export const { setIsOnboarded } = user.actions;

export default user.reducer;
