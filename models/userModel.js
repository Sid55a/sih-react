const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: "user" },
    userName: { type: String },
    img: { type: String },
    onboarded: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

exports.User = mongoose.model("User", userSchema);
