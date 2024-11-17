import React from 'react';
import Navbar from './Navbar';
import './Hero.css';
<<<<<<< HEAD
import Image from 'next/image';
=======
>>>>>>> 6662c1d37d6625aba9ad21c7586a303962d6dae4

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hero-image-container">
<<<<<<< HEAD
          <Image 
            src="/salman.jpeg" 
            alt="Salman Raza" 
            className="hero-image"
            width={300}
            height={300}
          />
        </div>
        <div className="hero-text">
          <p>I&#39;m</p>
=======
          <img 
            src="/salman.jpeg" 
            alt="Salman Raza" 
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <p>I'm</p>
>>>>>>> 6662c1d37d6625aba9ad21c7586a303962d6dae4
          <p>Salman</p>
          <p>Raza</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
