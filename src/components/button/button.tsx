import { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';

import './button.scss';

export const Button: FC<ButtonProps> = ({
    children,
    disabled = false,
    bg = 0,
    fullsize = false,
    submit = false,
    onClick
}) => {
    const classes = classNames('btn', `btn--bg${bg}`, {
        'btn--fullsize': fullsize,
    });
    return (
        <button
            className={classes}
            disabled={disabled}
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
};
