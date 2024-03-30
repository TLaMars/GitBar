import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing, colors, borderRadiuses }) => ({
    card: {
      backgroundColor: colors.backgroundSurface,
      padding: spacing(3),
      borderRadius: borderRadiuses.sidebar,
      flexDirection: "column",
      gap: spacing(2),
    },
    footer: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
    },
    left: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    right: {
      flexDirection: "row",
      gap: spacing(2),
    },
    info: {
      flexDirection: "row",
      gap: spacing(1.5),
      marginLeft: spacing(5),
      alignItems: "center",
    },
  }));
export default useStyles;
