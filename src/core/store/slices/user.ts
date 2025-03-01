/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserSlice = {
  isOnboarded: boolean;
  isGitNotificationsEnabled: boolean | undefined;
};

const initialState: UserSlice = {
  isOnboarded: false,
  isGitNotificationsEnabled: undefined,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsOnboarded(state, action: PayloadAction<boolean>) {
      state.isOnboarded = action.payload;
    },
    setIsGitNotificationsEnabled(state, action: PayloadAction<boolean>) {
      state.isGitNotificationsEnabled = action.payload;
    },
  },
});

export const { setIsOnboarded, setIsGitNotificationsEnabled } = user.actions;

export default user.reducer;
