/**
 * Returns true if the given string is a syntactically valid absolute
 * http/https URL. Used to sanity-check URLs we build from provider data
 * before handing them to `Linking.openURL`, which otherwise silently
 * fails — or worse, resolves against an app-scheme on macOS.
 */
const isAbsoluteUrl = (value: string | null | undefined): value is string => {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

export default isAbsoluteUrl;
