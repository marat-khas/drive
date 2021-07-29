import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Radio } from '@components/common/radio';
import { RateSelectAction } from '@state/order/actions';
import { getRate } from '@state/selectors';

import { OptionsRateItemProps } from './types';

export const OptionsRateItem: FC<OptionsRateItemProps> = ({ rate }) => {
    const dispatch = useDispatch();

    const selectedRate = useSelector(getRate);
    const changeHandle = () => {
        dispatch(RateSelectAction(rate));
    };
    return (
        <div className='options__input' key={rate.id}>
            <Radio
                name='options-tariff'
                id={`options-tariff${rate.id}`}
                checked={selectedRate.value?.id === rate.id}
                onChange={changeHandle}
            >
                {rate.rateTypeId.name}
            </Radio>
        </div>
    );
};
