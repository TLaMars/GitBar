import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing }) => ({
    container: {
      paddingTop: spacing(2.5),
      gap: spacing(2),
      flex: 1,
      flexDirection: "column",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerLeft: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    headerRight: {
      width: 180,
    },
    poller: {
      marginLeft: spacing(2),
      flexDirection: "row",
      alignItems: "center",
      gap: spacing(1),
    },
  }));
export default useStyles;
