import React, { useState } from "react";
import "./textarea.css";
import clsx from "clsx";

interface MyTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Common Props
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  // Special Props
  hintType?: "success" | "danger" | "info";
  hint?: string;
}

type TextAreaProps = MyTextAreaProps & React.RefAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      id,
      className,
      name,
      label,
      value,
      defaultValue,
      placeholder,
      disabled,
      required,
      onChange,
      hintType,
      hint,
      ...rest
    } = props;

    // Generate a unique id if not provided but label is
    const textareaId =
      id ||
      (label
        ? `textarea-${Math.random().toString(36).substring(2, 9)}`
        : undefined);

    const hintCls = clsx({
      "text-actions-info": hintType === "info",
      "text-actions-success": hintType === "success",
      "text-actions-danger": hintType === "danger",
    });

    // Touch state management inside the Textarea component
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) onChange(event);
      setIsTouched(true);
    };

    return (
      <div className={clsx(className, "textarea-container")}>
        {label && (
          <label
            className="subtitle"
            htmlFor={textareaId}
            aria-disabled={disabled}
            aria-required={required}
          >
            {label}
          </label>
        )}
        <textarea
          className="textarea"
          ref={ref}
          id={textareaId}
          name={name}
          rows={3}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          {...rest}
        />
        {isTouched && hintType && hint && <div className={hintCls}>{hint}</div>}
      </div>
    );
  }
);

export default TextArea;
