const express = require("express");
const User = require("../models/usermodel");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();

const {
    getUsers,
    registerUser
} = require("../controller/userController");

router.get("/", getUsers);
router.post("/signup", registerUser);

module.exports = router;

