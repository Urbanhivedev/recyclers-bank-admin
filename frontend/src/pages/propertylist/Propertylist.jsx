import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import "./propertylist.css";
import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
/*import {Link} from "react-router-dom";*/
import Searchandfilter from '../../components/searchandfilter/Searchandfilter';
import axios from 'axios'  

export default function Propertylist() {
   
   let url; /*the link to get the rsources (or the backend info) */
   const [allVideos,setAllVideos] = useState(''); /*this is where database data will reside */ 
   
   const videoRef = useRef();
  


  useEffect(()=>{

    

  },[url])
  
  
  
  
  return (

      <> 
       <div className="propertyListContainer"> 
       
       <Searchandfilter className="searchComponent"/> 

         {/* the property list below will be a forEach , and i will load as many
          components as the database warrants me to, but for now, I will just hard code like 5 items */}
           
        <div >
             <Propertyitem/> 
        </div>

        <div >
             <Propertyitem/> 
        </div>

        <div >
             <Propertyitem/> 
        </div>

        <div>
             <Propertyitem/> 
        </div>
         
          
      </div>
        
      </> 
      
    )
}