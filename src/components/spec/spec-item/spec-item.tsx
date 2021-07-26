import { FC } from 'react';

import { SpecItemProps } from './types';

export const SpecItem: FC<SpecItemProps> = ({ label, value }) => (
    <div className='spec__item'>
        <div className='spec__label'>{label}</div>
        <div className='spec__dots' />
        <div className='spec__value'>{value}</div>
    </div>
);
