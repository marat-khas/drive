import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getCar } from '@state/selectors';

import { OptionsFormColorItem } from './options-form-color-item';

export const OptionsFormColor: FC = () => {
    const car = useSelector(getCar);
    return (
        <div>
            {car ? (
                car.value?.colors.map((color) => (
                    <OptionsFormColorItem key={color} color={color} />
                ))
            ) : (
                <p>Не выбрана модель авто ...</p>
            )}
        </div>
    );
};
