import express from 'express'
//const express= require('express')

import {authUser,registerUser,getUsers} from '../controllers/userControllers.js'
//const {authUser,registerUser}= require('../controllers/productControllers.js')

//import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js') 

const router = express.Router()
  


router.route('/').post(authUser).get(getUsers)
router.route('/register').post(registerUser)





//exports.router = router;
export default router