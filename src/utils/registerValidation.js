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

export const validateLoginUser = (formData, users) => {
  const foundUser = users.find((user) => user.username === formData.username);

  if (!foundUser) {
    return {
      success: false,
      error: "User not found",
    };
  }

  if (foundUser.password !== formData.password) {
    return {
      success: false,
      error: "Wrong password",
    };
  }

  return {
    success: true,
    user: foundUser,
  };
};
