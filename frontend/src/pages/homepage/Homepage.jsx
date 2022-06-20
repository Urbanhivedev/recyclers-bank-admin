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
   
   /*const [addressList,setaddressList] = useState([]);*/
   
   const filterRef = useRef();
  
   const addressList = [ "234 ABBEY ROAD HOUSTON, TEXAS" , "19 WEST LANE HOUSTON,TEXAS" , "40 DRISCOLL STREET HOUSTON,TEXAS" ]

 
   useEffect(()=>{

     const fetchProperties = async() => {
      
     const {data} = await axios.get('/api/properties') //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
    
      /*setAddressList(data)*/

    }

    fetchProperties()

 /*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
  },[])
 
 
 
 
 
   useEffect(()=>{

   addressList.forEach((address) => {
   
     

    if (searchTerm && address.includes(searchTerm.toUpperCase())){
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

       

        </div> {/*property list end */}
         

        <div className="pagination backgroundColor">
      <button className="btn backgroundColor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn--icon backgroundColor"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="pages backgroundColor">
        <a className="page active">1</a>
        <a className="page">2</a>
        <a className="page ">3</a>
        <a className="page">4</a>
        <a className="page">5</a>
        <a className="page">6</a>
        <a className="page">...</a>
        <a className="page">23</a>
      </div>
      <button className="btn backgroundColor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon backgroundColor"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

          
      </div>
        
      </> 
      
    )
}