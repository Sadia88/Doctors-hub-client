import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,selectedDate,setTreatment}) => {
    const {_id, name, slots}=treatment;
    const date=format(selectedDate, 'PP')

   const handleBookingSubmit=(e)=>{

    e.preventDefault()
   const  form=e.target

   const patientName=form.name.value
   const phoneNumber=form.phoneNumber.value
   const slot=form.slot.value
   const email=form.email.value
   console.log(name,phoneNumber,slot,email,date)


   const booking={
    selectedDate: date,
    treatment:name,
    patientName:patientName,
    email,
    slot,
    phoneNumber
   }
   setTreatment(null)
    console.log(booking)
    }
    return (
        <>
          
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-primary text-center mb-3">{name}</h3>
   <form  onSubmit={handleBookingSubmit} className='mx-auto text-center'>

   <input type="text" defaultValue={date}  disabled className="input input-bordered w-full max-w-xs my-2" />
   <select name='slot' className="select select-bordered w-full max-w-xs">
{
    slots.map((slot,i)=><option key={i} value={slot}>{slot}</option>)
}
</select>
   
   <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs my-2" />
   <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" />
   <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs my-2" />
   <input type="submit"  value='Submit' className="btn btn-primary w-full max-w-xs my-4" />

   </form>
  </div>
</div> 
        </>
    );
};

export default BookingModal;