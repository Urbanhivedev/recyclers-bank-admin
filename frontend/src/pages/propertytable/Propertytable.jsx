
import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paginate from '../../components/paginate/Paginate';
import DoneIcon from '@mui/icons-material/Done';
import {Table,Button} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'


import './propertytable.css'

import {Link} from "react-router-dom";

import axios from 'axios'  






export default function Propertytable() {
   
   
  const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
   const [propertyList,setPropertyList] = useState([]);
  


   useEffect(()=>{

    const fetchProperties = async() => {
     
    const {data} = await axios.get('/api/properties') //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
   
    console.log(data.properties)
     setPropertyList(data.properties)
     setPage(data.page)
     setPages(data.pages)

   }

   fetchProperties()

/*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
 },[])
  
  const properties = [{
    _id:"1",
    address:"234 ABBEY ROAD HOUSTON, TEXAS",
    owners:"kenny Dominguez",
    type:"Built",
    price:"$327,550"
    /* this is my dummy properties array , I use it for only owners, since there's no owners in my database */

  },{
    _id:"2",
    address:"19 WEST LANE HOUSTON, TEXAS",
    owners:"Rita Dominguez",
    type:"Off-plan",
    price:"$211,550"

  },{
    _id:"3",
    address:"40 DRISCOLL STREET HOUSTON, TEXAS",
    owners:"Trey kennedy",
    type:"Off-plan",
    price:"$107,520"

  },{
    _id:"4",
    address:"234 ABBEY ROAD HOUSTON, TEXAS",
    owners:"Aubrey Graham",
    type:"Bought",
    price:"$427,600"

  }]
  
  
  return (

      <> 
      

       <div className="propertyTableContainer"> 
       
       <div className="propertyTablePreamble backgroundColor">
       
       <div className ="backgroundColor" >
       
        <h1 className ="backgroundColor" >Properties</h1>
        <br/>
        <p className ="backgroundColor" > NOTE: Take Caution not to delete property by accident </p>
      </div>


         <div className ="backgroundColor">
              <Link to={'/admin/addproperty'} >
                <Button  className = "buttonStyle">
                  <AddIcon className = "iconNB"/> Add Property
                </Button>
             </Link>

         </div>

    </div>
        
         <br/>
         
        
        
        
         
        <table className='table'>
         
          <tr className='tr'>
           <th className='th'>ID</th>
           <th className='th'>OWNERS</th>
           <th className='th'>ADDRESS</th>
           <th className='th'>TYPE</th>
           <th className='th'>PRICE</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
         
          {propertyList.map(property => (
            <tr className='tr' key={propertyList.indexOf(property)} >
              <td className='td'>{propertyList.indexOf(property) + 1}</td>
              <td className='td' >{properties[propertyList.indexOf(property)].owners}</td>
              <td className='td backgroundColor'>{property.address}</td>
              <td className='td backgroundColor'>{property.type}</td>
              <td className='td backgroundColor'>{property.price}</td>
             
              <td className='td'>    
              <Link to={`/admin/editproperty/${property.address}`}>
                <Button className = "buttonStyle">
                  <EditIcon className = "iconNB"/> 
                </Button>
               </Link>
            </td>

              <td className='td'>
              
               

               <Button className = "buttonStyle" >
               <DeleteIcon className = "iconNB"/> 
               </Button>
             </td>

             
            </tr>
          ))}
         
        </table>
        
          
      </div>

      <Paginate page={page} pages={pages}/>
        
      </> 
      
    )
}