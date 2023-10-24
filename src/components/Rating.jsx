import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <h2>Rating: {rating}</h2>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-block',
        color: filled ? 'yellow' : 'gray',
        cursor: 'pointer'
      }}
    >
      &#9733;
    </span>
  );
};

export default Rating;
