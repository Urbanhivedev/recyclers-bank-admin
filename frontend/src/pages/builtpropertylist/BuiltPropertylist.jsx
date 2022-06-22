import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import "./propertylist.css";
import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
import House1 from '../../images/house1.jpeg';
import House2 from '../../images/house2.jpeg';
import House3 from '../../images/house3.jpg';
import House4 from '../../images/house4.jpeg';

/*import {Link} from "react-router-dom";*/
import Searchandfilter from '../../components/searchandfilter/Searchandfilter';
import axios from 'axios'  

export default function BuiltPropertylist() {   /*to fetch info from a url . it is props.match ,cuz match is inside props by default */
   
   let url; /*the link to get the resources (or the backend info) */
   const [allVideos,setAllVideos] = useState(''); /*this is where database data will reside */ 
    const [addressList,setAddressList] = useState([]);
   
  
  


  useEffect(()=>{

     const fetchProperties = async() => {
      
          const {data} = await axios.get('/api/properties') //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
         
           setAddressList(data.properties)
     
         }
     
         fetchProperties()

  },[url])
  
  
  
  
  return (

      <> 
       <div className="propertyListContainer"> 
       
       <Searchandfilter className="searchComponent"/> 

         {/* the property list below will be a forEach , and i will load as many
          components as the database warrants me to, but for now, I will just hard code like 5 items */}
           
{   addressList.map((item,i)=>{
  
  return (
      
       <Propertyitem imageLink ={item.image} key={i} address={item.address}  purchasePrice={item.purchasePrice} percentage={item.percentage}/> 
      
  )
 

     })
        }
        
          
      </div> {/* propertyListcontainer END */}
        
      </> 
      
    )
}