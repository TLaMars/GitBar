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
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
export default useStyles;
