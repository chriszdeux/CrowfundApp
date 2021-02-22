import React from 'react';
import {IoBookmarkSharp} from 'react-icons/io5';

export const HeroSupport = () => {
  return (
    <div className="hero__support__project small__container">
          <button className="support--us">Back this project</button>
          <figure className="bookmark">
            <IoBookmarkSharp className="bookmark--icon"/>
          </figure>
        </div>
      
  )
}
