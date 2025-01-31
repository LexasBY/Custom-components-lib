import React from "react";
import styles from "./Button.module.css";

type Variant = "text" | "contained" | "outlined";
type Size = "small" | "medium" | "large";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

function Button({
  variant = "text",
  size = "medium",
  disabled = false,
  onClick = () => {},
  type = "button",
  children,
}: ButtonProps) {
  const buttonText =
    React.Children.count(children) > 0 ? children : size.toUpperCase();
  return (
    <button
      className={`${styles.myButton} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {buttonText}
    </button>
  );
}

export default Button;
