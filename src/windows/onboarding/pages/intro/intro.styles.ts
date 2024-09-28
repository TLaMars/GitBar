import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(() => ({
    wrapper: {
      flex: 1,
      justifyContent: "space-between",
    },
    image: {
      width: "100%",
      borderRadius: 8,
      height: undefined,
      aspectRatio: 315 / 170,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
  }));
export default useStyles;
