import { FC } from 'react';

import classNames from 'classnames';

import './button.scss';

export interface ButtonProps {
  disabled?: boolean;
  dark?: boolean;
  fullsize?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, disabled = false, dark = false, fullsize = false }) => {
  const classes = classNames(
    'btn',
    { 'btn--dark': dark },
    { 'btn--fullsize': fullsize }
  );
  return (
    <button className={classes} disabled={disabled}>
      <span>{children}</span>
    </button>
  )
}