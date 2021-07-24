import { FC } from 'react';

import { ModelsFilterItem } from '@components/models/models-filter/models-filter-item';

import './models-filter.scss';

export const ModelsFilter: FC = () => {
    const filters = ['Все модели', 'Эконом', 'Премиум'];

    return (
        <div className='models-filter'>
            <div className='models-filter__wrapper'>
                {filters.map((item, index) => (
                    <div className='models-filter__item' key={item}>
                        <ModelsFilterItem
                            name='models-filter-item'
                            id={`models-filter-item${index}`}
                        >
                            {item}
                        </ModelsFilterItem>
                    </div>
                ))}
            </div>
        </div>
    );
};
