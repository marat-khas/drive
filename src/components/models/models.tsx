import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModelsCard } from '@components/models/models-card';
import { ModelsFilter } from '@components/models/models-filter';
import { GetCarsAction } from '@state/cars/actions';
import { getCar, getCars, getCategory } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './models.scss';

export const Models: FC = () => {
    const dispatch = useDispatch();

    const category = useSelector(getCategory);
    const cars = useSelector(getCars);
    const selectedCar = useSelector(getCar);

    useEffect(() => {
        if (!cars) {
            dispatch(GetCarsAction());
        }
    }, [cars, dispatch]);

    useEffect(() => {
        const complete = !!selectedCar.value;
        dispatch(TabCompleteAction(1, complete));
        dispatch(TabAvailableAction(2, complete));
    }, [selectedCar.value, dispatch]);

    const modelsCards = cars ? (
        cars
            .filter((car) => {
                if (category.value) {
                    if (car.categoryId) {
                        return category.value.id === car.categoryId.id;
                    }
                    return false;
                }
                return true;
            })
            .map((car) => (
                <div className='models__card' key={car.id}>
                    <ModelsCard car={car} />
                </div>
            ))
    ) : (
        <>Загрузка моделей ...</>
    );

    return (
        <div className='models'>
            <div className='models__filter'>
                <ModelsFilter />
            </div>
            <div className='models__cards'>{modelsCards}</div>
        </div>
    );
};
