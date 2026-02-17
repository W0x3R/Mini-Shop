const USERS_KEY = "users";
const AUTH_KEY = "auth";

export const getUsersFromStorage = () =>
  JSON.parse(localStorage.getItem(USERS_KEY)) || [];

export const saveUsersToStorage = (users) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

export const getAuthFromStorage = () =>
  JSON.parse(localStorage.getItem(AUTH_KEY)) || null;

export const saveAuthToStorage = (user) =>
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));

export const clearAuthFromStorage = () => {
  localStorage.removeItem(AUTH_KEY);
};
