import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ borderRadiuses, colors, spacing }) => ({
    card: {
      position: "relative",
      paddingVertical: spacing(2),
      flexDirection: "row",
      alignItems: "center",
    },
    border: {
      borderBottomColor: colors.backgroundSurface,
      borderBottomWidth: 1,
    },
    info: {
      marginLeft: spacing(3),
      marginBottom: spacing(0.5),
    },
    right: {
      marginLeft: "auto",
      gap: spacing(2),
      flexDirection: "row",
      alignItems: "center",
    },
    type: {
      backgroundColor: colors.background,
      bottom: -4,
      right: -4,
      zIndex: 1,
      position: "absolute",
      borderRadius: borderRadiuses.round,
    },
  }));
export default useStyles;
