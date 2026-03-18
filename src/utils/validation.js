const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please provide firstName and lastName");
  }

  if (typeof firstName !== "string" || firstName.trim().length < 4 || firstName.trim().length > 50) {
    throw new Error("firstName must be between 4 and 50 characters");
  }

  if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("emailId must be a valid email address");
  }

  if (!password || !validator.isStrongPassword(password, { minLength: 8 })) {
    throw new Error(
      "password must be strong (at least 8 characters, with upper/lowercase letters, numbers, and symbols)"
    );
  }
};

module.exports = {
  validateSignUpData,
};
