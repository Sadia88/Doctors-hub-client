import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AvailableAppointment from './AvailableAppointment';

const AvailableAppointments = ({selectedDate}) => {
const [appointmentOptions,setAppointmentOptions]=useState([])
const [treatment,setTreatment]=useState(null)
useEffect(()=>{

    fetch('AppointmentOption.json')
    .then(res=>res.json())
    .then(data=>setAppointmentOptions(data))


},[])

    return (
        <section>
            <p className='text-center text-primary text-xl font-semibold'>Available Appointments on   {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11'>

                {
                    appointmentOptions.map(options=><AvailableAppointment key={options._id} options={options} setTreatment={setTreatment}></AvailableAppointment>)
                }
            </div>
           { treatment &&
             <BookingModal treatment={treatment}  selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>
           }
            
        </section>
    );
};

export default AvailableAppointments;