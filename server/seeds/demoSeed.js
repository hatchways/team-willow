const colors = require("colors");
const User = require("../models/User");
const Profile = require("../models/Profile");
const mongoose = require('mongoose');
const connectDB = require('../db');

connectDB();

const createDemoUser = async () => {
  const name = process.env.DEMO_USER_NAME;
  const email = process.env.DEMO_USER_EMAIL;
  const password = process.env.DEMO_USER_PASSWORD;
  try {
    await User.findOne({ name });
    const user = await User.create({ name, email, password });
    await Profile.create({
      userId: user._id,
      name:"Demo Account",
      description: "Hello I am Demo User.",
      gender: "male",
      address: "1231 Long Island,",
      telephone: 1231231234,
    });
    console.log("DB seeded.");
    
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate Name while User creation!");
    } else {
      throw new Error("Something went wrong while creating User!", error);
    }
  } finally {
    mongoose.disconnect();
  }
}

module.exports.createDemoUser = createDemoUser;