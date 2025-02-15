import React, { useState, useEffect } from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked = false,
  disabled = false,
  onChange = () => {},
  label = 'Checkbox',
  id = 'idCbx',
}) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  useEffect(() => {
    if (isControlled && checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked, isControlled]);

  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const newChecked = event.target.checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    if (onChange && newChecked !== isChecked) {
      onChange(newChecked);
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${isChecked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}
    >
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
