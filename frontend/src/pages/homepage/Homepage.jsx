import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import "./homepage.css";
import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"

import Searchandfilter from '../../components/searchandfilter/Searchandfilter';


import axios from 'axios'  




export default function Homepage() {
   
   let url; /*the link to get the rsources (or the backend info) */
   const [searchTerm,setSearchTerm] = useState(''); /*this is where database data will reside */ 
   /*const [filteredAClone,setFilteredAClone] = useState([])*/

   const [searchDone,setSearchDone] = useState(false);
   const [filteredAddresses,setFilteredAddresses] = useState([]);
   
   const filterRef = useRef();
  
   const addressList = [ "234 ABBEY ROAD HOUSTON, TEXAS" , "19 WEST LANE HOUSTON,TEXAS" , "40 DRISCOLL STREET HOUSTON,TEXAS" ]

  useEffect(()=>{

   addressList.forEach((address) => {
   
      /*console.log(regex.test(address))*/

    if (/*searchTerm.toUpperCase() == address*/ address.includes(searchTerm.toUpperCase())){
       setFilteredAddresses([address])
     
    }

    if(searchDone === false){
      setFilteredAddresses([])
    }
 })
  },[searchDone])
  
   
  
   const upMenu = function(){
      filterRef.current.style.opacity = 1
   }

   const downMenu = function(){

      filterRef.current.style.opacity = 0
   }


   const showSearchResult = function(){
        
      const regex = new RegExp(`/\/\b${searchTerm}\b/g`, 'g');


   /*the for each in addressList used to be here */

    setSearchDone(true)
   
    console.log(searchTerm)
    console.log(filteredAddresses)

   }





  
  return (

      <> 
       <div className="homeContainer"> 
        <div className="chartsAndMessages">   
        <Chartbox/> 
        <Messagebox/>
        </div>
       {/*<Searchandfilter className="searchComponent"/>  I am going to connect this to a database and it can work as a component*/}

       <span className="positionAdjuster">
    <div className="searchAndFilterContainer">
         
         {/*properties*/}
        
        <h2 className="propertyLabel"> PROPERTIES </h2>
       
       

       {/*input for searching*/}
         <div className="searchBox">
         <input className="inputBox"type="text"  value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value);setSearchDone(false)}} placeholder="search by address..."/> 
         </div>
        
         <button  type="button" className="searchButton" onClick={showSearchResult}>
                Search
              </button>
        
        {/*filter and it's icon*/}
         <div className="filterAndLogo" onMouseEnter={upMenu} onMouseLeave={downMenu}>
        <FilterListIcon className="filterIcon" />
         FILTER   
         </div>
    
        <div className="filterOptions" ref={filterRef} onMouseEnter={upMenu} onMouseLeave={downMenu}>
          <div className="optionItem1"> Value {'(Asc)'} <ArrowUpwardIcon className="ArrowIcon"/></div>
          <div className="optionItem2">Value {'(Desc)'}  <ArrowDownwardIcon className="ArrowIcon"/></div>
          <div className="optionItem2">City</div>
        </div>

        
    </div>
</span>


         {/* the property list below will be a forEach , and i will load as many
          components as the database warrants me to, but for now, I will just hard code like 5 items */}
           
        <div className="propertyList">

        {filteredAddresses.length === 0 ? 
        
        addressList.map((item,i)=>{
  
          return (
              
               <Propertyitem key={i} address={item}/> 
              
          )
         
   
             })

        :
        
        filteredAddresses.map((item,i)=>{
  
       return (
            <div >
            <Propertyitem key={i} address={item}/> 
            </div>
       )

          })
        }

       {/*
          <div >
             <Propertyitem address={item}/> 
             </div>
        

          <div >
             <Propertyitem/> 
          </div>

             <div>
              <Propertyitem/> 
            </div>
        
                    
            <div>
              <Propertyitem/> 
             </div> */}


        </div> {/*property list end */}
         
          
      </div>
        
      </> 
      
    )
}