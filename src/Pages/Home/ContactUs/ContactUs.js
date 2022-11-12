import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton';


const ContactUs = () => {
    return (
        <section style={
            {
             background: `url(${appointment})`
            } }>

                <div className='text-center'>
                <h1 className="text-xl text-primary font-bold pt-4">Contact Us</h1>
      <h1 className="text-4xl font-bold text-white py-6">Stay connected with us</h1>
                </div>

                <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
        
          <input type="text" placeholder="Email Address" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" placeholder="Subject" className="input input-bordered" />
          
        </div>
        <div className="form-control">

            <textarea type="text" placeholder="Your Message" className="input input-bordered"></textarea>
          
         
          
        </div>
        <div className="form-control mt-6">
         <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</div>


        </section>
    );
};

export default ContactUs;