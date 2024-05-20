import React, { useState } from 'react';
import './Background.css';

import arrow_btn from '../../assets/arrow_btn.png';
const HeroBackground = ({ heroData, setHeroCount, heroCount }) => {
  const [playStatus, setPlayStatus] = useState(false);
  const handlePlayStatus = () => {
    setPlayStatus(!playStatus);
  };
  const handleHeroCount = (count) => {
    setHeroCount(count);
  };

  let backgroundImage;
    if (heroCount === 0) {
      backgroundImage = "https://images.squarespace-cdn.com/content/v1/5fa9a00ebf7ccf12b4435486/1604954439742-0CJ8FHJML2YQLG4H5ID8/06.jpg?format=2500w";
    } else if (heroCount === 1) {
    backgroundImage = "https://i1.wp.com/www.myfreeslides.com/wp-content/uploads/2020/04/wavy-lines-background.png?fit=1920%2C1080&ssl=1";
  } else if (heroCount === 2) {
    backgroundImage = "https://static.vecteezy.com/system/resources/previews/002/326/623/non_2x/black-golden-royal-luxury-background-landing-page-free-vector.jpg"
  }

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => handleHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => handleHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => handleHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
      
      </div>
      <img src={backgroundImage} className="background" alt="" />
    </div>
  );
};

export default HeroBackground;