import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalCard, ModalImage } from './Modal.styled';
import PropTypes from "prop-types"

// Modal.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   onClose: PropTypes.func,
// };

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func,
  };
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
      
    }
  };

  render() {
    const { src, alt } = this.props
    return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <ModalCard>
              <ModalImage src={src} alt={alt} />
            </ModalCard>
        </Overlay>,
      modalRoot,
    );
  }
}

  
