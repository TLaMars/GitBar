import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ borderRadiuses, colors, spacing }) => ({
    button: {
      justifyContent: "center",
      aspectRatio: 1,
      width: "100%",
      alignItems: "center",
      borderRadius: borderRadiuses.item,
      padding: spacing(2),
    },
    active: {
      backgroundColor: colors.backgroundActive,
    },
    hover: {
      backgroundColor: colors.backgroundHover,
    },
  }));
export default useStyles;
