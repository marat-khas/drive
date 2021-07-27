import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { SERVER_URL } from '@constants/urls';
import { Car } from '@state/cars/types';
import { CarSelectAction } from '@state/order/actions';
import { getCar } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './models-card.scss';

export interface CarProps {
    car: Car;
}

export const ModelsCard: FC<CarProps> = ({ car }) => {
    const { path } = car.thumbnail;
    const imgSrc = path.search(/^data/) === -1 ? `${SERVER_URL}/${path}` : path;

    const dispatch = useDispatch();

    const selectedCar = useSelector(getCar);

    const clickHandle = () => {
        dispatch(CarSelectAction(car));
        dispatch(TabCompleteAction(1, true));
        dispatch(TabAvailableAction(2, true));
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
                <img src={imgSrc} alt={car.name} />
            </div>
        </div>
    );
};
