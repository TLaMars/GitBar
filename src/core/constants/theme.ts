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
  | 18
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
  x3s: 8,
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
  x3s: 10,
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
  card: BORDER_RADIUSES.x5l,
  input: BORDER_RADIUSES.xl,
  label: BORDER_RADIUSES.x2l,
  modal: BORDER_RADIUSES.xl,
  round: BORDER_RADIUSES.full,
  sheet: BORDER_RADIUSES.x7l,
  sidebar: BORDER_RADIUSES.xl,
  item: BORDER_RADIUSES.m,
} as const satisfies Record<string, number>;

export const THEME_FONT_SIZES = {
  buttonXS: FONT_SIZES.xs,
  buttonS: FONT_SIZES.s,
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
  bodyX3S: FONT_SIZES.x3s,
  helper: FONT_SIZES.xs,
  input: FONT_SIZES.s,
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
  bodyX3S: LINE_HEIGHTS.x3s,
  helper: LINE_HEIGHTS.m,
  text: LINE_HEIGHTS.m,
} as const satisfies Record<string, number>;

export const THEME_FONT_FAMILIES = {
  primary: "Lato",
  secondary: "Lato",
} as const satisfies Record<string, string>;

export const THEME_FONT_WEIGHTS = {
  bold: "700",
  light: "300",
  normal: "400",
} as const satisfies Record<string, string>;

const COLORS = {
  black: "#000000",
  darkGray100: "#1C1C1E",
  darkGray200: "#2C2C2E",
  lightGray100: "#F5F8FA",
  lightGray200: "#DCE6EC",
  lightGray300: "#CED8DF",
  // Accent Colors
  red100: "#F05069",
  orange100: "#FC8370",
  yellow100: "#FCD277",
  green100: "#B4E080",
  teal100: "#62DDBD",
  blue100: "#AFDFF3",
  blue600: "#3166DD",
  purple100: "#B3A5EF",
  pink100: "#F299CE",
};

export const THEME_COLORS_DARK = {
  background: COLORS.black,
  backgroundSurface: COLORS.darkGray100,
  backgroundSecondary: COLORS.darkGray200,
  backgroundCta: COLORS.blue600,
  backgroundCtaDanger: COLORS.red100,
  backgroundCtaSecondary: COLORS.darkGray200,
  backgroundCtaPositive: COLORS.green100,
  textOnCta: COLORS.lightGray100,
  textOnCtaDanger: COLORS.lightGray100,
  textOnCtaSecondary: COLORS.lightGray100,
  textOnCtaPositive: COLORS.black,
  iconOnCta: COLORS.lightGray100,
  iconOnCtaDanger: COLORS.lightGray100,
  iconOnCtaSecondary: COLORS.lightGray100,
  iconOnCtaPositive: COLORS.black,
  border: COLORS.darkGray200,
  borderDanger: COLORS.red100,
  borderValid: COLORS.green100,
  borderActiveCard: "rgba(206, 216, 223, 0.35)",
  icon: COLORS.lightGray100,
  text: COLORS.lightGray100,
  textLink: COLORS.teal100,
  textSecondary: COLORS.lightGray300,
  textDanger: COLORS.red100,
  // Semantic status tints — the accent color at 18% alpha. Used for status
  // badges, CI glyphs, and the tab count chip.
  backgroundStatusSuccess: "rgba(180, 224, 128, 0.18)",
  backgroundStatusError: "rgba(240, 80, 105, 0.18)",
  backgroundStatusWarning: "rgba(252, 131, 112, 0.18)",
  backgroundStatusInfo: "rgba(175, 223, 243, 0.18)",
  backgroundStatusNeutral: "rgba(206, 216, 223, 0.18)",
  // Accent Colors (used for profile pictures and color coding PRs per project)
  accentRed: COLORS.red100,
  accentOrange: COLORS.orange100,
  accentYellow: COLORS.yellow100,
  accentGreen: COLORS.green100,
  accentTeal: COLORS.teal100,
  accentLightBlue: COLORS.blue100,
  accentBlue: COLORS.blue600,
  accentPurple: COLORS.purple100,
  accentPink: COLORS.pink100,
} as const satisfies Record<string, string>;

export const THEME = {
  borderRadiuses: THEME_BORDER_RADIUSES,
  fontFamilies: THEME_FONT_FAMILIES,
  fontSizes: THEME_FONT_SIZES,
  fontWeights: THEME_FONT_WEIGHTS,
  lineHeights: THEME_LINE_HEIGHTS,
  colors: THEME_COLORS_DARK,
  spacing: (value: ThemeSpacingScale) => value * THEME_SPACING_UNIT,
} as const;
