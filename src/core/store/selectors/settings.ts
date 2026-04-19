import { RootState } from "store/configure";

export const selectAllowNotifications = (state: RootState) =>
  state.settings.allowNotifications;

export const selectHidePRsAfterTwoMonths = (state: RootState) =>
  state.settings.hidePRsAfterTwoMonths;

export const selectGroupPRsBy = (state: RootState) => state.settings.groupPRsBy;

export const selectHidePRsApprovedByMe = (state: RootState) =>
  state.settings.hidePRsApprovedByMe;

export const selectShowRelevantTab = (state: RootState) =>
  state.settings.hidePRsAfterTwoMonths || state.settings.hidePRsApprovedByMe;

export const selectHideDraftPRs = (state: RootState) =>
  state.settings.hideDraftPRs;

export const selectCompactCards = (state: RootState) =>
  state.settings.compactCards;

export const selectShowIssues = (state: RootState) => state.settings.showIssues;

export const selectHideIssuesAfterTwoMonths = (state: RootState) =>
  state.settings.hideIssuesAfterTwoMonths;
