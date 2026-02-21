export type RootStackParamList = {
  Dashboard: undefined;
  AddAccount?: {
    showBackButton: boolean;
  };
  Issues: undefined;
  Notifications: undefined;
  RegisterGitHub: {
    code: string;
  };
  RegisterGitLab:
    | { renewAccountId?: string; domain?: string }
    | undefined;
  RegisterAzure:
    | { renewAccountId?: string; organization?: string }
    | undefined;
  Settings: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
