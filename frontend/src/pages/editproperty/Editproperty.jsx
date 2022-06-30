import React,{useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import ReplayIcon from '@mui/icons-material/Replay';
import "./editproperty.css";
/*import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
import House1 from '../../images/house1.jpeg';*/

import {Link, useNavigate} from "react-router-dom";
import Searchandfilter from '../../components/searchandfilter/Searchandfilter';
import axios from 'axios'  





export default function EditProperty() {
   

   /*I am pushing people to login page if they dont have user info details, i.e they are not in */
   const navigate = useNavigate()
   const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
    
      useEffect(()=>{
   
       if(userInfo === null){
         navigate('/')
       }
   
     },[userInfo])
 
     /*I am pushing people to login page if they dont have user info details, i.e they are not in END */
 
 
  
   const [property,setProperty] = useState({}); /*this is where the  database information FROM GET will reside */ 

   /*so i can get the current date and current year - they are for input boundaries */
   var curr = new Date();
   curr.setDate(curr.getDate());
   var date = curr.toISOString().substring(0,10);
     
   var currYear = new Date().getFullYear();
 /*so i can get the curret date and current year  END*/

 const {id} = useParams();
 

   /*form information state */
   const [propertyAddress,setPropertyAddress] = useState('')
   const [type,setType] = useState('')
   const [purchasePrice,setPurchasePrice] = useState('')
   const [percentage,setPercentage] = useState('')
   const [yearBuilt,setYearBuilt] = useState('')
   const [purchaseDate,setPurchaseDate] = useState(date)
   const [arrayPosition,setArrayPosition] = useState(1)
   const [image,setImage]  = useState('')

   
   

   useEffect(()=>{

    const fetchPropertyDetails = async() => {
     
    const {data} = await axios.get(`/api/properties/${id}`) 
    const position  = await axios.get(`/api/properties/propertypos/${id}`)

    

     setProperty(data.property[0]) 
     setPropertyAddress(data.property[0].address)
     setType(data.property[0].type)
     setPurchasePrice(data.property[0].purchasePrice)
     setPurchaseDate(data.property[0].purchaseDate)
     setPercentage(data.property[0].percentage)
    setYearBuilt(data.property[0].yearBuilt)

    setArrayPosition(position.data.id)

    console.log(data)
    
   }

   fetchPropertyDetails()


 },[id])





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
      

    const {data} = await axios.post(`/api/properties/editproperty/${arrayPosition}`,
    {
      propertyAddress:propertyAddress,
      type:type ,
      purchasePrice:purchasePrice,
      purchaseDate:purchaseDate,
      yearBuilt:yearBuilt,
      percentage:percentage,
      arrayPosition:arrayPosition,
    },
     config
    ) 
   
    
    setSubmitted(data.submitted) 

  }


  
  
  return (

      <> 
      

      <div className="addPropertyContainer">
      
      <form id="survey-form" onSubmit={submitPropertyHandler}>

      <header className="header">
        <h1 id="title" className="text-center">Update This Property</h1>
       { submitted===" " &&
        (<p id="description" className="propertyInstruction text-center">
          Please make changes to this property below:
        </p>)
        }

       {submitted===true &&
        
       <p id="description" className="successMessage text-center">
         <DoneIcon className="doneIcon"/> UPDATED SUCCESSFULLY ! 
       </p> 
       }

       {submitted===false &&
         <p id="description" className="failureMessage text-center">
        <ReplayIcon className="doneIcon"/>SOMETHING WENT WRONG, PLEASE TRY AGAIN 
      </p>
       }
         
        
      </header>
 



        <div className="form-group">
          <label id="name-label" for="name">Address</label>
          <input
            type="text"
            name="address"
            id="name"
            className="form-control"
            placeholder="Enter the property's address "
            value={propertyAddress} onChange={(e)=>setPropertyAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <p>Type &nbsp;&nbsp; i.e Is it completed, or off-plan (currently being being built)?</p>
          <select id="dropdown"  value={type}  name="type" className="form-control" onChange={(e)=>{setType(e.target.value); console.log(e.target.value)}}  required>
            <option disabled selected value></option>
            <option value={"Built"}  >Built</option>
            <option value={"Off-plan"} >Off-plan</option>
          </select>
        </div>





        <div className="form-group">
          <label id="number-label" for="number">Year Built<span className="clue">(optional)</span></label>
          <input
            type="number"
            name="Year Built"
            id="number"
            min="1975"
            value ={yearBuilt} onChange={(e)=>setYearBuilt(e.target.value)}
            max={currYear} 
            className="form-control"
            placeholder=" Please enter the year"
            
          />
        </div>


        <div className="form-group">
          <label id="number-label" for="number"
            >Purchase Date<span className="clue">(leave blank if house not purchased)</span></label>
          
          <input type="date" id="start" name="trip-start"
       value={purchaseDate} onChange={(e)=>setPurchaseDate(e.target.value)}
       min="2016-01-01" max={date} className="form-control"/>
        {/*change purchase Date's datatype in the database, so it will show up on the edit screeno */}

        </div>
        
        <div className="form-group">
          <label id="price-label" for="email">Purchase Price</label>
          <input
            type="text"
            name="purchase price"
            id="purchasePrice"
            className="form-control"
            placeholder="Enter the price in dollars"
            value={purchasePrice} onChange={(e)=>setPurchasePrice(e.target.value)}
            required
          />
        </div> 


          <div className="form-group">
          <label id="percentage-label" for="email">Percentage</label>
          <input
            type="text"
            name="percentage"
            id="percentage"
            className="form-control"
            placeholder="Enter percentage"
            value={percentage} onChange={(e)=>setPercentage(e.target.value)}
            required
          />
        </div> 


        <div className="form-group">
        <label id="percentage-label" for="email">Property Image</label>
        <input 
        type="file"
        id="avatar"
        name="image"
        accept="image/png, image/jpeg"
        className="form-control"
        placeholder="please choose an image for the property"
        value={image} onChange={(e)=>setImage(e.target.value)}
        required
       
       />
        </div> 

       


        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
        
      </> 
      
    )
}

 