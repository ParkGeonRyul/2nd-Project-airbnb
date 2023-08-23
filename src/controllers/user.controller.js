const userService = require("../services/user.service");
const { catchAsync } = require("../utilities/errorHandle");

const signUp = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  await userService.signUp(name, email, password);

  res.status(201).json("User created");
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const accessToken = await userService.signIn(email, password);

  res.status(200).json({ accessToken: accessToken });
});

module.exports = { signUp, signIn };
