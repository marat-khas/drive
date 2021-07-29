import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Radio } from '@components/common/radio';
import { ColorSelectAction } from '@state/order/actions';
import { getColor } from '@state/selectors';

export interface OptionsFormColorItemProps {
    color: string;
}

export const OptionsFormColorItem: FC<OptionsFormColorItemProps> = ({
    color,
}) => {
    const dispatch = useDispatch();
    const selectedColor = useSelector(getColor);
    const changeHandle = () => {
        dispatch(ColorSelectAction(color));
    };
    return (
        <div className='options-form__input' key={color}>
            <Radio
                name='options-form-color'
                id={`options-form-color-${color}`}
                checked={selectedColor.value === color}
                onChange={changeHandle}
            >
                {color}
            </Radio>
        </div>
    );
};
