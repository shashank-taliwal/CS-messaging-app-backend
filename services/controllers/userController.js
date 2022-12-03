// const user_dao=require('../dao/user_dao.js');
const User = require("../models/user");
let userIds = [100];

const getUserId = () => {
  let n = userIds.length;
  let lastUserId = userIds[n - 1];
  let nextId = lastUserId + 1;
  userIds.push(nextId);
  return nextId;
};
exports.userHome = async (req, res) => {
  //This api would be  home route for the user service
  res.json({ status: 200, message: "User microservice up and running" });
};

exports.signup = async (req, res) => {
  console.log(req);
  let message;
  let UID = getUserId();
  const userObject = {
    name: req.body.name,
    password: req.body.password,
    username: req.body.username,
    email: req.body.email,
    UID: UID,
  };
  console.log("-------------------------------------------");
  console.log(userObject);
  try {
    message = await User.create(userObject);
    res.status(200);
    res.json({ message: "User created", data: message });
  } catch (err) {
    console.log(err);
    res.status(401);
    res.json({ message: err });
  }
};

exports.login = async (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  console.log(username);
  console.log(pass);
  let user = await User.findOne({
    username: username,
  }).lean();
  console.log(user);
  if (user.password === pass) {
    res.status(200);
    res.json({ message: "logged in", data: user });
  } else {
    res.status(401);
    res.json({ message: "Invalid credentials" });
  }
};
