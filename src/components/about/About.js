import React from 'react';
import { AboutInfo } from './AboutInfo';
import { BackedCard } from './BackedCard';

import '../../styles/about-styles.css';
export const About = () => {
  return (
    <section id="about" className="second__container white--bg">
      <div className="about__info">
        <AboutInfo />
        <BackedCard />
        <BackedCard />
        <BackedCard />
        <BackedCard />
      </div>
    </section>
  )
}
