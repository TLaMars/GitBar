// Providers (notably GitLab) prefix the title of draft MRs with "Draft:" /
// "WIP:" so it's visible in the web UI. We already surface draft state via
// the card's badge and dashed border, so the prefix is redundant noise.
// Strip it here so titles stay clean regardless of provider.
//
// Matches (case-insensitive): "Draft:", "WIP:", "[Draft]", "[WIP]" with
// optional surrounding whitespace.
const DRAFT_PREFIX = /^\s*(?:\[(?:draft|wip)\]|(?:draft|wip)\s*:)\s*/i;

const cleanPrTitle = (title: string): string =>
  title.replace(DRAFT_PREFIX, "").trim();

export default cleanPrTitle;
