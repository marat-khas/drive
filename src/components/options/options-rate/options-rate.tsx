import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OptionsRateItem } from '@components/options/options-rate/options-rate-item';
import { GetRatesAction } from '@state/rates/actions';
import { getRates } from '@state/selectors';

export const OptionsRate: FC = () => {
    const dispatch = useDispatch();
    const rates = useSelector(getRates);

    useEffect(() => {
        if (!rates) {
            dispatch(GetRatesAction());
        }
    }, [rates, dispatch]);

    return (
        <div>
            {rates ? (
                rates.map((rate) => (
                    <OptionsRateItem key={rate.id} rate={rate} />
                ))
            ) : (
                <p>Загрузка тарифов</p>
            )}
        </div>
    );
};
