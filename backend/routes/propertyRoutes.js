import express from 'express'
//const express= require('express')

import {getProperties} from '../controllers/propertyControllers.js'
//const {getProducts, getProductById,deleteProduct,createProduct, updateProduct,getTopProducts,createProductReview}= require('../controllers/productControllers.js')

//import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js') 

const router = express.Router()
  
//@Fetch all products
//@GET api/products/
//@Public access
//@this is good commenting syntax,leting others know the routes

router.route('/').get(getProperties)






//exports.router = router;
export default router