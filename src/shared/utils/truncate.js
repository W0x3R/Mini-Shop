export const truncate = (value, maxLength, suffix = "...") => {
  if (value.length < maxLength) return value;
  return value.slice(0, maxLength) + suffix;
};
