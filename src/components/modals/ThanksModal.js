import React from 'react';
// import Modal from 'reac';
import  { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

import '../../styles/thanks-modal-style.css'

export const ThanksModal = () => {
  return (
      <section id="thanks__modal" className="small__container white--bg">
        <div className="thanks__modal">
          <IoCheckmarkDoneCircleSharp className="success--icon"/>
          <h2>Thanks for your support!</h2>
          <p>
            Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
          </p>
          <button className="support--us support--small">Got it</button>
        </div>
      </section>   
  )
}
