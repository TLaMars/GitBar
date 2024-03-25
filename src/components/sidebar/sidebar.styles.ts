import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ colors, borderRadiuses, spacing }) => ({
    container: {
      backgroundColor: colors.backgroundSurface,
      borderRadius: borderRadiuses.sidebar,
      padding: spacing(1),
      width: 48,
    },
  }));
export default useStyles;
