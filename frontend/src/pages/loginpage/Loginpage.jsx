import React,{useEffect, useState, useRef} from 'react';

import "./loginpage.css";

import {Link} from "react-router-dom";

import axios from 'axios'  

import urbanlogo from '../../images/talo.png';



export default function Loginpage() {
   
  const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [userInfo,setUserInfo]  = useState('')
 
   useEffect(()=>{

    
 /*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
  },[])
 

   /*usually for my post routes*/
   const config = {
    method:"POST",
    headers:{
      'Content-Type':'application/json'
      
    }
  }
  /*usually for my post routes END */




  const  loginHandler = async(e) => {
     
    e.preventDefault()
      

    const {data} = await axios.post(`/api/users/`,
    {
      email:email,
      password:password,
     
    },
     config
    ) 
  
    localStorage.setItem('userInfo',JSON.stringify(data))
  


  }

 
 
 

  
  return (

      <> 
       <div className="loginContainer"> 
       
       <div className="urbanLogo">
       <img src={urbanlogo} alt="urban hive logo"  />
       </div>

       <div >
     
        <form className="formContainer" onSubmit={loginHandler}>
           
           <div className=" inputOrganiser">
            
            <div className="form-grouping">
           <label id="name-label" for="name" className="backgroundColor">Email Address</label>
            <input type="email" placeholder='enter your email' className="input-box" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
   
            <div className="form-grouping">
            <label id="name-label" for="name" className="backgroundColor">Password</label>
            <input type="password"  placeholder='enter your password' className="input-box" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
           
            </div>



            <div className="form-grouping backgroundColor">
         
          
          <button type="submit" id="submit" className=" buttonAdjust" >
            LOGIN
          </button>
         
           </div>


       <div className="relativeParent">
        <Link to = {"/register"} >
       <div className='registrationLink'>Don't have an account ? <span className="fakeAtag">Register</span></div>
        </Link>
        </div>

        </form>

       
       </div>
        
      

          
      </div> {/*login container ending */}
        
      </> 
      
    )
}