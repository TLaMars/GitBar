const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const formatRelativeTime = (iso: string, now: number = Date.now()): string => {
  const delta = now - new Date(iso).getTime();
  if (Number.isNaN(delta) || delta < 0) return "";
  if (delta < HOUR) return `${Math.max(1, Math.floor(delta / MINUTE))}m`;
  if (delta < DAY) return `${Math.floor(delta / HOUR)}h`;
  return `${Math.floor(delta / DAY)}d`;
};

export default formatRelativeTime;
