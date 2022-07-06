
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

import {Link,useNavigate,useParams} from "react-router-dom";

import axios from 'axios'  






export default function Propertytable() {

  /*I am pushing people to login page if they dont have user info details, i.e they are not in */
  const navigate = useNavigate()
  const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
  const { pageNumber } = useParams();
   
     useEffect(()=>{
  
      if(userInfo === null){
        navigate('/')
      }
  
    },[userInfo])

    /*I am pushing people to login page if they dont have user info details, i.e they are not in END */
   
   
  const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
   const [propertyList,setPropertyList] = useState([]);
  


   useEffect(()=>{

    const fetchApartments = async() => {
     
    const {data} = await axios.get(`/api/properties/?pageNumber=${pageNumber}`) //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
   
    console.log(data.properties)
    console.log(data.page)
     setPropertyList(data.properties)
     setPage(data.page)
     setPages(data.pages)

   }

   fetchApartments()
   console.log(page + 2^(page-1))
/*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
 },[pageNumber])
  
 console.log(page,2^(page+1))
  
  
  return (

      <> 
      

       <div className="propertyTableContainer"> 
       
       <div className="propertyTablePreamble backgroundColor">
       
       <div className ="backgroundColor" >
       
        <h1 className ="backgroundColor" >Apartments</h1>
        <br/>
        <p className ="backgroundColor" > NOTE: Take Caution not to delete an apartment by accident </p>
      </div>


         <div className ="backgroundColor">
              <Link to={'/admin/addproperty'} >
                <Button  className = "buttonStyle">
                  <AddIcon className = "iconNB"/> Add Apartment
                </Button>
             </Link>

         </div>

    </div>
        
         <br/>
         
        
        
        
         
        <table className='table'>
         
          <tr className='tr'>
           <th className='th'>ID</th>
           <th className='th'>NAME</th>
           <th className='th'>ADDRESS</th>
           <th className='th'>LOCATION</th>
           <th className='th'>IMAGE</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
          
          {propertyList.map(property => (
            <tr className='tr' key={propertyList.indexOf(property)} >
              <td className='td'>{(page) + (2*(page-1)) + propertyList.indexOf(property) }</td>
              <td className='td' >{property.name}</td>
              <td className='td backgroundColor'>{property.address}</td>
              <td className='td backgroundColor'>{property.location}</td>
              <td className='td backgroundColor'><img src={property.image} alt="apartment img"/></td>
             
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
        
        <Paginate page={page} pages={pages}/>
          
      </div>

     
        
      </> 
      
    )
}