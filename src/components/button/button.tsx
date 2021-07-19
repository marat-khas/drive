import { FC } from 'react';
import classNames from 'classnames';

import './button.scss';

export interface ButtonProps {
    disabled?: boolean;
    dark?: boolean;
    fullsize?: boolean;
    submit?: boolean;
}

export const Button: FC<ButtonProps> = ({
    children,
    disabled = false,
    dark = false,
    fullsize = false,
    submit = false,
}) => {
    const classes = classNames(
        'btn',
        { 'btn--dark': dark },
        { 'btn--fullsize': fullsize }
    );
    return (
        <button
            className={classes}
            disabled={disabled}
            type={submit ? 'submit' : 'button'}
        >
            <span>{children}</span>
        </button>
    );
};
