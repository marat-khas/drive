import { FC } from 'react';

import { Radio } from '@components/common/radio';

import { ModelsFilterItemProps } from './types';

export const ModelsFilterItem: FC<ModelsFilterItemProps> = ({
    children,
    name,
    id,
}) => (
    <div className='models-filter-item'>
        <Radio name={name} id={id}>
            {children}
        </Radio>
    </div>
);
