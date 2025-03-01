/* eslint-disable import/prefer-default-export */
import { RootState } from "store/configure";

export const selectIsOnboarded = (state: RootState) => state.user.isOnboarded;

export const selectIsGitNotificationsEnabled = (state: RootState) =>
  state.user.isGitNotificationsEnabled;
