import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalCard, ModalImage } from './Modal.styled';
import PropTypes from "prop-types"
 
const modalRoot = document.querySelector('#modal-root');

export default function Modal({src,alt, onClose}) {

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

   onClose();
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    console.log("Mounting phase: same when componentDidMount runs");

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log("Unmounting phase: same when componentWillUnmount runs");
    };
  }, );
 
 

  


 const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
      
    }
  };
 


  return createPortal(
    <Overlay onClick={handleBackdropClick}>
        <ModalCard>
          <ModalImage src={src} alt={alt} />
        </ModalCard>
    </Overlay>,
   modalRoot,
);
}
  
Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func,
};