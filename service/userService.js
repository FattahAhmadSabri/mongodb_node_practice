const User = require("../model/userSchema");

const createUserService = (name, email, mobile, password) => {
  const response = new User({ name, email, mobile, password });
  response.save();
  return response;
};

const updateUserService = (id, name, email, mobile, password) => {
  const response = User.findByIdAndUpdate(
    id,
    { name, email, mobile, password },
    { new: true },
  );
  return response;
};

const deleteUserService = (id) => {
  const response = User.findByIdAndDelete(id);
  return response;
};

const getAllUserService = ()=>{
     const response = User.find()
     return response
}

const getUserByIdService = (id) => {
  const response = User.findById(id);
  return response;
};

module.exports = {
  createUserService,
  getUserByIdService,
  getAllUserService,
  updateUserService,
  deleteUserService,
};
