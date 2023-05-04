import React from 'react';

import "../../styles/Card.css"
const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="" />
    </div>
  );
};

export default Card;