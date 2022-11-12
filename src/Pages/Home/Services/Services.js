import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const serviceData=[
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam.',
            img: fluride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'ugit sit pariatur eligendi voluptatum velit magnam optio at deserunt ut possimus excepturi, quis, neque, placeat illum porro',
            img: cavity
        },
        {
            id: 2,
            name: "Teeth Whitening",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quam illum vitae. F.',
            img: whitening
        },
    ]
    return (
        <div className='mt-20'>
            <div className=' text-center'>
            <h3 className='font-bold text-xl text-primary uppercase'>Our Services</h3>
            <h3 className='text-3xl'>Services We provide</h3>

            <div className='grid gap-6 lg:grid-cols-3 grid-cols-2'>
                {
                    serviceData.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default Services;