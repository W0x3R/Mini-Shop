export const getAvatarUrl = (username, size = 40) => {
  const encoded = encodeURIComponent(username);

  return `https://ui-avatars.com/api/?name=${encoded}&size${size}&rounded=true&background=random`;
};
