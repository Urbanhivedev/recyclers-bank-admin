
//import Product from '../models/productModel.js' I WILL USE MODEL FILES TO MAKE FIREBASE CALLS FROM ONLY ONE PLACE 
import asyncHandler from 'express-async-handler'
//const Product = require('../models/productModel.js') ES5 VERSION
//const asyncHandler = require('express-async-handler') ES5 VERSION

import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app'

import dotenv from 'dotenv'
//const dotenv = require('dotenv')


dotenv.config()
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};



/*just an experiment to try the other firebase way */
initializeApp(firebaseConfig) 

const dbtest = getFirestore()

const colRef = collection(dbtest , "estate")

/**the arrays i will send in my fetch requests */
let properties = []
let messages = []


getDocs(colRef)
 .then((snapshot) => {

    
     snapshot.docs.filter((doc)=>(doc.id === 'collection')).forEach((doc) => {
      

     properties.push({...doc.data(), id:doc.id})
     }) 
      console.log(properties)

 })
 
 
 getDocs(colRef).then((snapshot) =>{

    
  snapshot.docs.filter((doc)=>(doc.id === 'message')).forEach((doc) => {
   

  messages.push({...doc.data(), id:doc.id})
  }) 
   console.log(messages)

} ) 


 /*just an experiment to try the other firebase way END */

 /* THIS ONE WORKS BUT IT GIVES ME AN UNDESIRABLE RESULT SO I AM NOT USING IT FOR NOW
const docRef = query( doc(dbtest,"estate", "collection"))

getDoc(docRef)
 .then((doc) => {
  console.log('second one !!!')
 
   
   
 } )
*/

const getProperties = asyncHandler(async (req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    const pageSize = 3 // 3 per page as dean has asked
       const page = Number(req.query.pageNumber) || 1
  
   
  let count;
  let propertylist;
  
    const keyword = req.query.keyword ? {
     name: {
       $regex: req.query.keyword,
       $options:'i' // it means case insensitive 
     }
   
   }:{}
   
   // I am instructing my getProducts controller to tune it's search, based on if there's a vendor name or not 
   
  count = /* Product.countDocuments({...keyword,countInStock:{$gt:0}}),*/ properties.length
  propertylist = (properties, pageSize, pageNumber) => {
    return properties.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
  
 /* const propertylists = propertylist()*/
  
  
    res.json({properties:properties[0].data, page,pages:Math.ceil(count/pageSize)})
  })

  export {getProperties}