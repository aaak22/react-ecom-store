import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModels.js";

// const router = express.Router();

// @desc  Auth user
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //   res.send({ email, password });

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username and Password");
  }
});

// @desc  Get user profile
// @route Get /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  // res.send('success');
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc  Register a new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   res.send({ email, password });

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// @desc  Update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  // res.send('success');
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc  Get all users
// @route Get /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  // res.send('success');
  const users = await User.find({});
  res.json(users);
});

// @desc  Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  // res.send('success');
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc  Get user by ID
// @route Get /api/users/:id
// @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  // res.send('success');
  const user = await User.findById(req.params.id).select('-password');
  if(user){
    res.json(user);
  }else{
    res.status(404)
    throw new Error('User not found')
  }
});

// @desc  Update user 
// @route PUT /api/users/:id
// @access private
const updateUser = asyncHandler(async (req, res) => {
  // res.send('success');
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  updateUser,
  getUsers,
  getUserByID,
  deleteUser,
};
