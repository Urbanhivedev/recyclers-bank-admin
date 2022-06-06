import React from 'react';
import './messagebox.css'
import Messageitem from '../messageitem/Messageitem'


export default function Messagebox (){

    return(
         <>

          <div className="messageboxContainer">
          <h4 className="messageTitle"> New Messages</h4>
              <Messageitem/>
              <Messageitem/>
              
              
           </div>   
         

         
         </>
     )

}