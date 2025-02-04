import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Select.module.css";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  value: controlledValue,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const isControlled = controlledValue !== undefined;
  const [selectedValue, setSelectedValue] = useState<string | number>(
    controlledValue ?? "",
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isControlled) {
      setSelectedValue(controlledValue ?? "");
    }
  }, [controlledValue]);

  const toggleOpen = () => {
    if (!open && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left,
        width: rect.width,
      });
    }
    setOpen((prev) => !prev);
  };

  const handleOptionClick = (optionValue: string | number) => {
    if (!isControlled) {
      setSelectedValue(optionValue);
    }
    onChange?.(optionValue);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles["custom-select-container"]} ref={wrapperRef}>
      <div
        className={`${styles["custom-select-control"]} ${open ? styles.active : ""}`}
        onClick={toggleOpen}
        tabIndex={0}
      >
        <span
          className={`${styles["custom-input-label"]} ${selectedValue ? styles.selected : ""}`}
        >
          {label}
        </span>
        <span className={styles["custom-select-value"]}>
          {selectedValue
            ? options.find((o) => o.value === selectedValue)?.label || ""
            : ""}
        </span>
        <span className={styles["custom-select-arrow"]}>▾</span>
      </div>
      {open &&
        ReactDOM.createPortal(
          <div
            className={styles["custom-select-menu"]}
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              width: `${menuPosition.width}px`,
              position: "absolute",
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`${styles["custom-menu-item"]} ${
                  selectedValue === option.value ? styles.selected : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default CustomSelect;
