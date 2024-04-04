import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ colors, fontWeights }) => ({
    attendee: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.backgroundCta,
    },
    initials: {
      color: colors.textOnCta,
      fontWeight: fontWeights.bold,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
export default useStyles;
