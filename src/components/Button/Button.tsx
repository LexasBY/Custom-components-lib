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

const Button: React.FC<ButtonProps> = ({
  variant = "text",
  size = "medium",
  disabled = false,
  onClick,
  children,
}) => {
  const classNames = [
    styles.myButton,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
  ].join(" ");

  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      className={classNames}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
