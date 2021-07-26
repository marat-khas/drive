import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModelsFilterItem } from '@components/models/models-filter/models-filter-item';
import { GetCategoriesAction } from '@state/categories/actions';
import { getCategories } from '@state/selectors';

import './models-filter.scss';

export const ModelsFilter: FC = () => {
    const categories = useSelector(getCategories);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories) {
            dispatch(GetCategoriesAction());
        }
    }, [categories, dispatch]);

    return (
        <div className='models-filter'>
            <div className='models-filter__wrapper'>
                <div className='models-filter__item'>
                    <ModelsFilterItem
                        name='models-filter-item'
                        id='models-filter-all'
                    >
                        Все
                    </ModelsFilterItem>
                </div>
                {categories ? (
                    categories.map(({ id, name }) => (
                        <div className='models-filter__item' key={id}>
                            <ModelsFilterItem name='models-filter-item' id={id}>
                                {name}
                            </ModelsFilterItem>
                        </div>
                    ))
                ) : (
                    <p>Загрузка категорий ...</p>
                )}
            </div>
        </div>
    );
};
