

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

 
// i had to do the service account key manually

const serviceAccount = {
  type: "service_account",
  project_id: "catex-54325",
  private_key_id: "cd5ae593e1aa0fff2fc56ebe339161de3f350e94",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCudWJpKUcBhFkf\njuNSInNxdjMrTq07B2ZDghNdFLQGMqcu3YtqFljs5zwPHlXw1Go2IpQl+t4yAB/r\nZr5ZbTBoudOJmRC+MSDxy3HuOkT7fWwUc7rSWf0qCM4QKP7002V4UaWpqxVNN+Og\nE6iptiZNOOcoW93+LkxUIg9cjtYq/9b9QC3dVdFZWKA1eRiffO/w7/HCBBIVAjhF\nwaN2SNzZJ1ugz6XCHXPjvwFj17EPKwCNAwhJVRIbFn97CvVf3hl1CdwyYOfC953w\nAZ0M15GPKXsy3JP+T+7/YoHnDLqIUUqOOkcb1cgYmad6ZJScBzHfs6IotnPaGuIJ\n8XzOZ0dvAgMBAAECggEACZggCODXFwDEdqVWNWVP9vyan3ZCCvMtubxfZz46Zkrb\n1zUiM9E1zmrVv+PEXdcOCPB0OEsodBR+AjqncOXohHc6aHX4A0BSwP7AwxVbnNRk\nIL3P7OiRBoJEdC66Ur7bdOH8m9ec93RW5YNJ7Ry81NYHybg/qE5l2TdO+Uv2VZf0\nD98XRKbDC0V0mnWdWTrvhJkTQzUmH7Z0W2d0LEJEWpvvauBFmShXsce+su/NkayI\nlMD9psItJFgkiL7l8vt8ty0lYbNmtnNV2pBuDerjaJvmCE1D6dDLiu+FYTw6rsYy\nIkKnoJysrbt/fi9nira/oe1ObUlLpHVql2ivW2u7qQKBgQDZ+/PbLG5sfge6p6me\nIi0d3VP0XvP0t07FGVsKSyLuqZYVkGTvqbTqQtqGO8z9X6X9XhF23kNB50ELnm0/\n2YxKvzzfK3Ey5H4tYg2xx1Zd3LTjhkRz3saX6UKAKQdY4cJVnM1eeHhLifseh1q8\nX6WQavxN8BIEwIGQ0aS28ESV1wKBgQDM4jNGgRNb23tVYhapvx+iMFuKfU11y4SW\n7EBeEbld1xefeq+xrEJbth9joginSu90bi2L/ZEs2Kvx3/6mUjZpaUz0ZWiLbygm\nLrryB7OoGhCV6G1Bj2p26idS9RunozR7/uyRRv6MMKi/QvoYfCUKx4ExETSaom6Q\n7vRq8XX4KQKBgGhtTzFcY7oN1l4RHCzpanu4IBQduPkvJ8k8kGSqAh4bmA7UkcZO\noqDnThCobVekjryGaA9uAwJ7aqnKR8Qi0Bau7tZq1VvwIpJTOwRD3pgwt2eYVwq7\nWqBD2tvSy/ZEkPi6mZf8VoS5oVfKuCkuGP7KgfxEWh10q51ZEXOiPvkZAoGAQq+B\nRvpuJaDLhN/3Rmq5zh11Ph9IngWO81yUGsokDmIbA0J4exj5REaD8vbjYCgoxjmy\nQ3VV0kX3uTNR/CqYITkv3gA/xdp5M+xT1sEg/Z72NQTAwuz+FxRhlkPHK4oYZB92\nOlbkNRcFZbNUGbIWkGqdJy5Vc9tYp33POhu7bPkCgYEA1oaH5MoV5G89V+9GVOn1\nxjnk4zzNMlPYs2lbXEIrMbGQz4xKvKGuntogjhFbRFYjS0HH3Vb5EcTfr5Sd44VM\neifiFrXigH1hBjrDfTgFkWNCnEY61uxHZK/WpanuH/ezniHhX3fHNr2EEFeCr82j\n2EqUABhsshT07tOrLWplPms=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-w2awh@catex-54325.iam.gserviceaccount.com",
  client_id: "105991357550204371344",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w2awh%40catex-54325.iam.gserviceaccount.com"
}

const firebaseConfig = {
  apiKey: "AIzaSyCSHwyiy48mX8TWd_L9d5i5y6BNmsSl_MM",
  authDomain: "catex-54325.firebaseapp.com",
  projectId: "catex-54325",
  storageBucket: "catex-54325.appspot.com",
  messagingSenderId: "70669714167",
  appId: "1:70669714167:web:419016d02c0e90c7a789f2",
  measurementId: "G-NY02ECPQJ0"
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
