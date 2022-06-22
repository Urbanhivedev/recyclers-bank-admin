
import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import {Table,Button} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'


import './propertytable.css'

import {Link} from "react-router-dom";

import axios from 'axios'  




export default function Propertytable() {
   
   
   const videoRef = useRef();
  


  useEffect(()=>{

    

  },[])
  
  const properties = [{
    _id:"1",
    address:"234 ABBEY ROAD HOUSTON, TEXAS",
    owners:"kenny Dominguez",
    type:"Built",
    price:"$327,550"
    

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
                <Button  className = "buttonStyle">
                  <AddIcon className = "iconNB"/> Add Property
                </Button>

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
         
         
          {properties.map(property => (
            <tr className='tr' key={property._id} >
              <td className='td'>{property._id}</td>
              <td className='td' >{property.owners}</td>
              <td className='td backgroundColor'>{property.address}</td>
              <td className='td backgroundColor'>{property.type  }</td>
              <td className='td backgroundColor'>{property.price}</td>
             
              <td className='td'>    
              <Link to={`/admin/user/${property._id}/edit`}>
                <Button className = "buttonStyle">
                  <EditIcon className = "iconNB"/> Edit
                </Button>
               </Link>
            </td>

              <td className='td'>
              
               

               <Button className = "buttonStyle" >
               <DeleteIcon className = "iconNB"/> Delete
               </Button>
             </td>

             
            </tr>
          ))}
         
        </table>
        
          
      </div>
        
      </> 
      
    )
}