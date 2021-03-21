import React from 'react';
import { ProgessBar } from './ProgessBar';

import '../../styles/backed-styles.css';
import { Divider } from './Divider';
import { dataBacked } from '../../database/getData';

export const Backed = () => {
  const {goal, backed, backers, daysLeft, totalDays} = dataBacked;
  // debugger
  // const progressBar = daysLeft *
  return (
    <section id="backed" className="second__container shadow--container">
      <div className="small__container white--bg">
        <div className="backed__info">
          <h2>$ {backed}</h2>
          <p>of ${goal} backed</p>
        </div>
        <Divider />
        <div className="backed__info">
          <h2>{backers}</h2>
          <p>Total backers</p>
        </div>
        <Divider />
        <div className="backed__info">
          <h2>{daysLeft}</h2>
          <p>Days left</p>
        </div>
        <ProgessBar daysLeft={daysLeft}/>
      </div>
    </section>
  )
}
