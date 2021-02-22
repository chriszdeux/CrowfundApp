import React from 'react';
import { ProgessBar } from './ProgessBar';

import '../../styles/backed-styles.css';
import { Divider } from './Divider';
export const Backed = () => {
  return (
    <section id="backed" className="second__container shadow--container">
      <div className="small__container white--bg">
        <div className="backed__info">
          <h2>$15421541</h2>
          <p>of $944745151 backed</p>
        </div>
        <Divider />
        <div className="backed__info">
          <h2>$15421541</h2>
          <p>of $944745151 backed</p>
        </div>
        <Divider />
        <div className="backed__info">
          <h2>$15421541</h2>
          <p>of $944745151 backed</p>
        </div>
        <ProgessBar />
      </div>
    </section>
  )
}
