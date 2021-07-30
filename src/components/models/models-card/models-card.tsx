import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { CarSelectAction } from '@state/order/actions';
import { getCar } from '@state/selectors';

import './models-card.scss';

import { CarProps } from './types';

export const ModelsCard: FC<CarProps> = ({ car }) => {
    const { path } = car.thumbnail;

    const dispatch = useDispatch();

    const selectedCar = useSelector(getCar);

    const clickHandle = () => {
        dispatch(CarSelectAction(car));
    };

    const classes = classNames('models-card', {
        isSelected: selectedCar.value === car,
    });

    return (
        <div className={classes} onClick={clickHandle}>
            <div className='models-card__head'>
                <div className='models-card__title'>{car.name}</div>
                <div className='models-card__cost'>{`${car.priceMin} - ${car.priceMax} ₽`}</div>
            </div>
            <div className='models-card__img'>
                <img src={path} alt={car.name} />
            </div>
        </div>
    );
};
