
import React from 'react';

const InfoCard = ({card}) => {
const {name,description,icon,bgClass}=card

    return (
        <div className={`card p-6 md:card-side  bg-base-100 text-white shadow-xl ${bgClass}`}>
        <figure><img src={icon} alt=""/></figure>
        <div className="card-body">
          <h2 className="card-title font-bol">{name}</h2>
          <p>{description}.</p>
          
        </div>
      </div>
    );
};

export default InfoCard;