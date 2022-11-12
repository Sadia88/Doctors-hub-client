import React from 'react';


const AvailableAppointment = ({options,setTreatment}) => {

    const {name,slots}=options
    return (
        <div>
            <div className="card  mt-10  shadow-xl">
  <div className="card-body text-center mx-auto">
    <h2 className="card-title font-2xl text-primary text-center">{name}</h2>
    <p>{slots.length >0 ? slots[0] : 'No appointment is available Today'}</p>
    <p>{slots.length} {slots.length>1? "SPACES" : 'SPACE'} AVAILABLE</p>
    <div className="card-actions justify-center">
     
      <label htmlFor="booking-modal" disabled={slots.length===0} onClick={()=>setTreatment(options)} className="btn btn-primary text-white font-bold">Book Appointment</label>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AvailableAppointment;