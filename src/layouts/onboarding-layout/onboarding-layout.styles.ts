import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing }) => ({
    container: {
      flex: 1,
      paddingHorizontal: spacing(9),
      paddingTop: spacing(16),
      paddingBottom: spacing(9),
    },
  }));
export default useStyles;
