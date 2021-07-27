import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Radio } from '@components/common/radio';
import { CategorySelectAction } from '@state/order/actions';
import { getCategories, getCategory } from '@state/selectors';

import { ModelsFilterItemProps } from './types';

export const ModelsFilterItem: FC<ModelsFilterItemProps> = ({
    children,
    name,
    id,
}) => {
    const dispatch = useDispatch();

    const categories = useSelector(getCategories);

    const category = useSelector(getCategory);

    const checked = category.value
        ? category.value.id === id
        : id === 'models-filter-all';

    const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && categories) {
            dispatch(
                CategorySelectAction(
                    categories.find((cat) => cat.id === id) || null
                )
            );
        }
    };

    return (
        <div className='models-filter-item'>
            <Radio
                name={name}
                id={id}
                checked={checked}
                onChange={changeHandle}
            >
                {children}
            </Radio>
        </div>
    );
};
