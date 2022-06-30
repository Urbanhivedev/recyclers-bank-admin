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






  
   const [property,setProperty] = useState({}); /*this is where the  database information will reside */ 

   /*so i can get the curret date and current year */
   var curr = new Date();
   curr.setDate(curr.getDate());
   var date = curr.toISOString().substring(0,10);
     
   var currYear = new Date().getFullYear();
 /*so i can get the curret date and current year  END*/


   /*form information state */
   const [propertyAddress,setPropertyAddress] = useState('')
   const [type,setType] = useState('')
   const [purchasePrice,setPurchasePrice] = useState('')
   const [percentage,setPercentage] = useState('')
   const [yearBuilt,setYearBuilt] = useState('')
   const [purchaseDate,setPurchaseDate] = useState(date)
   
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
      

    const {data} = await axios.post("/api/properties/newproperty",
    {
      propertyAddress:propertyAddress,
      type:type ,
      purchasePrice:purchasePrice,
      purchaseDate:purchaseDate,
      yearBuilt:yearBuilt,
      percentage:percentage
    },
     config
    ) 
   
    
    setSubmitted(data.submitted) 

  }


   useEffect(()=>{
   
    if(type === "Off-plan"){
      setYearBuilt(currYear)
    }

    },[type])


   /*useEffect(()=>{

    const fetchProperty = async() => {
     
    const {data} = await axios.post(`/api/properties/${address}`) 
   
    
     setProperty(data.property[0]) 
    
    
   }

   fetchProperty()


 },[])*/
  
  
  
  
  return (

      <> 
      

      <div className="addPropertyContainer">
      
      <form id="survey-form" onSubmit={submitPropertyHandler}>

      <header className="header">
        <h1 id="title" className="text-center">Add a New Property</h1>
       { submitted===" " &&
        (<p id="description" className="propertyInstruction text-center">
          Please tell us the details of this property
        </p>)
        }

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


        </div>
        
        <div className="form-group">
          <label id="email-label" for="email">Purchase Price</label>
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
          <label id="email-label" for="email">Percentage</label>
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
          <button type="submit" id="submit" className="submit-button" >
            Submit
          </button>
        </div>
      </form>
    </div>
        
      </> 
      
    )
}

 