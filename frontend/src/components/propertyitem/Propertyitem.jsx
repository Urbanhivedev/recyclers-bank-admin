import React from 'react';
import './propertyitem.css';
import Chartbox from '../chartbox/Chartbox';
import House1 from '../../images/house1.jpeg';
import Actualchart from '../chartbox/Actualchart';
import {Link} from "react-router-dom";

export default function Propertyitem (){
       
     




    return(
         <>
           
         <div className="propertyitemContainer">
         <img src={House1} alt="property picture" className="houselistpic" />
         
         <div className="chartForList">
         <Actualchart /> {/*this component needs a container around it*/}
         </div>

         <div className="houseInfoContainer">
          
          <div className="address">234 ABBEY ROAD ,TX 77001 </div>
           <div className="houseStats">
          
            <div className="percentAppreciation">
                10%
            </div>

            <div className="priceAndView">
               
              <div className="price">
                $36750
              </div>

              <Link to={"/propertyview"}>
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