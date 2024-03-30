import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing }) => ({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginRight: spacing(16),
    },
  }));
export default useStyles;
