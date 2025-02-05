import React, { useState } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange = () => {},
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    setIsChecked((prev) => !prev);
    onChange(!isChecked);
  };

  return (
    <div
      className={`${styles.switch} ${isChecked ? styles.checked : ""} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={handleToggle}
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
    >
      <div className={styles.track}>
        <div className={styles.thumb} />
      </div>
    </div>
  );
};

export default Switch;
