const { User } = require("../models/userModel");

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
