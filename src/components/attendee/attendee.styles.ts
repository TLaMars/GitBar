import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ colors, fontWeights }) => ({
    attendee: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.backgroundCtaSecondary,
    },
    initials: {
      fontWeight: fontWeights.bold,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      textAlignVertical: "center",
    },
  }));
export default useStyles;
