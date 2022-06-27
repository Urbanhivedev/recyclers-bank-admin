import React,{useEffect, useState, useRef} from 'react';

import "./loginpage.css";

import {Link} from "react-router-dom";

import axios from 'axios'  

import urbanlogo from '../../images/talo.png';



export default function Loginpage() {
   
  
   
 
   useEffect(()=>{

    
 /*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
  },[])
 
 
 
 
 
  
  
   
 






  
  return (

      <> 
       <div className="loginContainer"> 
       
       <div className="urbanLogo">
       <img src={urbanlogo} alt="urban hive logo"  />
       </div>

       <div >
     
        <form className="formContainer">
           
           <div className=" inputOrganiser">
            
            <div className="form-grouping">
           <label id="name-label" for="name" className="backgroundColor">Email Address</label>
            <input type="text" placeholder='enter your email' className="input-box"/>
            </div>
   
            <div className="form-grouping">
            <label id="name-label" for="name" className="backgroundColor">Password</label>
            <input type="password"  placeholder='enter your password' className="input-box"/>
            </div>
           
            </div>



            <div className="form-group backgroundColor">
         
          <Link to = {"/home"} >
          <button type="submit" id="submit" className=" buttonAdjust" >
            LOGIN
          </button>
          </Link>
           </div>

        </form>


       </div>
        
      

          
      </div> {/*login container ending */}
        
      </> 
      
    )
}