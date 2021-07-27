import { FC, useState } from 'react';

import './input.scss';

import { InputProps } from './types';

export const Input: FC<InputProps> = ({ id, name, type = 'text' }) => {
    const [value, setValue] = useState('');
    return (
        <div className='input'>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className='input__clear' onClick={() => setValue('')} />
        </div>
    );
};
