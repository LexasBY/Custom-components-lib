import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  variant?: "default" | "error";
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  variant = "default",
}) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={styles.windowWrapper} data-testid="modal">
      <div
        className={styles.background}
        data-testid="background"
        aria-hidden
        onClick={onClose}
      />
      <div
        className={`${styles.window} ${styles[variant]}`}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
