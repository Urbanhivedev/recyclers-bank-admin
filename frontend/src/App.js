import React,{useEffect, useState} from 'react';

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Homepage from "./pages/homepage/Homepage";
import Loginpage from "./pages/loginpage/Loginpage";


import OffplanPropertylist from "./pages/offplanpropertylist/OffplanPropertylist";
import BuiltPropertylist from "./pages/builtpropertylist/BuiltPropertylist";

import Propertyview from "./pages/propertyview/Propertyview";
import Usertable from "./pages/usertable/Usertable";
import Propertytable from "./pages/propertytable/Propertytable";
import AddProperty from "./pages/addproperty/Addproperty";

import "./app.css";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";



function App() {

    const [loggedOut,setLoggedOut] = useState(true)
    let {pathname} =useLocation();

    useEffect(()=>{

    
   },[])

  return (
     <>
     {pathname !== "/" && <Topbar/>}
   
      
  
       <div className={ pathname !== "/" && "container"}> {/*making this flexbox conditional for the login screen to be centred ...very crude , i know */}
     
      
      {/*Note that router used to wrap sidebar and routes ,
       now it wraps App, revert if need be ,but i did it so I can use the useLocation hook and 
        do a faux login page, so I wouldnt have to start placing sidebar in all my components*/}
     
      {pathname !== "/" && <Sidebar/>}
         <Routes>
         <Route  path="/" element={<Loginpage/>} />
           <Route  path="/home" element={<Homepage/>} />
           <Route  path="/properties/offplan" element={<OffplanPropertylist/>} />
           <Route  path="/properties/built" element={<BuiltPropertylist/>} />
           <Route  path="/admin/addproperty" element={<AddProperty/>} />
           
           
          
           
           <Route  path= "/propertyview/:address" element ={<Propertyview/>} />

           <Route  path= "/admin/userlist" element ={<Usertable/>} />
           <Route  path= "/admin/propertylist" element ={<Propertytable/>} />

           
         </Routes>
      
       </div> 


     
    

    </>
  );
}

export default App;
