import React, { useState } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  disabled = false,
  onChange = () => {},
  label = "Checkbox",
  id = "idCbx",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    if (disabled) return;
    setIsChecked((prev) => !prev);
    onChange(!isChecked);
  };

  const wrapperClasses = [
    styles.wrapper,
    isChecked ? styles.checked : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses} onClick={handleChange}>
      <input
        className={styles.input}
        id={id}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label className={styles.checkbox} htmlFor={id} />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
