const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

require("dotenv").config();
server.use(express.json());
server.use(cors());

server.use("/auth", authRoutes.router);
server.use("/users", userRoutes.router);
server.use("/posts", postRoutes.router);

main().catch((error) => console.log(error));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database Connected");
}

server.get("/api", (req, res) => {
  res.json({ status: "Success" });
});

server.listen(5544, () => {
  console.log("Server started");
});
