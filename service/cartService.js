const Cart = require("../model/cartSchema");
const Product = require("../model/productSchema");

const addCartService = async (userId, productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [
        {
          productId,
          quantity: 1,
          price: product.price,
        },
      ],
    });

    return cart;
  }

  const existingItem = cart.items.find(
    (item) => item.productId.toString() === productId.toString(),
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      productId,
      quantity: 1,
      price: product.price,
    });
  }

  await cart.save();

  return cart;
};

const getCartItemsService = async (userId) => {
  const response = await Cart.findOne({ userId }).populate("items.productId", "title price imageUrl");;

  return response;
};

const deleteCartService = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId.toString(),
  );

  if (itemIndex === -1) {
    throw new Error("Product not found in cart");
  }

  cart.items.splice(itemIndex, 1);

  await cart.save();

  return cart;
};

module.exports = { addCartService, deleteCartService, getCartItemsService };
