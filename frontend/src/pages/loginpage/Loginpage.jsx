import React,{useEffect, useState, useRef} from 'react';

import "./loginpage.css";

import {Link,useNavigate} from "react-router-dom";

import axios from 'axios'  

import urbanlogo from '../../images/talo.png';



export default function Loginpage() {
   
  const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo')))
  
   const navigate = useNavigate()
    


/*I am pushing people AWAY from this page if they have user info details, i.e they have logged in */
   
   useEffect(()=>{

    if(userInfo !== null){
      navigate('/home')
    }

  },[userInfo])
 

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
    sessionStorage.setItem('userInfo',JSON.stringify(data))
    setUserInfo(JSON.parse(window.sessionStorage.getItem('userInfo')))
   
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