const express = require("express");
const { getUserById, updateUserById } = require("../controllers/userController");
const router = express.Router();

router.get("/:id", getUserById);
router.patch("/:id", updateUserById);

exports.router = router;
