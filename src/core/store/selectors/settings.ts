import { RootState } from "store/configure";

export const selectHidePRsAfterTwoMonths = (state: RootState) =>
  state.settings.hidePRsAfterTwoMonths;

export const selectGroupPRsBy = (state: RootState) => state.settings.groupPRsBy;

export const selectHidePRsApprovedByMe = (state: RootState) =>
  state.settings.hidePRsApprovedByMe;

export const selectShowRelevantTab = (state: RootState) =>
  state.settings.hidePRsAfterTwoMonths || state.settings.hidePRsApprovedByMe;
