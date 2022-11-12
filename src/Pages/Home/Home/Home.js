import React from 'react';
import Banner from '../Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import InfoCard from '../InfoCards/InfoCard';
import InfoCards from '../InfoCards/InfoCards';
import MakeanappointmentToday from '../MakeanappointmentToday/MakeanappointmentToday';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDentalCare></ExceptionalDentalCare>
            <MakeanappointmentToday></MakeanappointmentToday>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;