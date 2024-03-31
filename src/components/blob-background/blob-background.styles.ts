import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ colors }) => ({
    wrapper: {
      flex: 1,
      backgroundColor: colors.background,
      width: "100%",
      height: "100%",
    },
    blobOne: {
      position: "absolute",
      width: 500,
      height: 500,
      opacity: 0.7,
      left: 300,
      top: 100,
    },
    blobTwo: {
      width: 500,
      height: 500,
      position: "absolute",
      opacity: 0.7,
      top: -170,
      left: -170,
    },
  }));

export default useStyles;
