import React from 'react';


import '../../styles/hero-styles.css'
import { HeroInfo } from './HeroInfo';
import { HeroSupport } from './HeroSupport';

export const Hero = () => {
  return (
    <main id="hero" className="main__container">
      <figure className="hero--background">
      </figure>
      
      <div className="second__container hero__content ">
        <HeroInfo />
        <HeroSupport />
      </div>
    </main>
  )
}
