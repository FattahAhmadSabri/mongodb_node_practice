const {
  addCartService,
  deleteCartService,
  getCartItemsService,
} = require("../service/cartService");
const {
  successResponse,
  errorResponse,
} = require("../middleware/responseMiddleware");
const addCartController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    const response = await addCartService(userId, productId);

    return successResponse(res, "Success", response, 201);
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

const getCartItemsController = async (req, res) => {
  try {
     const userId = req.user.id
    const response = await getCartItemsService(userId);
    return successResponse(res, "Success", response, 200);
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

const deleteCartController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const response = await deleteCartService(userId, productId);

    return successResponse(res, "Product removed from cart", response, 200);
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

module.exports = {
  addCartController,
  deleteCartController,
  getCartItemsController
};
