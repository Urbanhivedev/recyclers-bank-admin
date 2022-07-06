import React,{useEffect, useState, useRef} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import ReplayIcon from '@mui/icons-material/Replay';
import "./addproperty.css";
/*import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
import House1 from '../../images/house1.jpeg';*/

import {Link} from "react-router-dom";
import Searchandfilter from '../../components/searchandfilter/Searchandfilter';
import axios from 'axios'  
import { getNativeSelectUtilityClasses } from '@mui/material';

import {getStorage,ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import { initializeApp } from 'firebase/app'

/*import dotenv from 'dotenv'*/
import {v4} from 'uuid'




export default function AddProperty() {
   
/*I am pushing people to login page if they dont have user info details, i.e they are not in */
  const navigate = useNavigate()
  const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
  
  
     useEffect(()=>{
     
      if(userInfo === null){
        navigate('/')
      }
  
    },[userInfo])

    /*I am pushing people to login page if they dont have user info details, i.e they are not in END */


    /*firebase connection seeking*/
    /*dotenv.config()*/

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig) 

    const storage = getStorage(app)

    
    
  
   const [property,setProperty] = useState({}); /*this is where the  database information will reside */ 

   /*so i can get the curret date and current year */
   var curr = new Date();
   curr.setDate(curr.getDate());
   var date = curr.toISOString().substring(0,10);
     
   var currYear = new Date().getFullYear();
 /*so i can get the curret date and current year  END*/


   /*form information state */
   const [apartmentAddress,setApartmentAddress] = useState('')
   const [apartmentLocation,setApartmentLocation] = useState('')
   const [apartmentName,setApartmentName] = useState('')
   
  /* const [purchaseDate,setPurchaseDate] = useState(date) in case a need a field type date in future*/
   const [image,setImage] = useState('')
   const [returnData, setReturnData] = useState('')
  


   const { address } = useParams();


    /*for my post routes*/
   const config = {
    method:"POST",
    headers:{
      'Content-Type':'application/json'
      
    }
  }
  /*for my post routes END */

   /*to confirm submission */
    const [submitted,setSubmitted] = useState(" ")
   /*to confirm submission END */
  
 const  submitPropertyHandler = async(e) => {
     
    e.preventDefault()

      console.log('the submit has started')
    
    /*uploading the image to firebase */
      const newImageName = `images/${v4() + image.name}`

    const imageRef = ref(storage , newImageName )
    
    
    uploadBytes(imageRef,image).then((snapshot)=>{
     
         /*uploading the image to firebase END */
    
      getDownloadURL(imageRef).then(async(url)=>{
     
           /*i am only sending the post request when i am sure i have set the image url */
           console.log(url)

          const {data} = await axios.post("/api/properties/newproperty",
          {
            imageUrl:url,
            apartmentAddress:apartmentAddress,
            apartmentLocation:apartmentLocation,
            apartmentName:apartmentName,
            
          },
           config
          ) 
         
          setSubmitted(data.submitted)
           
         } ) 
        })

       

  }



  
  
  
  return (

      <> 
      

      <div className="addPropertyContainer">
      
      <form id="survey-form" onSubmit={submitPropertyHandler}>

      <header className="header">
        <h1 id="title" className="text-center">Add a New Apartment</h1>
       { submitted===" " &&
        (<p id="description" className="propertyInstruction text-center">
          Please tell us the details of this apartment
        </p>)
        }

       
         
        
      </header>
 



        <div className="form-group">
          <label id="name-label" for="name">Address</label>
          <input
            type="text"
            name="address"
            id="name"
            className="form-control"
            placeholder="Enter the apartment address "
            value={apartmentAddress} onChange={(e)=>setApartmentAddress(e.target.value)}
            required
          />
        </div>



        <div className="form-group">
          <label id="name-label" for="name">Apartment Location  &nbsp;&nbsp; (i.e which city and state?)</label>
          <input
            type="text"
            name="address"
            id="name"
            className="form-control"
            placeholder="Enter the apartment's location "
            value={apartmentLocation} onChange={(e)=>setApartmentLocation(e.target.value)}
            required
          />
        </div>


       {/* <div className="form-group">
          <p>Apartment Location &nbsp;&nbsp; i.e which city and state?</p>
          <select id="dropdown"  value={apartmentLocation}  name="type" className="form-control" onChange={(e)=>{setApartmentLocation(e.target.value); console.log(e.target.value)}}  required>
            <option disabled selected value></option>
            <option value={"Built"}  >Built</option>
            <option value={"Off-plan"} >Off-plan</option>
          </select>
      </div> */}





        


        {/*<div className="form-group">
          <label id="number-label" for="purchaseDate"
            >Purchase Date<span className="clue">(leave blank if house not purchased)</span></label>
          
          <input type="date" id="purchaseDate" name="trip-start"
       value={purchaseDate onChange={(e)=>setPurchaseDate(e.target.value)}
       min="2016-01-01" max={date} className="form-control"/>


      </div>*/}
        
        <div className="form-group">
          <label id="email-label" for="purchasePrice">Apartment Name</label>
          <input
            type="text"
            name="purchase price"
            id="purchasePrice"
            className="form-control"
            placeholder="Enter the name of the apartment"
            value={apartmentName} onChange={(e)=>setApartmentName(e.target.value)}
          
          />
        </div> 





        <div className="form-group">
        <label id="percentage-label" for="image">Apartment Image</label>
        <input 
        type="file"
        id="image"
        name="image"
        accept=".png ,.jpg , .jpeg ,.jfif ,.webp"
        className="form-control"
        placeholder="please choose an image for the property"
        onChange={(e)=>{setImage(e.target.files[0])}}
       
        required
       />
        </div> 


        <div className="form-group">
          <button type="submit" id="submit" className="submit-button" >
            Submit
          </button>
        </div>


        {submitted===true &&
        
        <p id="description" className="successMessage text-center">
          <DoneIcon className="doneIcon"/> SUBMITTED SUCCESSFULLY ! 
        </p> 
        }
 
        {submitted===false &&
          <p id="description" className="failureMessage text-center">
         <ReplayIcon className="doneIcon"/>SOMETHING WENT WRONG, PLEASE TRY AGAIN 
       </p>
        }
      </form>


      


    </div>
        
      </> 
      
    )
}

 