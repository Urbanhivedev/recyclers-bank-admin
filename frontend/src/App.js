import React,{useEffect, useState} from 'react';

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Homepage from "./pages/homepage/Homepage";
import Loginpage from "./pages/loginpage/Loginpage";
import Registerpage from "./pages/registerpage/Registerpage";


import OffplanPropertylist from "./pages/offplanpropertylist/OffplanPropertylist";
import BuiltPropertylist from "./pages/builtpropertylist/BuiltPropertylist";

import Propertyview from "./pages/propertyview/Propertyview";
import Usertable from "./pages/usertable/Usertable";
import Propertytable from "./pages/propertytable/Propertytable";
import AddProperty from "./pages/addproperty/Addproperty";
import EditProperty from "./pages/editproperty/Editproperty";

import "./app.css";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";



function App() {

    const [loggedOut,setLoggedOut] = useState(true)
    let {pathname} =useLocation();

    useEffect(()=>{

    
   },[])

  return (
     <>
     {!(pathname === "/"|| pathname === "/register") && <Topbar/>}
   
      
  
       <div className={ !(pathname === "/"|| pathname === "/register") && "container"}> {/*making this flexbox conditional for the login screen to be centred ...very crude , i know */}
     
      
      {/*Note that router used to wrap sidebar and routes ,
       now it wraps App, revert if need be ,but i did it so I can use the useLocation hook and 
        do a faux login page, so I wouldnt have to start placing sidebar in all my components*/}
     
      {!(pathname === "/"|| pathname === "/register")  && <Sidebar/>}
         <Routes>
         <Route  path="/" element={<Loginpage/>} />
         <Route  path="/register" element={<Registerpage/>} />
          
           <Route  path="/home" element={<Propertytable/>} />
           <Route  path="/properties/offplan" element={<OffplanPropertylist/>} />
           <Route  path="/properties/built" element={<BuiltPropertylist/>} />
           <Route  path="/admin/addproperty" element={<AddProperty/>} />
           <Route  path="/admin/editproperty/:id" element={<EditProperty/>} />
           
           
          
           
           <Route  path= "/propertyview/:address" element ={<Propertyview/>} />

           <Route  path= "/admin/userlist" element ={<Usertable/>} />
           <Route  path= "/admin/propertylist" element ={<Propertytable/>} />

           
         </Routes>
      
       </div> 


     
    

    </>
  );
}

export default App;
