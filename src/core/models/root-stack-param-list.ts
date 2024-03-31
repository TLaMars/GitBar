export type RootStackParamList = {
  Dashboard: undefined;
  OnboardingWelcome: undefined;
  OnboardingAddAccount: undefined;
  RegisterGitHub: {
    code: string;
  };
  RegisterGitLab: undefined;
  Settings: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
