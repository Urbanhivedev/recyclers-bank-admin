

import express from 'express'
//const express = require('express')

import path from 'path'
//const path = require('path')

//import products from './data/products.js'
import dotenv from 'dotenv'
//const dotenv = require('dotenv')

import colors from 'colors'
//const colors = require('colors')

//import mongoose from 'mongoose'
//const mongoose = require('mongoose')

import morgan from 'morgan'
//const morgan = require('morgan')

//firebase details
import admin from 'firebase-admin' ;
//import serviceAccount from './ServiceAccountKey.json' ;

import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app'

 
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





/*admin.initializeApp({             there used to be a JSON.stringify below but it works just fine without it
  credential:admin.credential.cert(serviceAccount)
})


const db = admin.firestore();*/

/*just an experiment to try the other firebase way */
initializeApp(firebaseConfig) /*it doesn't work because you need the firebaseconfig API , not serviceAcconut*/

const dbtest = getFirestore()

const colRef = collection(dbtest , "estate")

getDocs(colRef)
 .then((snapshot) => {

     let books = []
     snapshot.docs.forEach((doc) => {

      books.push({...doc.data() , id:doc.id })
     }) 
      console.log(books)

 })


 /*just an experiment to try the other firebase way end */

const docRef = query( doc(dbtest,"estate", "collection"))

getDoc(docRef)
 .then((doc) => {
  
  console.log(doc)
   

  /* console.log(doc.data().data.filter(item => {return item.percentage === "15%"}))*/
   
 } )




 const app = express()
if(process.env.NODE_ENV === 'development'){app.use(morgan('dev'))} //I prefer to use morgan in development and not in production

 app.use(express.json())  //this is the new bodyParser that is in express and allows us to read json from req.body



/*app.use(cors())*/





const __dirname =path.resolve() //OKAY BRAD DID THIS TO MIMIC PATH.JOIN(__DIRNAME) , BECAUSE THE OG __dirname IS ONLY ACCESSIBLE IN COMMON JS AND NOT ES6 SYNTAX
app.use('/uploads', express.static(path.join(__dirname,'/uploads')))



if(process.NODE_ENV === 'production'){

  app.use(express.static(path.join(__dirname,'/frontend/build')))

  app.get('*', (req,res) =>{ 
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}else{
  /*app.get('/', (req,res) => {
    res.send('API is running...')
  })*/

  app.use(express.static(path.join(__dirname,'/frontend/build')))

  app.get('*', (req,res) =>{ 
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })



}



const port=process.env.PORT||5000

app.listen(port, ()=>{
  console.log(`Server is listening in ${process.env.NODE_ENV} mode,
     on port ${port}`.yellow.bold)
})
