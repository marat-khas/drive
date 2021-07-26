import { FC } from 'react';
import classNames from 'classnames';

import './radio.scss';

import { RadioProps } from './types';

export const Radio: FC<RadioProps> = ({
    children,
    name,
    id,
    className,
    changeHandle,
}) => {
    let classNamesArray = ['radio'];
    if (className) {
        if (Array.isArray(className)) {
            classNamesArray = [...classNamesArray, ...className];
        } else {
            classNamesArray.push(className);
        }
    }
    const classes = classNames(...classNamesArray);

    return (
        <div className={classes}>
            <input type='radio' name={name} id={id} onChange={changeHandle} />
            <label htmlFor={id}> {children} </label>
        </div>
    );
};
