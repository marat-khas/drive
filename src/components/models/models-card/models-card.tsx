import { FC } from 'react';

import { SERVER_URL } from '@constants/urls';
import { Car } from '@state/cars/types';

import './models-card.scss';

export interface CarProps {
    car: Car;
}

export const ModelsCard: FC<CarProps> = ({ car }) => {
    const path = car.thumbnail.path;
    const imgSrc = (path.search(/^data/) == -1) ? `${SERVER_URL}/${path}` : path;
    return (
        <div className='models-card'>
            <div className='models-card__head'>
                <div className='models-card__title'>{car.name}</div>
                <div className='models-card__cost'>{`${car.priceMin} - ${car.priceMax} ₽`}</div>
            </div>
            <div className='models-card__img'>
                <img src={imgSrc} alt={car.name} />
            </div>
        </div>
    )
}
