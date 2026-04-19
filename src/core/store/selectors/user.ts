import { RootState } from "store/configure";

export const selectIsOnboarded = (state: RootState) => state.user.isOnboarded;

export const selectLastSeenWhatsNewVersion = (state: RootState) =>
  state.user.lastSeenWhatsNewVersion;
