const express = require("express");
const { createUserController,getUserbyIdController } = require("../controller/userController");

const router = express.Router();

router.post("/user", createUserController);
router.get("/user/:id", getUserbyIdController);
module.exports = router;
