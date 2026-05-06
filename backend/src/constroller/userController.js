import User from "../models/user.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;

    const user = new User({ name, age });
    const savedUser = await user.save();

    res.json({
      message: "User is created",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

// GET USERS
export const getUser = async (req, res) => {
  try {
    const userDetail = await User.find();

    res.json({
      message: "User Found",
      data: userDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};