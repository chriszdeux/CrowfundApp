import React from 'react';

import {IoBookmarkSharp} from 'react-icons/io5';
import Icon from '../../utilites/logo-mastercraft.svg'
import '../../styles/hero-styles.css'

export const Hero = () => {
  return (
    <section id="hero" className="main__container">
      <figure className="hero--background">
      </figure>
      
      <div className="second__container hero__content ">
        <div className="hero__info ">
          <figure className="logo--company main__container">
            <img src={ Icon } alt="icon"/>
          </figure>
          <h3 className="hero--title">Mastercraft Bamboo Monitor Riser</h3>
          <p className="hero--text">A beautifully handcrafted monitor stand reduce neck and eye strain.</p>
        </div>

        <div className="hero__support__project second__container">
          <button className="support--us">Back this project</button>
          <figure className="bookmark">
            <IoBookmarkSharp className="bookmark--icon"/>
          </figure>
        </div>
      </div>
    </section>
  )
}
