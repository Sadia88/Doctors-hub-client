import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    const reviewsData=[
        {
            _id:1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:people1

        },
        {
            _id:2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:people2

        },
        {
            _id:3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:people3

        },
    ]
    return (
        <section className='mt-20  p-10'>
            <div >
           <div className='flex justify-between'>
          <div>
          <h1 className="text-xl text-primary font-bold py-5 ">Testimonial</h1>
      <h1 className="text-4xl font-bold ">What Our Patients Says</h1>
          </div>
      <figure>
            <img  className='lg:w-42 w-24'  src={quote} alt="" />
           </figure>
           </div>
          
          <div className='grid lg:grid-cols-3 gap-4 grid-cols-1'>
          {
            reviewsData.map(reviewInfo=><ReviewCard key={reviewInfo._id} reviewInfo={reviewInfo}></ReviewCard>)
           }
          </div>
            
            </div>
        </section>
    );
};

export default Testimonial;