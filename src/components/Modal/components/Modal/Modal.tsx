import React, { useEffect } from 'react';
import { ModalProps } from '../../types';
import { Overlay, ModalWrapper, Content } from './Modal.styles';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  footer,
  children,
  width,
  closeOnEscape = true,
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    if (closeOnEscape) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose, closeOnEscape]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalWrapper width={width} onClick={(e) => e.stopPropagation()}>
        <Header {...header} />
        <Content>{children}</Content>
        {footer && <Footer {...footer} />}
      </ModalWrapper>
    </Overlay>
  );
};
