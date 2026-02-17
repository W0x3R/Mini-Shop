export const validateRegisterUser = (formData, users) => {
  if (formData.password !== formData.current_password) {
    return "Passwords do not match";
  }
  const isUserAlreadyExist = users.find(
    (user) => user.username === formData.username,
  );
  if (isUserAlreadyExist) {
    return "User already exists";
  }
  return null;
};
