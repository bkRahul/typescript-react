import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  as?: E;
  children: React.ReactNode;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'div'>({
  size,
  color,
  as,
  children,
}: TextProps<E>) => {
  let Component = as || 'div';
  return <Component className={`with-${size}-${color}`}>{children}</Component>;
};
