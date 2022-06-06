//i just learnt you can save as a jsx file here!

import React from 'react'
import './topbar.css'
import logo from '../../images/uhlogo.png'
import profile from '../../images/sample-profile.jpg'
import { NotificationsNone,Settings} from '@mui/icons-material/';

export default function Topbar(){

    return (
        
        <div className="topbar"> 
         <div className="topbarWrapper">
             
                <div className="topLeft">
                     <img src={logo} className="uh" alt='urban hive logo'></img>
                    </div>

                         

        {/*1*/}   <div className="topRight">
                        <div className="topbarIconContainer">
                          <Settings/>
                         <NotificationsNone/>
                         <span className="topIconBagde">
                             2
                         </span>
                      </div>
                <img src={profile} alt="profile pic" className="topAvatar" />

         
                    </div> 


         </div> {/*topbarWrapper ending */}
        </div>
    )
}