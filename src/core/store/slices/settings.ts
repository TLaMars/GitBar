/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Appearance from "models/appearance";
import { GroupPullRequestsBy } from "models/pull-request";

const initialState = {
  allowNotifications: false,
  appearance: Appearance.Dark,
  groupPRsBy: GroupPullRequestsBy.REPO,
  hidePRsApprovedByMe: false,
  hidePRsAfterTwoMonths: false,
  launchAtLogin: false,
};

export type DebugSettingsSlice = typeof initialState;

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAllowNotifications(state, action: PayloadAction<boolean>) {
      state.allowNotifications = action.payload;
    },
    setHidePRsAfterTwoMonths(state, action: PayloadAction<boolean>) {
      state.hidePRsAfterTwoMonths = action.payload;
    },
    setGroupPRsBy(state, action: PayloadAction<GroupPullRequestsBy>) {
      state.groupPRsBy = action.payload;
    },
    setHidePRsApprovedByMe(state, action: PayloadAction<boolean>) {
      state.hidePRsApprovedByMe = action.payload;
    },
    setAppearance(state, action: PayloadAction<Appearance>) {
      state.appearance = action.payload;
    },
    setLaunchAtLogin(state, action: PayloadAction<boolean>) {
      state.launchAtLogin = action.payload;
    },
  },
});

export const {
  setAllowNotifications,
  setHidePRsAfterTwoMonths,
  setGroupPRsBy,
  setHidePRsApprovedByMe,
  setAppearance,
  setLaunchAtLogin,
} = settings.actions;

export default settings.reducer;
