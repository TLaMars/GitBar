/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GroupPullRequestsBy } from "models/pull-request";

const initialState = {
  allowNotifications: false,
  groupPRsBy: GroupPullRequestsBy.REPO,
  hidePRsApprovedByMe: false,
  hidePRsAfterTwoMonths: false,
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
  },
});

export const {
  setAllowNotifications,
  setHidePRsAfterTwoMonths,
  setGroupPRsBy,
  setHidePRsApprovedByMe,
} = settings.actions;

export default settings.reducer;
