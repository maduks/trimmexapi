const User = require("../model/User");

const createUser = async (userData) => {
  const newUser = await User.create(userData);
  return newUser;
};

const loginUser = async (userData) => {
  const user = await User.findOne({ email: userData.email });
  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const logoutUser = async (userData) => {
  const user = await User.findOne({ email: userData.email });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
