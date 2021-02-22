import React from 'react'
import Icon from '../../utilites/logo-mastercraft.svg';
export const HeroInfo = () => {
  return (
    <div className="hero__info ">
      <figure className="logo--company main__container">
        <img src={ Icon } alt="icon"/>
      </figure>
      <h3 className="hero--title">Mastercraft Bamboo Monitor Riser</h3>
      <p className="hero--text">A beautifully handcrafted monitor stand reduce neck and eye strain.</p>
    </div>
  )
}
