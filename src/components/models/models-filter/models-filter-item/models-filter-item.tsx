import { FC } from 'react';

import { ModelsFilterItemProps } from './types';

export const ModelsFilterItem: FC<ModelsFilterItemProps> = ({
    children,
    name,
    id,
}) => (
    <div className='models-filter-item checkbox'>
        <input type='radio' name={name} id={id} />
        <label htmlFor={id}>{children}</label>
    </div>
);
