
//import Product from '../models/productModel.js' I WILL USE MODEL FILES TO MAKE FIREBASE CALLS FROM ONLY ONE PLACE 
import asyncHandler from 'express-async-handler'
//const Product = require('../models/productModel.js') ES5 VERSION
//const asyncHandler = require('express-async-handler') ES5 VERSION

import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc ,updateDoc,onSnapshot} from 'firebase/firestore';

import { initializeApp } from 'firebase/app'

import {getStorage,ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'


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
const app = initializeApp(firebaseConfig) 

const storage = getStorage(app)

const dbtest = getFirestore()

const colRef = collection(dbtest , "estate")
const docRef = doc(dbtest, "estate","collection")

/**the arrays i will send in my fetch requests */
let properties = []
let messages = []


/*getDocs(colRef)
 .then((snapshot) => {

    
     snapshot.docs.filter((doc)=>(doc.id === 'collection')).forEach((doc) => {
      

     properties.push({...doc.data(), id:doc.id})
     }) 
    

 })I NEEDED CONTINUOUS FEEDBACK SO I DECIDED TO USE ONSNAPSHOT INSTEAD OF GETDOCS */

 onSnapshot(colRef,(snapshot) => {
  snapshot.docs.filter((doc)=>(doc.id === 'collection')).forEach((doc)=>{
   properties.push({...doc.data(),id:doc.id})
  })
  console.log(properties[0].data.length)
 
})

 
 
 /*getDocs(colRef).then((snapshot) =>{

    
  snapshot.docs.filter((doc)=>(doc.id === 'message')).forEach((doc) => {
   

  messages.push({...doc.data(), id:doc.id})
  }) 
  

} )  I NEEDED CONTINUOUS FEEDBACK SO I DECIDED TO USE ONSNAPSHOT INSTEAD OF GETDOCS*/

onSnapshot(colRef,(snapshot) => {
  snapshot.docs.filter((doc)=>(doc.id === 'message')).forEach((doc)=>{
   messages.push({...doc.data(),id:doc.id})
  })
  
 
})


 /*just an experiment to try the other firebase way END */



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
   
   
   
  count = properties[0].data.length
  propertylist = (array, pageSize, pageNumber) => {
    
    
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  
  }
  
  


  const propertylists = propertylist(properties[0].data,pageSize,page)
  
  


  
    res.json({properties:propertylists, page,pages:Math.ceil(count/pageSize)})
  })



  const getPropertyByAddress = asyncHandler(async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
     
 const property = [] 


  property.push( ...properties[0].data.filter((p) => p.address === req.params.address) )
    
  /*console.log(property)*/
    res.json({property})
  })




  const useAddressToFindPosition = asyncHandler(async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
     
 
    

    const id =  properties[0].data.findIndex((p) => p.address === req.params.addressalso) 
    
  console.log(id)
    res.json({id:id})
  })


  const addNewProperty = asyncHandler(async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    
    const propertyAddress = req.body.propertyAddress
    const purchasePrice = req.body.purchasePrice
    const purchaseDate = req.body.purchaseDate
    const yearBuilt = req.body.yearBuilt
    const percentage = req.body.percentage
    const type = req.body.type
    const imageUrl = req.body.imageUrl
   
     
  
    
   updateDoc(docRef, {
    data:[...properties[0].data,{
      address:propertyAddress,
      amountLeft:"",
      earn:[""],
      image:imageUrl,
      images:[""],
      monthlyIncome:"",
      monthlyReturn:"",
      percentage:percentage,
      percentageReturn:"",
      purchaseDate:purchaseDate,
      purchasePrice:purchasePrice,
      totalReturn:"",
      type:type,
      yearBuilt:yearBuilt




    }]

   

   }).then(
   
     res.json({submitted:true}),
   )



  })


  const editProperty = asyncHandler(async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    
    const propertyAddress = req.body.propertyAddress
    const purchasePrice = req.body.purchasePrice
    const purchaseDate = req.body.purchaseDate
    const yearBuilt = req.body.yearBuilt
    const percentage = req.body.percentage
    const type = req.body.type
    const newImage = req.body.image

    const arrayPosition = req.params.id
    console.log(propertyAddress,purchaseDate,purchaseDate,yearBuilt)

/*dont forget to set the new image, fetch its url then put the URL into the array below */


/*updating the property in the array,so we can reset and submit */
   
const arrayToUpdate = properties[0].data

properties[0].data[arrayPosition] = 
{
  address:propertyAddress,
  amountLeft:"",
  earn:[""],
  image:"https://firebasestorage.googleapis.com/v0/b/catex-54325.appspot.com/o/image%2FHouse1.jpeg?alt=media&token=1532e522-f03d-42da-a9c5-180348572d19",
  images:[""],
  monthlyIncome:"",
  monthlyReturn:"",
  percentage:percentage,
  percentageReturn:"",
  purchaseDate:purchaseDate,
  purchasePrice:purchasePrice,
  totalReturn:"",
  type:type,
  yearBuilt:yearBuilt
}


/*updating the property in the array, so we can reset and submit END*/
   /*remember to change the date property in firebase to have a type of date ! */
   updateDoc(docRef, {
      data:properties[0].data
     }).then(
  
       res.json({submitted:true})
  
     )
   
     
  }
   )




  export {getProperties,getPropertyByAddress,editProperty,addNewProperty,useAddressToFindPosition}