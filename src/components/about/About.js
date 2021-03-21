import React from 'react';
import { AboutInfo } from './AboutInfo';
import { BackedCard } from './BackedCard';
import '../../styles/about-styles.css';
import { dataPledge } from '../../database/getData';
export const About = () => {
  // console.log(dataPledge)
  
  return (
    <section id="about" className="second__container white--bg">
      <div className="about__info">
        <AboutInfo />
        {
          dataPledge.map(option => (
            // <BackedCard 
            //   key={option.id} {...option}
            // />
            option.pledge !== undefined &&  
              <BackedCard 
                key={option.id}
                {...option}
              />

          ))
        }
      </div>
    </section>
  )
}
