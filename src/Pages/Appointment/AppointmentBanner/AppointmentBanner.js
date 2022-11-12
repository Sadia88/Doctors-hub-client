import React, { useState } from 'react';

import bgChair from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    

   
    return (
        <div className='my-7'>
           <section  className='py-10' style={
          {
              background: `url(${bgChair})`,
              backgroundSize: 'cover'
          }
         }>

      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
          <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
          <div className='mr-6'>
          <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
     
    />

{/* <p>Available Appointments on   {format(selectedDate, 'PP')}</p> */}

          </div>

        
        </div>
      </div>
        </section>
        </div>
    );
};

export default AppointmentBanner;