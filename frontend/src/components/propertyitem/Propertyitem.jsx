import React from 'react';
import './propertyitem.css';
import Chartbox from '../chartbox/Chartbox';
import House1 from '../../images/house1.jpeg';

import Actualchart from '../chartbox/Actualchart';
import {Link} from "react-router-dom";

export default function Propertyitem (props){
       
     




    return(
         <>
           
         <div className="propertyitemContainer">
         <img src={props.imageLink} alt="property picture" className="houselistpic" />
         
         <div className="chartForList">
         <Actualchart /> {/*this component needs a container around it*/}
         </div>

         <div className="houseInfoContainer">
          
          <div className="address">{props.address?props.address.toUpperCase():"234 ABBEY ROAD HOUSTON, TEXAS"}</div>
           <div className="houseStats">
          
            <div className="percentAppreciation">
                {props.percentage}
            </div>

            <div className="priceAndView">
               
              <div className="price">
                {props.purchasePrice}
              </div>

              <Link to={`/propertyview/${props.address}`}>
              <button  type="button" className="view">
                View
              </button>
              </Link>

            </div>
             


           </div>
        


         </div>

         </div>
         
         
         
         </>
     )

}