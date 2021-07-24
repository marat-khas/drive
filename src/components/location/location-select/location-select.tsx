import { FC } from 'react';
import Select from 'react-select';

import { LocationSelectProps } from './types';

export const LocationSelect: FC<LocationSelectProps> = ({
    label,
    value,
    placeholder,
    options,
    handleChange,
}) => (
    <div className='form__item'>
        <div className='form__label'>{label}</div>
        <div className='form__input'>
            <Select
                value={value}
                placeholder={placeholder}
                isClearable
                onChange={handleChange}
                options={options}
            />
        </div>
    </div>
);
