import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModelsCard } from '@components/models/models-card';
import { ModelsFilter } from '@components/models/models-filter';
import { GetCarsAction } from '@state/cars/actions';
import { getCars } from '@state/selectors';

import './models.scss';

export const Models: FC = () => {
    const dispatch = useDispatch();
    const cars = useSelector(getCars);

    useEffect(() => {
        if (!cars) {
            dispatch(GetCarsAction());
        }
    }, [cars, dispatch]);

    return (
        <div className='models'>
            <div className='models__filter'>
                <ModelsFilter />
            </div>
            <div className='models__cards'>
                {cars ? (
                    cars.map((car) => (
                        <div className='models__card' key={car.name}>
                            <ModelsCard car={car} />
                        </div>
                    ))
                ) : (
                    <>Загрузка моделей ...</>
                )}
            </div>
        </div>
    );
};
