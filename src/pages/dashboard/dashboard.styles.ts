import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing }) => ({
    container: {
      gap: spacing(2),
      flex: 1,
      flexDirection: "column",
    },
    list: {
      gap: spacing(2),
    },
  }));
export default useStyles;
