import React from 'react';
import marker from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=
   [
    {
        id: 1,
        name: 'Opening Hours',
        description:'Open 8.00 am to 10.00 pm  everyday',
        icon: clock,
        bgClass:'bg-gradient-to-r from-primary to-secondary text-white'

    },
    {
        id: 2,
        name: 'Our Location',
        description:'Fatehabad, Hathazari, Chittagong',
        icon: marker,
        bgClass:'bg-accent'

    },
    {
        id: 3,
        name: 'Contact Us',
        description:'Open 8.00 am to 10.00 pm  everyday',
        icon: phone,
        bgClass:'bg-gradient-to-r from-primary to-secondary text-white'

    }
   ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-11'>
            {
                cardData.map(card=><InfoCard key={card.id} card={card}></InfoCard>)
            }
            
        </div>
    );
};

export default InfoCards;