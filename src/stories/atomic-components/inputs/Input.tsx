import React from "react";
import "./input.css";
import clsx from "clsx";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Special Props
  label?: string;
  hintType?: "success" | "danger" | "info";
  hint?: string;
}

type InputProps = MyInputProps & React.RefAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    className,
    name,
    type,
    label,
    value,
    defaultValue,
    placeholder,
    disabled,
    required,
    autoFocus,
    onChange,
    hintType,
    hint,
    ...rest
  } = props;

  // Generate a unique id if not provided but label is
  const inputId =
    id ||
    (label ? `input-${Math.random().toString(36).substring(2, 9)}` : undefined);

  const hintCls = clsx({
    "text-actions-info": hintType === "info",
    "text-actions-success": hintType === "success",
    "text-actions-danger": hintType === "danger",
  });

  return (
    <div className={clsx(className, "input-container")}>
      {label && (
        <label
          className="subtitle"
          htmlFor={inputId}
          aria-disabled={disabled}
          aria-required={required}
        >
          {label}
        </label>
      )}
      <input
        className="input"
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        onChange={onChange}
        {...rest}
      />
      {hintType && hint && <div className={hintCls}>{hint}</div>}
    </div>
  );
});

export default Input;
