/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GroupPullRequestsBy } from "models/pull-request";

const initialState = {
  hidePRsAfterTwoMonths: false,
  groupPRsBy: GroupPullRequestsBy.REPO,
};

export type DebugSettingsSlice = typeof initialState;

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setHidePRsAfterTwoMonths(state, action: PayloadAction<boolean>) {
      state.hidePRsAfterTwoMonths = action.payload;
    },
    setGroupPRsBy(state, action: PayloadAction<GroupPullRequestsBy>) {
      state.groupPRsBy = action.payload;
    },
  },
});

export const { setHidePRsAfterTwoMonths, setGroupPRsBy } = settings.actions;

export default settings.reducer;
