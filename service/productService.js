const Product = require("../model/productSchema")

const createProductService =(title, price,description, imageUrl)=>{
      const product =new Product({title, price,description, imageUrl})
     return  product.save()
      
}

module.exports= {createProductService}