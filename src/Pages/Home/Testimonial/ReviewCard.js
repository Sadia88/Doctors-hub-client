import React from 'react';

const ReviewCard = ({reviewInfo}) => {
    const {name,img,review,location}=reviewInfo
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <p>{review}</p>
    <div className='flex items-center'>
    <img src={img} alt=""  className='w-15 rounded-full pr-5'/>
    
    <div className="card-actions grid grid-flow-row  align-middle">
      <p className='font-bold'>{name}</p>
      <p>{location}</p>
    </div>
    </div>
  </div>
</div>
    );
};

export default ReviewCard;