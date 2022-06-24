import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import "./propertyview.css";
import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
import House1 from '../../images/house1.jpeg';

import {Link} from "react-router-dom";
import Searchandfilter from '../../components/searchandfilter/Searchandfilter';
import axios from 'axios'  
import { useParams } from 'react-router-dom';




function PropertyView() {
   
   let url; /*the link to get the rsources (or the backend info) */
   const [property,setProperty] = useState({}); /*this is where the  database information will reside */ 
   
   const { address } = useParams();
  
  


   useEffect(()=>{

    const fetchProperty = async() => {
     
    const {data} = await axios.get(`/api/properties/${address}`) 
   
    
     setProperty(data.property[0]) /*i AM GOING OFF THE ASSUMPTION THAT I ONLY GET ONE VALUE , CUZ ADDRESSES ARE UNIQUE AFTER ALL */
    
    
   }

   fetchProperty()


 },[])
  
  
  
  
  return (

      <> 
      

       <div className="propertyViewContainer"> 
       <hr className="randomLine"/>

        <div className="imageAndDetails">   
        
         <div className="subjectHouseContainer">
           <img src={property.image} alt="property picture" className="subjectHousePic" />  
         </div>
         
         
         <div className="propertyPricingDetails">
           <div className='moneyValue'>{property.amountLeft}</div>
           <br/> {/*you can  use css-margin instead of this if you like */}
           <div className="percentageValue">{property.percentage}</div>
         </div>

        </div>
      

         {/* the property list below will be a forEach , and i will load as many
          components as the database warrants me to, but for now, I will just hard code like 5 items */}
           
        <div className="propertyDesc">
           
          <div className='descriptionAndControls'>
             <div className="description">
               <p className ="fontAdjust" >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi natus corrupti labore voluptate, eligendi quasi 
                  tempora quae ratione rem culpa, quis dolor deleniti 
                  consequuntur nemo accusantium voluptatem omnis iure nam!

                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi natus corrupti labore voluptate, eligendi quasi 
                  tempora quae ratione rem culpa, quis dolor deleniti 
                  consequuntur nemo accusantium voluptatem omnis iure nam!
               </p>

               <br />

               <ul className="featuresList">
                 <li className ="fontAdjust">PURCHASE DATE:<strong>{property.purchaseDate}</strong></li>
                 <li className ="fontAdjust">PURPOSE: <strong>{property.type} </strong></li>
                 <li className ="fontAdjust">PURCHASE PRICE: <strong>{property.purchasePrice}</strong> </li>
                 <li className ="fontAdjust">CURRENT PRICE: <strong>{property.purchasePrice} </strong></li>
               </ul>
             </div>
            
             <div className="controls">
               <button className="button">BUY</button> 
               <button className="button">SELL</button>
               <button className="button">OFFER</button>
               <button className="button">VOTE</button>
             </div>
            
          </div>
        

          <div className= "purchaseDate">
          <h3> PURCHASED ON {property.purchaseDate} </h3>
          </div>

            

        </div> {/*property list end */}
         
          
      </div>
        
      </> 
      
    )
}

export default PropertyView