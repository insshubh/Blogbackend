const express = require('express');
const router = express.Router();

const{createBlog} = require("../controller/createBlog");

// API Routes

router.post("/createBlog", createBlog);


module.exports = router;