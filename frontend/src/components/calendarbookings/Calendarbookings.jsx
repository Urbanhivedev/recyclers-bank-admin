import React,{useEffect, useState} from 'react';
import './calendarbookings.css'
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

import axios from 'axios';





export default function CalendarBookings (props){
  
  let url ;

 const [bookedDates,setBookedDates] = useState('')



  useEffect(() => {

    /* axios.get(url).then(  //i usually dont use .then syntax but i just want to get some practice with it
      response => setBookedDates(response.data)
     ) */
  
 console.log('hello')

   },[url])

  
  





 //this function is done so that I may restrict the time slots to 9am -5pm
      function timeSlotValidator(slotTime) {
          
         /*I COULD ADD AN EXTRA CONDITION WHERE SLOT TIME IS NOT EQUAL TO ANY OF THE BOOKED TIMES IN AN ARRAY OR SOMETHING, USING A HIGHER ORDER ARRAY METHOD.*/ 
        
        
        const preWorkHours = new Date(
              slotTime.getFullYear(),
              slotTime.getMonth(),
              slotTime.getDate(),
              8,
              0,
              0
            );

            const postWorkHours = new Date(
                  slotTime.getFullYear(),
                  slotTime.getMonth(),
                  slotTime.getDate(),
                  17,
                  0,
                  0
                );

            const isValid = slotTime.getTime() > preWorkHours.getTime() && 
                            slotTime.getTime() < postWorkHours.getTime() &&
                            slotTime.getDay() === 5 //I ONLY WANT THEM TO BOOK ON FRIDAYS SO I RESTRICTED GET DAY TO 5
                                                    //it is here in isValid that i will use the dates from the selected developer to affect which dates can be picked
                            



            console.log(slotTime.getDate())
            return isValid;
          }
          
     //theme options 
     const theme = {
      primary: '#3a9ad9',
      secondary: '#f0f0f0',
      background: '#ececec', // This matches our current off-white container background
      buttons: {
        disabled: {
          color: '#333',
          background: '#dfdfdf'
        },
        confirm: {
          color: '#fff',
          background: "rgb(221, 174, 46)"/*'#b0b0b4'*/,
          hover: {
            color: '',
            background:  "rgba(221, 174, 46,0.3)",
          }
        }
      },
      feedback: {
        success: {
          color: '#29aba4'
        },
        failed: {
          color: '#eb7260'
        }
      }
    };

  //simullating a HTTP request , i think  i want to make a request that checks if slots are free and returns if the booking was successful  /ALTERNATIVELY BLOCK OUT ALL THE BOOKED SPOTS ? BUT HOW 
    function fakeRequest(data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           //Uncomment below to trigger error:
          //return reject('Error: KABOOM!');
          resolve({
            status: 'ok', //i AM GONNA JUST SEND CONFIRMATION THAT THIS WAS REGISTERED SUCCESSFULLY IN THE DATABASE , BEFORE  SEND AN OKAY TO THE BOOKER
            scheduled: data
          });
        }, 2e3);
      });
    }



    const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState('');
  
  
  
  const handleScheduled = date => {
   
   /*you need text that pops up if they haven't picked a developer ! it'll be done here */
   
    setIsScheduling(true);
    setScheduleErr('');
    fakeRequest(date)
      .then(json => {
        setScheduleErr('');
        setIsScheduled(true);
        console.log('fake response: ', json);
      })
      .catch(err => {
        setScheduleErr(err);
      })
      .finally(() => {
        setIsScheduling(false);
      });
  }


      return(

           <div className = "calendarContainer">
                 <div className="calendarStyle">
                 <div className="widgetCalTitle"> Pick a day and time</div>
                  <h4 >( We're mostly available on Fridays ! )</h4>
             <DayTimePicker 
             timeSlotSizeMinutes={60} 
             timeSlotValidator={timeSlotValidator} 
             theme={theme}
             isLoading={isScheduling}
             isDone={isScheduled}
            err={scheduleErr}
            onConfirm={handleScheduled}
            doneText={"Your meeting has been scheduled! We'll send you a reminder email closer to the time"}
             
             />

               </div>
           </div>
            
      )
  
}