//i just learnt you can save as a jsx file here!

import React from 'react'
import './topbar.css'
import logo from '../../images/uhlogo.png'
import profile from '../../images/sample-profile.jpg'
import { NotificationsNone,Settings} from '@mui/icons-material/';
import { useState,useEffect } from 'react'

export default function Topbar(){

    const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo')))



    return (
        
        <div className="topbar"> 
         <div className="topbarWrapper">
             
                <div className="topLeft">
                     <img src={logo} className="uh" alt='urban hive logo'></img>
                    </div>

                         

        {/*1*/}   <div className="topRight">
                        <div className="topbarIconContainer">
                          <span className="loggedUser">
                          {userInfo.userInfo.firstName.toUpperCase()} 
                          {' '}
                          {userInfo.userInfo.lastName.toUpperCase()}
                          </span>
                          <Settings className="settingsIcon"/>
                         <NotificationsNone className="notificationIcon"/>
                         <span className="topIconBadge">
                             2
                         </span>
                      </div>
                <img src={profile} alt="profile pic" className="topAvatar" />

         
                    </div> 


         </div> {/*topbarWrapper ending */}
        </div>
    )
}