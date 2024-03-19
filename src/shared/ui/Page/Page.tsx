import { HTMLAttributes, memo, ReactNode } from "react";

import cls from "./Page.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Page = memo((props: CardProps) => {
  const { children, ...otherProps } = props;

  return (
    <div className={cls.page} {...otherProps}>
      {children}
    </div>
  );
});
