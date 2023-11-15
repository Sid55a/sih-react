const { User } = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const isExistingUser = await User.find({ email: req.body.email });
    if (isExistingUser.length === 0) {
      const user = new User(req.body);
      try {
        const response = await user.save();
        console.log(response);
        const { ...rest } = response._doc;
        res.status(201).json(rest);
      } catch (err) {
        res.status(400).json(err);
      }
    } else {
      res.status(200).json(isExistingUser[0]);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
