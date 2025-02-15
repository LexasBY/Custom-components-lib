import React, { forwardRef, useState, useEffect } from 'react';
import styles from './TextField.module.scss';
export type Variant = 'outlined' | 'filled' | 'standard';

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
  defaultValue?: string;
}

type Ref = HTMLInputElement;
const TextField = forwardRef<Ref, TextFieldProps>(
  (
    {
      variant = 'outlined',
      error = false,
      label = 'Outlined',
      disabled = false,
      select = false,
      selectedValue,
      id,
      onClick,
      onChange,
      defaultValue = '',
    }: TextFieldProps,
    ref
  ) => {
    const isControlled = selectedValue !== undefined;

    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
      if (isControlled) {
        setValue(selectedValue);
      }
    }, [selectedValue, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setValue(e.target.value);
      }
      onChange?.(e);
    };

    const inputClasses = [styles.input, styles[variant]];
    const labelClasses = [styles.label];
    if (disabled) inputClasses.push(styles.disabled);
    if (error) labelClasses.push(styles.error);
    if (error) inputClasses.push(styles.error);

    return (
      <div data-testid="text-field" className={styles.container} onClick={onClick}>
        <label htmlFor={id} className={styles.wrapper}>
          <input
            ref={ref}
            style={{ cursor: select ? 'pointer' : 'text' }}
            className={inputClasses.join(' ')}
            value={value}
            onChange={handleChange}
            type="text"
            id={id}
            placeholder={' '}
            disabled={disabled}
            data-testid="text-input"
          />
          <span data-testid="text-label" className={labelClasses.join(' ')}>
            {label}
          </span>
        </label>
      </div>
    );
  }
);
TextField.displayName = 'TextField';

export default TextField;
