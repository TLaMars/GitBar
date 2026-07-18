export type Section<T> = {
  title: string;
  data: T[];
  hideTitle?: boolean;
  // Renders as a disclosure that starts collapsed (used by "Waiting on others"
  // in the Needs-you tab). The header shows a count and toggles its rows.
  collapsible?: boolean;
};
