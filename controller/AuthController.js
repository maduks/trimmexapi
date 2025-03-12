const AuthService = require("../service/AuthService");
const bcrypt = require("bcryptjs");
const createUser = async (req, res) => {
  let userData = req.body;
  userData.password = await bcrypt.hash(userData.password, 10);
  const newUser = await AuthService.createUser(userData);
  res.status(201).json({ data: newUser, status: "User created Successfully" });
};

const loginUser = async (req, res) => {
  const userData = req.body;
  const user = await AuthService.loginUser(userData);
  const isMatch = await bcrypt.compare(userData.password, user.password);
  if (!user || !isMatch) {
    return res.status(401).json({
      message: "Invalid login credentials",
    });
  }
  res.status(200).json({ data: user, status: "User logged in Successfully" });
};

const logoutUser = async (req, res) => {
  const userData = req.body;
  const user = await AuthService.logoutUser(userData);
  res.status(200).json({ data: user, status: "User logged out Successfully" });
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
