import React, { useEffect, useState } from 'react';
import Snowflake from './Snowflake';  
import './css/snowfall.css'; 

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [numFlakes, setNumFlakes] = useState(20); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Mobile view 
        setNumFlakes(20); 
      } else {
        setNumFlakes(50); 
      }
    };

    handleResize(); // Set initial number of flakes
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const flakes = [];

    for (let i = 0; i < numFlakes; i++) {
      flakes.push({
        left: Math.random() * 100, // Position horizontally
        fontSize: Math.random() * 10 + 10, // Size of snowflake
        duration: Math.random() * 10 + 5, // Duration to fall
        animationDelay: Math.random() * 10 + 's' // Delay before animation starts
      });
    }

    setSnowflakes(flakes);
  }, [numFlakes]);

  return (
    <div className="snowfall">
      {snowflakes.map((flake, index) => (
        <Snowflake
          key={index}
          left={flake.left}
          fontSize={flake.fontSize}
          duration={flake.duration}
          animationDelay={flake.animationDelay}
        />
      ))}
    </div>
  );
};

export default Snowfall;
