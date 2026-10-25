
const User = require("../model/userSchema")

const createUserService = (name,email,mobile,password)=>{
const response = new User({name,email,mobile,password})
      response.save()
      return response
}

const getUserByIdService=(id)=>{
     const response = User.findById(id)
     return response
}

module.exports = {createUserService, getUserByIdService}