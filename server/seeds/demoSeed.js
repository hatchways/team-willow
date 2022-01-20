const User = require("../models/User");
const Profile = require("../models/Profile");
const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error("Connection could not Established. Please try again.", error)
  }
}

connection();

const createDemoUser = async () => {
  const name =process.env.DEMO_USER_NAME;
  const email =process.env.DEMO_USER_EMAIL;
  const password =process.env.DEMO_USER_PASSWORD;

  const userExist = await User.findOne({ email });
  
  if (userExist) {
    console.error( "User Already Exist", userExist);
  }

  try {
    const user = await User.create({ "name":name, "email":email, "password":password});
    await Profile.create({
      userId: user._id,
      name:"Demo Account",
      description: "Hello I am Demo User.",
      gender: "male",
      address: "1231 Long Island,",
      telephone: 1231231234,
    });
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate Name while User creation!");
    } else {
      throw new Error("Something went wrong while creating User!", error);
    }
  }
  console.log("You have successfully created Demo User.");
}
createDemoUser();
