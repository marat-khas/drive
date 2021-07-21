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
}) => {
    const classes = classNames('btn', `btn--bg${bg}`, {
        'btn--fullsize': fullsize,
    });
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
