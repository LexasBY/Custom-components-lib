import React, { useState, useEffect } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange = () => {},
  disabled = false,
}) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(
    isControlled ? checked : false,
  );

  useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;
    setInternalChecked((prev) => {
      const newChecked = !prev;
      onChange(newChecked);
      return newChecked;
    });
  };

  return (
    <label
      className={`${styles.switch} ${internalChecked ? styles.checked : ""} ${
        disabled ? styles.disabled : ""
      }`}
      role="switch"
      aria-checked={internalChecked}
      aria-disabled={disabled}
    >
      <input
        type="checkbox"
        className={styles.input}
        checked={internalChecked}
        onChange={handleToggle}
        disabled={disabled}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </label>
  );
};

export default Switch;
