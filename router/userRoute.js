const express = require("express");
const {
  createUserController,
  getUserbyIdController,
  getAllUserController,
  updateUserController,
  deleteUserController,
} = require("../controller/userController");

const router = express.Router();

router.post("/user", createUserController);
router.get("/user/:id", getUserbyIdController);
router.get("/user", getAllUserController);
router.patch("/user/:id", updateUserController);
router.delete("/user/:id", deleteUserController);

module.exports = router;
