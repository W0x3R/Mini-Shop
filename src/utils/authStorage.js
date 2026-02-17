const USERS_KEY = "users";

export const getUsersFromStorage = () =>
  JSON.parse(localStorage.getItem(USERS_KEY)) || [];
export const saveUsersToStorage = (users) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
export const cleanUsersFromStorage = () => localStorage.removeItem(USERS_KEY);
