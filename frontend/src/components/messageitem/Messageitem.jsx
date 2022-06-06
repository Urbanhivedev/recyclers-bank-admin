
import React from 'react';
import './messageitem.css'

import ReplyIcon from '@mui/icons-material/Reply';

/*import Developerpic1 from '../../images/headshot-for-startup.webp'*/
import Developerpic2 from '../../images/Jonathan-Headshot.jpg'

export default function MessageItem (){

      return(
          
          <ul className="widgetSmList">
           <li className="widgetSmListItem">
            <img src={Developerpic2} alt="profile pic" className="devAvatar" />
            <div className="widgetSmUser">
           
             <span className="widgetSmUsername"> Hugh</span>
             <span className="widgetSmUserTitle"> Hi Frank ,thanks for sharing the design.</span>
           
            </div>
          <button className="widgetSmButton">
              <ReplyIcon className='buttonBackground'/> Reply 
          </button>
         </li>

          </ul>
            
          
            
      )
}