import React from 'react';
import './css/snowflake.css'; 

const Snowflake = ({ left, fontSize, duration, animationDelay }) => {
  // Array of possible snowflake images
  const snowflakeImages = [
    '/snowflake.png',
    '/snow.png'
  ];

  // Randomly select an image
  const backgroundImage = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];

  return (
    <div
      className="snowflake"
      style={{
        left: `${left}%`,
        width: `${fontSize}px`,
        height: `${fontSize}px`,
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        animationDuration: `${duration}s`,
        animationDelay: animationDelay,
      }}
    />
  );
};

export default Snowflake;
