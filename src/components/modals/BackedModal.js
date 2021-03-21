import React from 'react';
import {IoCloseOutline} from 'react-icons/io5';
import '../../styles/backed-modal-styles.css'
import { BackedModalForm } from './BackedModalForm';

export const BackedModal = ({showContent, toggleShowContent}) => {
  // debugger
  return (
    <section className="second__container white--bg">
      <div className="pledge">
        <div className="pledge__header">
          <h2>Back this project</h2>
          <IoCloseOutline                       className="icon--close"
          onClick={() => toggleShowContent(showContent)}
          />
        </div>
        <p>
          Whant to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
      </div>
      <BackedModalForm />
    </section>
  )
}
