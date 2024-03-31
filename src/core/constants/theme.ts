export type ThemeSpacingScale =
  | 0
  | 0.25
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export const FONT_SIZES = {
  x2s: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  x2l: 22,
  x3l: 24,
  x4l: 32,
} as const satisfies Record<string, number>;

export const LINE_HEIGHTS = {
  x2s: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
  xl: 32,
  x2l: 40,
} as const satisfies Record<string, number>;

export const BORDER_RADIUSES = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 6,
  x2l: 8,
  x3l: 10,
  x4l: 12,
  x5l: 16,
  x6l: 20,
  x7l: 24,
  x8l: 32,
  full: 100,
} as const satisfies Record<string, number>;

export const THEME_SPACING_UNIT = 4;

export const THEME_BORDER_RADIUSES = {
  button: BORDER_RADIUSES.xl,
  card: BORDER_RADIUSES.x4l,
  input: BORDER_RADIUSES.xl,
  label: BORDER_RADIUSES.x2l,
  modal: BORDER_RADIUSES.xl,
  round: BORDER_RADIUSES.full,
  sheet: BORDER_RADIUSES.x7l,
  sidebar: BORDER_RADIUSES.xl,
  item: BORDER_RADIUSES.m,
} as const satisfies Record<string, number>;

export const THEME_FONT_SIZES = {
  buttonXS: FONT_SIZES.s,
  buttonS: FONT_SIZES.m,
  buttonM: FONT_SIZES.m,
  buttonL: FONT_SIZES.l,
  headingXL: FONT_SIZES.x4l,
  subHeadingXL: FONT_SIZES.xl,
  headingL: FONT_SIZES.x3l,
  subHeadingL: FONT_SIZES.l,
  headingM: FONT_SIZES.x2l,
  headingS: FONT_SIZES.xl,
  headingXS: FONT_SIZES.l,
  headingX2S: FONT_SIZES.m,
  bodyM: FONT_SIZES.m,
  bodyL: FONT_SIZES.l,
  bodyS: FONT_SIZES.s,
  bodyXS: FONT_SIZES.xs,
  bodyX2S: FONT_SIZES.x2s,
  helper: FONT_SIZES.xs,
  input: FONT_SIZES.m,
  label: FONT_SIZES.s,
  tabBar: FONT_SIZES.x2s,
  text: FONT_SIZES.m,
} as const satisfies Record<string, number>;

export const THEME_LINE_HEIGHTS = {
  buttonXS: LINE_HEIGHTS.s,
  buttonS: LINE_HEIGHTS.m,
  buttonM: LINE_HEIGHTS.m,
  buttonL: LINE_HEIGHTS.l,
  headingXL: LINE_HEIGHTS.x2l,
  subHeadingXL: LINE_HEIGHTS.m,
  headingL: LINE_HEIGHTS.xl,
  subHeadingL: LINE_HEIGHTS.m,
  headingM: LINE_HEIGHTS.xl,
  headingS: LINE_HEIGHTS.m,
  headingXS: LINE_HEIGHTS.m,
  headingX2S: LINE_HEIGHTS.m,
  bodyM: LINE_HEIGHTS.m,
  bodyL: LINE_HEIGHTS.l,
  bodyS: LINE_HEIGHTS.s,
  bodyXS: LINE_HEIGHTS.xs,
  bodyX2S: LINE_HEIGHTS.x2s,
  helper: LINE_HEIGHTS.m,
  text: LINE_HEIGHTS.m,
} as const satisfies Record<string, number>;

export const THEME_FONT_FAMILIES = {
  primary: "Rubik",
  secondary: "Rubik",
} as const satisfies Record<string, string>;

export const THEME_FONT_WEIGHTS = {
  bold: "700",
  light: "300",
  normal: "400",
} as const satisfies Record<string, string>;

export const THEME_COLORS_LIGHT = {
  text: "#111317",
  icon: "#111317",
  background: "#E7ECEF",
  backgroundSurface: "rgba(17, 19, 23, 0.12)",
  backgroundActive: "rgba(224, 231, 235, 0.8)",
  backgroundHover: "rgba(224, 231, 235, 0.4)",
  button: "rgb(150, 181, 255)",
  buttonHover: "rgb(167,194, 255)",
  buttonDanger: "rgb(255, 117, 117)",
  buttonDangerHover: "rgb(255, 132, 132)",
  buttonText: "#111317",
} as const satisfies Record<string, string>;

export const THEME_COLORS_DARK = {
  text: "#E7ECEF",
  icon: "#E7ECEF",
  background: "#111317",
  backgroundSurface: "rgba(17, 19, 23, 0.6)",
  backgroundActive: "rgba(224, 231, 235, 0.2)",
  backgroundHover: "rgba(224, 231, 235, 0.1)",
  button: "rgb(49, 102, 221)",
  buttonHover: "rgb(39, 97, 221)",
  buttonDanger: "rgb(221, 49, 49)",
  buttonDangerHover: "rgb(221, 29, 29)",
  buttonText: "#E7ECEF",
} as const satisfies Record<string, string>;

export const THEME = {
  borderRadiuses: THEME_BORDER_RADIUSES,
  fontFamilies: THEME_FONT_FAMILIES,
  fontSizes: THEME_FONT_SIZES,
  fontWeights: THEME_FONT_WEIGHTS,
  lineHeights: THEME_LINE_HEIGHTS,
  colors: THEME_COLORS_LIGHT,
  spacing: (value: ThemeSpacingScale) => value * THEME_SPACING_UNIT,
} as const;

export const THEME_DARK = {
  ...THEME,
  colors: THEME_COLORS_DARK,
};
