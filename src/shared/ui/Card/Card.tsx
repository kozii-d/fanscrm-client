import { HTMLAttributes, memo, ReactNode } from "react";

import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { children, ...otherProps } = props;

  return (
    <div className={cls.card} {...otherProps}>
      {children}
    </div>
  );
});
