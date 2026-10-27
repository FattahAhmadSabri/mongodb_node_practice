const express = require("express")
const {
  addCartController,
  deleteCartController,
  getCartItemsController,
  removeProductFromCartController
} = require("../controller/cartController")
const authMiddleware = require("../middleware/jwtTokenMiddleware")
const router = express.Router()

router.post("/cart",authMiddleware,addCartController )
router.get("/cart",authMiddleware,getCartItemsController )
router.delete("/cart/:productId",authMiddleware, deleteCartController)
router.delete("/cartproduct/:productId",authMiddleware, removeProductFromCartController)

module.exports = router