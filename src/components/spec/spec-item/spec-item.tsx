import { FC } from 'react';

import { SpecItemProps } from './types';

export const SpecItem: FC<SpecItemProps> = ({ name, value }) => (
    <div className='spec__item'>
        <div className='spec__name'>{name}</div>
        <div className='spec__dots' />
        <div className='spec__value'>
            {value.split('/n').map((val) => (
                <p key={val}>{val}</p>
            ))}
        </div>
    </div>
);
