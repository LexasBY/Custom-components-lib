import React from "react";
import styles from "./Button.module.css";
console.log(styles);

type Variant = "text" | "contained" | "outlined";
type Size = "small" | "medium" | "large";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({
  variant = "text",
  size = "medium",
  disabled = false,
  onClick = () => {},
  children,
}: ButtonProps) {
  const cssClasses = [styles.myButton, styles[variant], styles[size]];
  if (disabled) cssClasses.push(styles.disabled);
  return (
    <button
      className={cssClasses.join(" ")}
      onClick={onClick}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
