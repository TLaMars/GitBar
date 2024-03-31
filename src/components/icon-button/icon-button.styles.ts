import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ borderRadiuses, colors }) => ({
    button: {
      justifyContent: "center",
      aspectRatio: 1,
      alignItems: "center",
      backgroundColor: colors.button,
      borderRadius: borderRadiuses.item,
    },
    danger: {
      backgroundColor: colors.buttonDanger,
    },
  }));
export default useStyles;
