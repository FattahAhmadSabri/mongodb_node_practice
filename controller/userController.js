const {createUserService,getUserByIdService,getAllUserService,updateUserService, deleteUserService} = require("../service/userService")
const {
  successResponse,
  errorResponse,
} = require("../middleware/responseMiddleware")
const createUserController = async(req,res)=>{
    try {
        const {name,email,mobile,password} = req.body
        const response = await createUserService(name,email,mobile,password)
        successResponse(res,
          message = "Success",
          response,
          statusCode = 201)
    } catch (error) {
        errorResponse(  res,
  message = error.message,
  statusCode = 500)
    }
}

const updateUserController =async (req,res)=>{
    try {
        const {name,email,mobile,password} = req.body;
        const {id} = req.params
         const response = await updateUserService(id,name,email,mobile,password)
         successResponse(res,
          message = "Success",
          response,
          statusCode = 200)
    } catch (error) {
         errorResponse(  res,
  message = error.message,
  statusCode = 500)
    }
}

const deleteUserController = async (req,res)=>{
    try {
        const {id} = req.params
        const response = await deleteUserService(id)
        successResponse(res,
          message = "Success",
          response,
          statusCode = 200)
    } catch (error) {
         errorResponse(  res,
  message = error.message,
  statusCode = 500)
    }
}


const getUserbyIdController =async (req,res)=>{
      try {
        const {id} = req.params;
         const response = await getUserByIdService(id)
         successResponse(res,
          message = "Success",
          response,
          statusCode = 200)
      } catch (error) {
         errorResponse(  res,
  message = error.message,
  statusCode = 500)
      }
}

const getAllUserController =async (req,res)=>{
      try {
       
         const response = await getAllUserService()
         successResponse(res,
          message = "Success",
          response,
          statusCode = 200)
      } catch (error) {
         errorResponse(  res,
  message = error.message,
  statusCode = 500)
      }
}

module.exports= {createUserController, getUserbyIdController,getAllUserController, updateUserController,deleteUserController}