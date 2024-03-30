import useMemoizedStyles from "hooks/use-memoized-styles";

const useStyles = () =>
  useMemoizedStyles(
    ({
      colors,
      borderRadiuses,
      fontWeights,
      fontSizes,
      lineHeights,
      spacing,
    }) => ({
      button: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: borderRadiuses.button,
        backgroundColor: colors.button,
        // Button Sizes
        xs: {
          paddingHorizontal: spacing(3),
          paddingVertical: spacing(1.5),
        },
        s: {
          paddingHorizontal: spacing(3.5),
          paddingVertical: spacing(2),
        },
        m: {
          paddingHorizontal: spacing(4),
          paddingVertical: spacing(3),
        },
        l: {
          paddingHorizontal: spacing(5),
          paddingVertical: spacing(3.5),
        },
      },
      disabled: {
        opacity: 0.5,
      },
      text: {
        color: colors.buttonText,
        textAlign: "center",
        // Button Sizes
        xs: {
          fontSize: fontSizes.buttonXS,
          lineHeight: lineHeights.buttonXS,
        },
        s: {
          fontSize: fontSizes.buttonS,
          lineHeight: lineHeights.buttonS,
        },
        m: {
          fontSize: fontSizes.buttonM,
          lineHeight: lineHeights.buttonM,
        },
        l: {
          fontSize: fontSizes.buttonL,
          lineHeight: lineHeights.buttonL,
        },
      },
      bold: {
        fontWeight: fontWeights.bold,
      },
    }),
  );

export default useStyles;
