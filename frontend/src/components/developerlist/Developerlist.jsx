import React from 'react';
import './developerlist.css'

import Todayicon from '@mui/icons-material/Today';

/*import Developerpic1 from '../../images/headshot-for-startup.webp'*/
import Developerpic2 from '../../images/Jonathan-Headshot.jpg'

export default function Developerlist (){

      return(
           <div className = "listContainer">
           <div className="widgetSmTitle"> Available Developers</div>
          <ul className="widgetSmList">
           <li className="widgetSmListItem">
            {/*<img src={Developerpic1} alt="profile pic" className="devAvatar" />*/}
            <div className="widgetSmUser">
           
             <span className="widgetSmUsername"> Olanrewaju Kabir</span>
             <span className="widgetSmUserTitle"> Php developer, MySQL ,CI/CD</span>
           
            </div>
          <button className="widgetSmButton">
              <Todayicon className='buttonBackground'/> Book 
          </button>


          </li> {/*widgetSmListItem ending*/ }


          <li className="widgetSmListItem">
            <img src={Developerpic2} alt="profile pic" className="devAvatar" />
            <div className="widgetSmUser">
           
             <span className="widgetSmUsername"> Dagogo Uranta</span>
             <span className="widgetSmUserTitle"> Frontend Developer,Node JS </span>
           
            </div>
          <button className="widgetSmButton">
              <Todayicon className='buttonBackground'/> Book 
          </button>


          </li> {/*widgetSmListItem ending*/ }


          </ul>
            
           </div>
            
      )
}