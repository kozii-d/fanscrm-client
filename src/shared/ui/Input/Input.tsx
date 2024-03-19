import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes, memo, useCallback } from "react";

import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
  label?: string
  value?: string | number;
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute
}

export const Input = memo((props: InputProps) => {
  const { label, onChange, value, type = "text", ...otherProps } = props;

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  return (
    <label className={cls.label}>
      {label}
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </label>
  );
});
