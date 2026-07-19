/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type HiddenPullRequest = {
  id: string;
  repoName: string;
};

// A snooze either lasts until a fixed moment ("for 1 day") or until the PR sees
// new activity ("until updated" — compared against the updatedAt captured now).
export type SnoozeUntil =
  | { type: "date"; until: string }
  | { type: "updated"; updatedAt: string };

export type SnoozedPullRequest = {
  id: string;
  repoName: string;
  snooze: SnoozeUntil;
};

type InitialState = {
  hidden: HiddenPullRequest[];
  snoozed: SnoozedPullRequest[];
};

const initialState: InitialState = {
  hidden: [],
  snoozed: [],
};

export type DebugSettingsSlice = typeof initialState;

const isSamePullRequest =
  (id: string, repoName: string) => (entry: { id: string; repoName: string }) =>
    entry.id === id && entry.repoName === repoName;

const settings = createSlice({
  name: "pullRequests",
  initialState,
  reducers: {
    setPullRequestHidden(state, action: PayloadAction<HiddenPullRequest>) {
      state.hidden = [...state.hidden, action.payload];
    },
    setPullRequestVisible(
      state,
      action: PayloadAction<{ id: string; repoName: string }>,
    ) {
      const { id, repoName } = action.payload;
      state.hidden = state.hidden.filter(
        (entry) => !isSamePullRequest(id, repoName)(entry),
      );
    },
    resetHiddenPullRequests(state) {
      state.hidden = [];
    },
    snoozePullRequest(state, action: PayloadAction<SnoozedPullRequest>) {
      const { id, repoName } = action.payload;
      // Replace any existing snooze for the same PR.
      state.snoozed = [
        ...state.snoozed.filter(
          (entry) => !isSamePullRequest(id, repoName)(entry),
        ),
        action.payload,
      ];
    },
    unsnoozePullRequest(
      state,
      action: PayloadAction<{ id: string; repoName: string }>,
    ) {
      const { id, repoName } = action.payload;
      state.snoozed = state.snoozed.filter(
        (entry) => !isSamePullRequest(id, repoName)(entry),
      );
    },
    resetSnoozedPullRequests(state) {
      state.snoozed = [];
    },
  },
});

export const {
  setPullRequestHidden,
  setPullRequestVisible,
  resetHiddenPullRequests,
  snoozePullRequest,
  unsnoozePullRequest,
  resetSnoozedPullRequests,
} = settings.actions;

export default settings.reducer;
