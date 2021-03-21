import React from 'react';

import '../../styles/backed-modal-styles.css';
import '../../styles/radio-button.css'

export const BackedModalForm = () => {
  return (
    <form className="pledge__form">
        
        <label className="radio__container">
          <input type="radio"  name="radio" />
          <span className="checkmark"></span>
          <h3>Pledge with no reward</h3>
        </label>
        
        <div className="pledge__content">
          <p>
            Chose to support us without a reward if you simply believe in our project.
            As a backer, you will signed up to recieve products updates via emal.
          </p>
          <h3>103 <span>left</span></h3>
        </div>
        <hr/>
        <div>
          <p>Enter your pladge</p>
          <div className="enter__pledge">
            <label>
              $
              <input type="text"
              />
            </label>
            <button className="support--us support--medium">Continue</button>
          </div>
        </div>
    </form>
  )
}
