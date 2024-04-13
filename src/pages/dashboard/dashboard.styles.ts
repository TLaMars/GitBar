import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing }) => ({
    container: {
      paddingTop: spacing(2.5),
      gap: spacing(2),
      flex: 1,
      flexDirection: "column",
    },
    list: {
      gap: spacing(2),
      paddingBottom: spacing(2.5),
    },
    header: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    poller: {
      marginLeft: spacing(2),
      flexDirection: "row",
      alignItems: "center",
      gap: spacing(1),
    },
  }));
export default useStyles;
