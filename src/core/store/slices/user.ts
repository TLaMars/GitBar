/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppModule from "modules/app-module";

type UserSlice = {
  isOnboarded: boolean;
  lastSeenWhatsNewVersion: string | null;
};

const initialState: UserSlice = {
  isOnboarded: false,
  lastSeenWhatsNewVersion: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsOnboarded(state, action: PayloadAction<boolean>) {
      state.isOnboarded = action.payload;
      if (action.payload) {
        state.lastSeenWhatsNewVersion = AppModule.APP_VERSION;
      }
    },
    setLastSeenWhatsNewVersion(state, action: PayloadAction<string | null>) {
      state.lastSeenWhatsNewVersion = action.payload;
    },
  },
});

export const { setIsOnboarded, setLastSeenWhatsNewVersion } = user.actions;

export default user.reducer;
