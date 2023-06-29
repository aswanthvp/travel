const jwt = require("jsonwebtoken");

const Users = require("../model/userModel");

const login = async (userInfo) => {
  try {
    const result = await Users.findOne({
      userName: userInfo.userName,
      password: userInfo.password,
    });
    if (!result) throw Error("Unauthorized");
    const token = jwt.sign(
      {
        userId: result._id,
        userName: result.userName,
      },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );
    return { message: "Login Successful", userName: result.userName, token };
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = login;
