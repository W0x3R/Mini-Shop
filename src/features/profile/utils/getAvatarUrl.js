import { truncate } from "@shared/utils";

export const getAvatarUrl = (username, size = 40) => {
  const shortUsername = truncate(username, 6, "");
  const encoded = encodeURIComponent(shortUsername);

  return `https://placehold.co/${size}x${size}?font=oswald&text=${encoded}`;
};
