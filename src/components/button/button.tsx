import { FC } from 'react';
import classNames from 'classnames';

import './button.scss';

export interface ButtonProps {
    disabled?: boolean;
    bg?: number;
    fullsize?: boolean;
    submit?: boolean;
}

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
