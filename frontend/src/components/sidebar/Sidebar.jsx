import React from 'react'
import "./sidebar.css"
import {LineStyle, Timeline ,TrendingUp} from '@mui/icons-material/';
import TodayIcon from '@mui/icons-material/Today';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonIcon from '@mui/icons-material/Person';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import {BrowserRouter as Router ,Link} from "react-router-dom";


export default function Sidebar() {

    return (
        
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DASHBOARD</h3>
                   
                </div> {/*sidebar menu closing */}


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">SEARCH</h3>
                   <ul className="sidebarList">
                     
                      {/*I had to assign each emoji component a classname here, to enforce background color*/ }
                     
                    
                 <Link to ={'/properties'} className="linkref">
                     <li className="sidebarListItem">
                         <AccountBalanceIcon  className="sidebarListItemIcon"/>
                         Built 
                         
                     </li>
                     </Link> 



                     <Link  className="linkref" to="/">
                     <li className="sidebarListItem">
                       
                         <NearMeIcon className="sidebarListItemIcon"/>
                            Off Plan 
                   
                     </li>
                    </Link> 

                     


                    </ul> 
                </div> {/*sidebar menu closing */}


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> MESSAGES </h3>
                   
                </div> {/*sidebar menu closing */}


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">SETTINGS </h3>
                  
                </div> {/*sidebar menu closing */}



                





               
            </div>
             {/*end of sidebar(below)*/}
        </div>
        
    )
}