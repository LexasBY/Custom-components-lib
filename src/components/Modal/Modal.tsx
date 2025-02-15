import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'error';
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, variant = 'default' }) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose?.();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div className={styles.windowWrapper} data-testid="modal">
      <div
        className={styles.background}
        data-testid="background"
        aria-hidden
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose?.();
          }
        }}
      />
      <div className={`${styles.window} ${styles[variant]}`} role="dialog">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
