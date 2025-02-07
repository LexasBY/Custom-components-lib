import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "text" | "contained" | "outlined";
type Size = "small" | "medium" | "large";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

function Button<T>({
  variant = "text",
  size = "medium",
  disabled = false,
  onClick = () => {},
  children,
}: ButtonProps) {
  return (
    <button
      className={`${styles.myButton} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
