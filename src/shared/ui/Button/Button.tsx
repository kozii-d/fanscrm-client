import { ButtonHTMLAttributes, memo, ReactNode } from "react";

import cn from "classnames";

import cls from "./Button.module.scss";

export type ButtonTheme = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    theme = "primary",
    disabled,
    ...otherProps
  } = props;

  const mods = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={cn(cls.button, mods, [cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
