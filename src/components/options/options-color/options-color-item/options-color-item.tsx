import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Radio } from '@components/common/radio';
import { ColorSelectAction } from '@state/order/actions';
import { getColor } from '@state/selectors';

import { OptionsColorItemProps } from './types';

export const OptionsColorItem: FC<OptionsColorItemProps> = ({ color }) => {
    const dispatch = useDispatch();
    const selectedColor = useSelector(getColor);
    const changeHandle = () => {
        dispatch(ColorSelectAction(color));
    };
    return (
        <div className='options__input' key={color}>
            <Radio
                name='options-color'
                id={`options-color-${color}`}
                checked={selectedColor.value === color}
                onChange={changeHandle}
            >
                {color}
            </Radio>
        </div>
    );
};
