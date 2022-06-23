
import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paginate from '../../components/paginate/Paginate';

import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'

import './usertable.css'

import {Link} from "react-router-dom";

import axios from 'axios'  




export default function Usertable() {
   
   
  const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
  


  useEffect(()=>{

    

  },[])
  
  const users = [{
    _id:"1",
    email:"dagogouranto@gmail.com",
    name:"kenny Dominguez",

  },{
    _id:"2",
    email:"tomsawyer@gmail.com",
    name:"Rita Dominguez",

  },{
    _id:"3",
    email:"ritadominic@gmail.com",
    name:"Trey kennedy",

  },{
    _id:"4",
    email:"tommyboy@gmail.com",
    name:"Aubrey Graham",

  }]
  
  
  return (

      <> 
      

       <div className="userTableContainer"> 
       
       <div className="userTablePreamble backgroundColor">
       
       <div className ="backgroundColor" >
       
        <h1 className ="backgroundColor" >Users</h1>
        <br/>
        <p className ="backgroundColor" > NOTE: Take Caution not to delete user by accident </p>
      </div>

         <div className ="backgroundColor">
                <Button  className = "buttonStyle">
                  <AddIcon className = "iconNB"/> Add User
                </Button>

         </div>

    </div>
        
         <br/>
         
        
        
        
         
        <table className='table'>
         
          <tr className='tr'>
           <th className='th'>ID</th>
           <th className='th'>NAME</th>
           <th className='th'>EMAIL</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
         
          {users.map(user => (
            <tr className='tr' key={user._id}  >
              <td className='td'>{user._id}</td>
              <td className='td' >{user.name}</td>
              <td className='td backgroundColor'>{user.email}</td>
             
              <td className='td'>    
              <Link to={`/admin/user/${user._id}/edit`}>
                <Button className = "buttonStyle" >
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