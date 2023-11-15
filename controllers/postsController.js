const { Posts } = require("../models/postModel");

exports.createPost = async (req, res) => {
  const post = new Posts(req.body);
  try {
    const response = await post.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.deletePost = async (req, res) => {
  try {
    await Posts.findByIdAndDelete(req.params.id);
    res.status(201).json("Post deleted successfully");
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updatePost = async (req, res) => {
  try {
    const newPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    if (post) {
      res.status(201).json(post);
    } else {
      res.status(404).json("Post not found!");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const post = await Posts.find();
    if (post) {
      res.status(201).json(post);
    } else {
      res.status(404).json("Posts not found!");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getAllPostsByType = async (req, res) => {
  try {
    const post = await Posts.find({ type: req.params.type });
    if (post) {
      res.status(201).json(post);
    } else {
      res.status(404).json("Posts not found!");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
