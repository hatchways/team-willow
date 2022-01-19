const User = require("../models/User");
const Profile = require("../models/Profile");
const generateToken = require("../utils/generateToken");
// const { registerUser } = require("../controllers/auth");

const email = process.env.DEMO_USER_EMAIL;
const name = process.env.DEMO_USER_NAME
const password = process.env.DEMO_USER_PASSWORD

console.log("env vars are : ",email, name, password);

const emailExists = User.findOne({ email }, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
// console.log(emailExists);
if (emailExists) {
  throw new Error("A user with that email already exists");
}

const userExists = User.findOne({ name });

if (userExists) {
  throw new Error("A user with that username already exists");
}

const user = User.create({
  name,
  email,
  password
});

if (user) {
  const profile = Profile.create({
    userId: user._id,
    name
  });
  const token = generateToken(user._id);

} else {
  throw new Error("Invalid user data");
}