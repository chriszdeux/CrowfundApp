import React from 'react';
import Modal from 'react-modal';
import {IoBookmarkSharp, IoCloseOutline} from 'react-icons/io5';
import {useShowContent} from '../../hooks/useShowContent'
import { BackedModal } from '../modals/BackedModal';
export const HeroSupport = () => {
  const [showContent, toggleShowContent] = useShowContent();

  // debugger
  return (
    <div className="hero__support__project small__container">
          <button                               className="support--us"
            onClick={ () => {
              toggleShowContent(showContent)
            } }
          >Back this project</button>
          <Modal 
            ariaHideApp={ false }
            className="modal"
            overlayClassName="overlay"
            isOpen={ showContent }
          >
            
            <BackedModal 
              showContent={showContent}
              toggleShowContent={toggleShowContent}
            />
            {/* <BackedModal /> */}
          </Modal>
          <figure className="bookmark">
            <IoBookmarkSharp className="bookmark--icon"/>
          </figure>
        </div>
      
  )
}
