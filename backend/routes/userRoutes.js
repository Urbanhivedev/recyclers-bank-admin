import express from 'express'
//const express= require('express')

import {authUser} from '../controllers/userControllers.js'
//const {}= require('../controllers/productControllers.js')

//import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js') 

const router = express.Router()
  


router.route('/').post(authUser)






//exports.router = router;
export default router