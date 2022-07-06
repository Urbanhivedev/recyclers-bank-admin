import React,{useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import "./homepage.css";
import Chartbox from  "../../components/chartbox/Chartbox"
import Messagebox from  "../../components/messagebox/Messagebox"
import Propertyitem from  "../../components/propertyitem/Propertyitem"
import Paginate from '../../components/paginate/Paginate';
import {Link} from "react-router-dom";

/** just temporary pics */
import House1 from '../../images/house1.jpeg';
import House2 from '../../images/house2.jpeg';
import House3 from '../../images/house3.jpg';
import House4 from '../../images/house4.jpeg';
/** just temporary pics end */

import Searchandfilter from '../../components/searchandfilter/Searchandfilter';


import axios from 'axios'  




export default function Homepage() {
   
  /*I am pushing people to login page if they dont have user info details, i.e they are not in */
  const navigate = useNavigate()
  const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
  

    useEffect(()=>{
  
    console.log(userInfo)

      if(userInfo === null){
        navigate('/')
       
      }
     
      else{
        navigate('/admin/propertylist/') 
      }
  
    },[userInfo])

    /*I am pushing people to login page if they dont have user info details, i.e they are not in END */




   const [searchTerm,setSearchTerm] = useState('');
   /*const [filteredAClone,setFilteredAClone] = useState([])*/

   const [searchDone,setSearchDone] = useState(false);
   const [filteredAddresses,setFilteredAddresses] = useState([]);
   
  
   const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
   const [addressList,setAddressList] = useState([]);
   
   const filterRef = useRef();
  
   /*const addressList = [ "234 ABBEY ROAD HOUSTON, TEXAS" , "19 WEST LANE HOUSTON,TEXAS" , "40 DRISCOLL STREET HOUSTON,TEXAS" ]*/
   
 
   useEffect(()=>{

     const fetchProperties = async() => {
      
     const {data} = await axios.get('/api/properties') //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
     
      setAddressList(data.properties)
      setPage(data.page)
      setPages(data.pages)

    }

    fetchProperties()

 /*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
  },[])
 
 
 
 
 
   /*useEffect(()=>{

   addressList.forEach((address) => {
   
     

    if (searchTerm && address.includes(searchTerm.toUpperCase())){
       setFilteredAddresses([address])
     
    }

    if(searchDone === false){
      setFilteredAddresses([])
    }
 })
  },[searchDone])*/
  
   
  
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
              
               <Propertyitem imageLink ={item.image} key={i} address={item.address}  purchasePrice={item.purchasePrice} percentage={item.percentage}/> 
              
          )
         
   
             })

        :
        
        filteredAddresses.map((item,i)=>{
  
       return (
            <div >
            <Propertyitem imageLink ={item.image} key={i} address={item.address} purchasePrice={item.purchasePrice} percentage={item.percentage}/> 
            </div>
       )

          })
        }

       

        </div> {/*property list end */}
         
       
    <Paginate page={page} pages={pages}/>
      

          
      </div> {/*home container ending */}
        
      </> 
      
    )
}