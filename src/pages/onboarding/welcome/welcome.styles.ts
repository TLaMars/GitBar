import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing }) => ({
    container: {
      gap: spacing(2),
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 72,
      height: 72,
      alignSelf: "center",
    },
  }));

export default useStyles;
