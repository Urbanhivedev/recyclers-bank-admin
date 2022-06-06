import React from 'react';
import './bookings.css'
import Calendarbookings from '../../components/calendarbookings/Calendarbookings';
import Developerlist from '../../components/developerlist/Developerlist'

import axios from 'axios'

export default function Bookings (){

      return(
           <div className = "widgetDivider">
            
            <Developerlist/>    {/*GONNA PASS PROPS THAT HAS THE DEVELOPERS ,THEN IF THE DEVELOPER IS SELECTED HIS SLOTS WILL BE THE ONES WE ARE PICKING FROM */}
            <Calendarbookings/> {/*GONNA PASS PROPS THAT HAVE ALL THE BOOKED SLOTS */}
                                 {/*I AM CONSIDERING MAKING THE CALENDAR BOOKINGS AND DEVELOPERLIST INTO ONE COMPONENT ,SO  I CAN PASS STATE THAT AFFECT THE BOTH OF THEM */}
                                 {/*THE DATES AVAILABLE HAVE TO BE A DATE FORMAT SO I CAN COMPARE THEM IN THE TIMESLOT VALIDATOR FUNCTION I IMPORTED, PROBLEM SOLVED */}
                                 
            {/*a prop for past bookings of a particular person - ill pass in the same props as above, or ill filter out
            the ones that the user did , based on their login signature */}
           </div>
            
      )
}
