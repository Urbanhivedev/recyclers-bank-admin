
import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paginate from '../../components/paginate/Paginate';

import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'

import './usertable.css'

import {Link, useNavigate, useParams} from "react-router-dom";

import axios from 'axios'  




export default function Usertable() {
   

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
  const [userList, setUserList]= useState([])


   useEffect(()=>{

    const fetchProperties = async() => {
     
    const {data} = await axios.get(`/api/users/?pageNumber=${pageNumber}`) //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
   
    console.log(data.users)
     setUserList(data.users)
     setPage(data.page)
     setPages(data.pages)

   }

   fetchProperties()

/*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
 },[pageNumber])
  
  /*const users = [{
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

  }]*/
  
  
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
           <th className='th'>PHONE NUMBER</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
         
          {userList.map(user => (
            <tr className='tr' key={user.id}  >
              <td className='td'>{userList.indexOf(user) + 1}</td>
              <td className='td' >{user.firstName + ' ' + user.lastName  }</td>
              <td className='td backgroundColor'>{user.email}</td>
              <td className='td backgroundColor'>{user.phoneNumber}</td>
             
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
        
        <Paginate page={page} pages={pages}/>
      </div>
        
     
      </> 
      
    )
}