import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(({ spacing, borderRadiuses }) => ({
    container: {
      paddingTop: spacing(2.5),
      gap: spacing(2),
      flex: 1,
      flexDirection: "column",
    },
    list: {
      gap: spacing(2),
    },
    onboardingButtons: {
      flexDirection: "row",
      gap: spacing(2),
      marginTop: spacing(4),
      marginBottom: spacing(6),
    },
    onboardingButton: {
      width: 100,
    },
    onboardingImage: {
      width: undefined,
      height: 334,
      aspectRatio: 315 / 170,
      borderRadius: borderRadiuses.card,
    },
  }));
export default useStyles;
