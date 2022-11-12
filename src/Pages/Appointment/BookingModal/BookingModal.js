import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,selectedDate}) => {
    const {_id, name, slots}=treatment
    return (
        <>
          
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-primary text-center mb-3">{name}</h3>
   <form  className='mx-auto text-center'>

   <input type="text" defaultValue= {format(selectedDate, 'PP')} disabled className="input input-bordered w-full max-w-xs my-2" />
   <select className="select select-bordered w-full max-w-xs">
{
    slots.map(slot=><option value={slot}>{slot}</option>)
}
</select>
   
   <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs my-2" />
   <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" />
   <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs my-2" />
   <input type="submit"  value='Submit' className="btn btn-primary w-full max-w-xs my-4" />

   </form>
  </div>
</div> 
        </>
    );
};

export default BookingModal;