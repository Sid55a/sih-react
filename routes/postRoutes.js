const express = require("express");
const { createUser } = require("../controllers/authController");
const {
  createPost,
  deletePost,
  updatePost,
  getPostById,
  getAllPosts,
  getAllPostsByType,
} = require("../controllers/postsController");
const router = express.Router();

//Create
router.post("/", createPost);
//Delete
router.delete("/:id", deletePost);

//Update
router.patch("/:id", updatePost);
//Get
router.get("/:id", getPostById);
router.get("/", getAllPosts);
router.get("/type/:type", getAllPostsByType);

exports.router = router;
