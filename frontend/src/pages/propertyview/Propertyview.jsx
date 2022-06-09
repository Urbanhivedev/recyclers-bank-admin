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




export default function PropertyView() {
   
   let url; /*the link to get the rsources (or the backend info) */
   const [allVideos,setAllVideos] = useState(''); /*this is where database data will reside */ 
   
   const videoRef = useRef();
  


  useEffect(()=>{

    

  },[url])
  
  
  
  
  return (

      <> 
      

       <div className="propertyViewContainer"> 
       <hr className="randomLine"/>

        <div className="imageAndDetails">   
        
         <div className="subjectHouseContainer">
           <img src={House1} alt="property picture" className="subjectHousePic" />  
         </div>
         
         
         <div className="propertyPricingDetails">
           <div className='moneyValue'>$48,150</div>
           <br/> {/*you can  use css-margin instead of this if you like */}
           <div className="percentageValue">15%</div>
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
                 <li className ="fontAdjust">BUILT:<strong>2018 </strong></li>
                 <li className ="fontAdjust">PURPOSE: <strong>RENT </strong></li>
                 <li className ="fontAdjust">PURCHASE PRICE: <strong>$325,000</strong> </li>
                 <li className ="fontAdjust">CURRENT PRICE: <strong>$425,000 </strong></li>
               </ul>
             </div>
            
             <div className="controls">
               <button className="button">BUY</button> {/*the styling for button is in propertyitem.css */}
               <button className="button">SELL</button>
               <button className="button">OFFER</button>
               <button className="button">VOTE</button>
             </div>
            
          </div>
        

          <div className= "purchaseDate">
          <h3> PURCHASED ON 02/11/2021 </h3>
          </div>

            

        </div> {/*property list end */}
         
          
      </div>
        
      </> 
      
    )
}