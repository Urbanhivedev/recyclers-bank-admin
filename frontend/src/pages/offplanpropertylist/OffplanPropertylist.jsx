import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import "./propertylist.css";
import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
/*import {Link} from "react-router-dom";*/
import Searchandfilter from '../../components/searchandfilter/Searchandfilter';
import axios from 'axios'  

import Offplan1 from '../../images/offplan-1.JPG';
import Offplan2 from '../../images/offplan-2.JPG';
import Offplan3 from '../../images/offplan-3.jpg';
import Offplan4 from '../../images/offplan-4.jpg';
import Offplan5 from '../../images/offplan-5.jpg';

export default function OffplanPropertyList() {   /*to fetch info from a url . it is props.match ,cuz match is inside props by default */
   
   let url; /*the link to get the rsources (or the backend info) */
   const [allVideos,setAllVideos] = useState(''); /*this is where database data will reside */ 
   const [addressList,setAddressList] = useState([]);
   const [tempPics , setTempPics] =  useState([Offplan1,Offplan2,Offplan3,Offplan4,Offplan5]);
  
  


   useEffect(()=>{
 
      const fetchProperties = async() => {
       
           const {data} = await axios.get('/api/properties') //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
          
            setAddressList(data.properties)
      
          }
      
          fetchProperties()
          console.log(addressList)
 
   },[url])
   
  
  
  
  return (

      <> 
       <div className="propertyListContainer"> 
       
       <Searchandfilter className="searchComponent"/> 

         {/* the property list below will be from the off-plan properites,when that distinguishment is made,
          but for now, I am loading all properties and using my personal hardcoded pics */}
       
                   
{   addressList.map((item,i)=>{
  
  return (
      
       <Propertyitem imageLink ={tempPics[i]} key={i} address={item.address}  purchasePrice={item.purchasePrice} percentage={item.percentage}/> 
      
  )
 

     })
        }
        
         
          
      </div> {/* propertyListcontainer END */}
        
      </> 
      
    )
}