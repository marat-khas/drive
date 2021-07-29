import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getCar } from '@state/selectors';

import { OptionsColorItem } from './options-color-item';

export const OptionsColor: FC = () => {
    const car = useSelector(getCar);
    return (
        <div>
            {car ? (
                car.value?.colors.map((color) => (
                    <OptionsColorItem key={color} color={color} />
                ))
            ) : (
                <p>Не выбрана модель авто ...</p>
            )}
        </div>
    );
};
