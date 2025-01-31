import React, { forwardRef, useState } from "react";
import styles from "./TextField.module.css";

export type Variant = "outlined" | "filled" | "standard";

export interface TextFieldProps {
  variant?: Variant;
  error?: boolean;
  label?: string;
  disabled?: boolean;
  select?: boolean;
  selectedValue?: string;
  id?: string;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  defaultValue?: string;
}

type Ref = HTMLInputElement;
const TextField = forwardRef<Ref, TextFieldProps>(
  (
    {
      variant = "outlined",
      error = false,
      label = "Outlined",
      disabled = false,
      select = false,
      selectedValue,
      id,
      onClick,
      onChange,
      helperText,
      defaultValue,
    }: TextFieldProps,
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue || "");
    const isControlled = selectedValue !== undefined;

    const inputClasses = [styles.input, styles[variant]];
    const labelClasses = [styles.label];
    if (disabled) inputClasses.push(styles.disabled);
    if (variant === "standard") labelClasses.push(styles.standardLabel);
    if (variant === "outlined") labelClasses.push(styles.outlinedLabel);
    if (error) labelClasses.push(styles.errorLabel);
    if (error) inputClasses.push(styles.errorInput);

    return (
      <div
        data-testid="text-field"
        className={styles.container}
        onClick={onClick}
      >
        <label htmlFor={id} className={styles.wrapper}>
          <input
            ref={ref}
            style={{ cursor: select ? "pointer" : "text" }}
            className={inputClasses.join(" ")}
            value={isControlled ? selectedValue : value}
            onChange={
              isControlled
                ? undefined
                : (e) => {
                    setValue(e.target.value);
                    onChange?.(e);
                  }
            }
            type="text"
            id={id}
            placeholder={" "}
            disabled={disabled}
            data-testid="text-input"
          />
          <span data-testid="text-label" className={labelClasses.join(" ")}>
            {label}
          </span>
        </label>

        {helperText && (
          <span
            className={`${styles.helperText} ${error ? styles.errorText : ""}`}
            data-testid="text-helper"
          >
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

export default TextField;
