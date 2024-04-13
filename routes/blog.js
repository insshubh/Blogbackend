const express = require("express");
const router = express.Router();

// Import Controller
const{createBlog} = require("../controller/createBlog");

// API Routes

router.post("/createBlog", createBlog);


module.exports = router;