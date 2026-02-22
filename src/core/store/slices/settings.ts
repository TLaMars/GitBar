/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GroupPullRequestsBy } from "models/pull-request";

type SettingsState = {
  allowNotifications: boolean;
  groupPRsBy: GroupPullRequestsBy;
  hidePRsApprovedByMe: boolean;
  hidePRsAfterTwoMonths: boolean;
  hideDraftPRs: boolean;

  showIssues: boolean | undefined;
  hideIssuesAfterTwoMonths: boolean;
};

const initialState: SettingsState = {
  allowNotifications: false,
  groupPRsBy: GroupPullRequestsBy.REPO,
  hidePRsApprovedByMe: true,
  hidePRsAfterTwoMonths: true,
  hideDraftPRs: false,

  showIssues: undefined,
  hideIssuesAfterTwoMonths: false,
};

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
    setHideDraftPRs(state, action: PayloadAction<boolean>) {
      state.hideDraftPRs = action.payload;
    },

    setShowIssues(state, action: PayloadAction<boolean>) {
      state.showIssues = action.payload;
    },
    setHideIssuesAfterTwoMonths(state, action: PayloadAction<boolean>) {
      state.hideIssuesAfterTwoMonths = action.payload;
    },
  },
});

export const {
  setAllowNotifications,
  setHidePRsAfterTwoMonths,
  setGroupPRsBy,
  setHidePRsApprovedByMe,
  setHideDraftPRs,
  setShowIssues,
  setHideIssuesAfterTwoMonths,
} = settings.actions;

export default settings.reducer;
