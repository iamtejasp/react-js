export const emailValidation = (email) => {
  const errors = [];

  if (email.length === 0) {
    errors.push("Email required");
  }

  if (!email.endsWith("gmail.com")) {
    errors.push("Email must end with gamil.com");
  }

  return errors;
};

export const passWordValidation = (password) => {
  const errors = [];

  if (password.length < 10) {
    errors.push("Must Be 10 characters or longer");
  }

  if (!password.match(/[a-z]/)) {
    errors.push("Must include a lowercase letter");
  }

  if (!password.match(/[A-Z]/)) {
    errors.push("Must include an uppercase letter");
  }

  if (!password.match(/[0-9]/)) {
    errors.push("Must include a number");
  }

  return errors;
};
