const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  desc: { type: String, required: true },
  img: [{ type: String }],
  type: { type: Number, required: true },
});

exports.Posts = mongoose.model("Posts", postSchema);
