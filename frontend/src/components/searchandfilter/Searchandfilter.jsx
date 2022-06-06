import React from 'react';
import './searchandfilter.css'
import FilterListIcon from '@mui/icons-material/FilterList';




export default function Searchandfilter (){

    return(
         <>
<span className="positionAdjuster">
    <div className="searchAndFilterContainer">
         
         {/*properties*/}
        
        <h2 className="propertyLabel"> PROPERTIES </h2>
       
       

       {/*input for searching*/}
         <div className="searchBox">
         <input className="inputBox"type="text" placeholder="search for a property..."/> 
         </div>
        
        
        {/*filter and it's icon*/}
         <div className="filterAndLogo">
        <FilterListIcon className="filterIcon"/>
         FILTER   
         </div>


        
    </div>
</span>
         
         
         </>
     )

}