import React from 'react';
import './Offers.css';
import exclusive from '../../assets/exclu.webp';

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on our best-selling products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <div className="image-container">
          <img src={exclusive} alt="Exclusive Offers" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
