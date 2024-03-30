import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing, colors, borderRadiuses }) => ({
    card: {
      backgroundColor: colors.backgroundSurface,
      padding: spacing(3),
      borderRadius: borderRadiuses.sidebar,
      flexDirection: "row",
    },
    left: {
      flexDirection: "column",
      justifyContent: "center",
      gap: spacing(2),
    },
    footer: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    right: {},
  }));
export default useStyles;
