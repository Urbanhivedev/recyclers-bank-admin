import React,{useEffect, useState, useRef} from 'react';

import "./registerpage.css";

import {Link} from "react-router-dom";

import axios from 'axios'  

import urbanlogo from '../../images/talo.png';



export default function Registerpage() {
   
  
   
 
   useEffect(()=>{

    
 /*no need to put any dependencies in use effect just yet, I want the fetch to happen only when the page is loaded */
  },[])
 
 
 
 
 
  
  
   
 






  
  return (

      <> 
       <div className="loginContainer"> 
       
       <div className="urbanLogoReg">
       <img src={urbanlogo} alt="urban hive logo" className="urbanLogoReg" />
       </div>

       <div >
     
        <form className="formContainerReg">
           
        
           <div className="form-grouping">
           <label id="name-label" for="name" className="backgroundColor">First Name</label>
            <input type="text" placeholder='enter your first name' className="input-box"/>
            </div>





           <div className="form-grouping">
           <label id="name-label" for="name" className="backgroundColor">Last Name</label>
            <input type="text" placeholder='enter your surname' className="input-box"/>
            </div>



            <div className="form-grouping">
           <label id="name-label" for="name" className="backgroundColor">Email Address</label>
            <input type="email" placeholder='enter your email' className="input-box"/>
            </div>


            <div className="form-grouping">
           <label id="name-label" for="name" className="backgroundColor">Phone Number</label>
            <input type="text" placeholder='enter your number' className="input-box"/>
            </div>

   
            <div className="form-grouping">
            <label id="name-label" for="name" className="backgroundColor">Password</label>
            <input type="password"  placeholder='enter your password' className="input-box"/>
            </div>


            <div className="form-grouping">
            <label id="name-label" for="name" className="backgroundColor"> Confirm Password</label>
            <input type="password"  placeholder='enter your password again' className="input-box"/>
            </div>
           
       



            <div className="form-group backgroundColor">
         
          <Link to = {"/home"} >
          <button type="submit" id="submit" className=" buttonAdjustReg" >
            REGISTER
          </button>
          </Link>
           </div>


           <div className="relativeParentReg">
        <Link to = {"/"} >
       <div className='registrationLinkReg'>Already have an Account ? <span className="fakeAtag">Login</span></div>
        </Link>
        </div>

     </form>

       

       </div>
        
      

          
      </div> {/*login container ending */}
        
      </> 
      
    )
}