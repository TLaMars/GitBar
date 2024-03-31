import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ borderRadiuses, colors, spacing, fontSizes }) => ({
    input: {
      padding: spacing(2),
      borderWidth: 2,
      borderColor: colors.border,
      backgroundColor: colors.backgroundSurface,
      borderRadius: borderRadiuses.input,
      fontSize: fontSizes.input,
      color: colors.text,
    },
    wrapper: {
      width: 200,
      gap: spacing(0.5),
    },
  }));
export default useStyles;
