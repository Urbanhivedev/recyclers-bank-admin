
//import Product from '../models/productModel.js' I WILL USE MODEL FILES TO MAKE FIREBASE CALLS FROM ONLY ONE PLACE 
import asyncHandler from 'express-async-handler'
//const Product = require('../models/productModel.js') ES5 VERSION
//const asyncHandler = require('express-async-handler') ES5 VERSION

import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc ,updateDoc,onSnapshot} from 'firebase/firestore';
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



/*calling all the firebase stuff */
initializeApp(firebaseConfig) 

const dbtest = getFirestore()

const colRef = collection(dbtest , "users")
const docRef = doc(dbtest, "users","Cu6GjKbFOCOT4Jx7j8Q7IMQTetm1") /*the jibberish to the left is for id's change it to any id in the database that you want */ 

/**the arrays i will send in my fetch requests */
let users = []



getDocs(colRef)
 .then((snapshot) => {

    
     snapshot.docs.forEach((doc) => {
      

    users.push({...doc.data(), id:doc.id})
     }) 
      console.log(users)

 })
 
 
 getDocs(colRef).then((snapshot) =>{

    
  snapshot.docs.filter((doc)=>(doc.id === 'message')).forEach((doc) => {
   

  messages.push({...doc.data(), id:doc.id})
  }) 
   /*console.log(messages)*/

} ) 


 /*calling all the firebase stuff  END */




const authUser = asyncHandler(async (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    
    const { email, password } = req.body
    console.log(email)
    //req.body will give us the object thats sent in the body of our front end/POSTMAN JSON, take note
    //res.send accepts an object i think and not just variables, take note...hese are part of the things that you have to research on yor own
    const user = []
    const q =  query(colRef, where("email", "==", `${email}`))
    
   onSnapshot(q,(snapshot) => {
     snapshot.docs.forEach((doc)=>{
      user.push({...doc.data(),id:doc.id})
     })
     console.log(user)
   })

 

    if (user.length === 1){
     
        res.json({
        userInfo:user[0] /*i am unpeeling the info from the array */
      })
    } else {
      res.status(401) //this means unauthorized
      throw new Error('invalid email or password')
    } 
  
  
  })


  export {authUser}