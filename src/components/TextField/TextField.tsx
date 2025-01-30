import React from "react";
import styles from "./TextField.module.css";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

function TextField({
  label,
  error = false,
  helperText,
  className,
  id,
  ...props
}: TextFieldProps) {
  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.textFieldContainer} ${className || ""}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.input} ${error ? styles.error : ""}`}
        aria-invalid={error}
        {...props}
      />
      {helperText && (
        <span
          className={`${styles.helperText} ${error ? styles.errorText : ""}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}

export default TextField;
