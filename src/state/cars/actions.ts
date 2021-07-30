import { Dispatch } from 'redux';

import { getCars } from '@services/car';
import {
    LoadingEndAction,
    LoadingStartAction,
    ModalShowAction,
} from '@state/global/actions';

import { Car, CarsActionTypes, GetCars } from './types';

export const GetCarsSuccessAction = (cars: Car[]): GetCars => ({
    type: CarsActionTypes.GET_CARS_SUCCESS,
    payload: cars,
});

export const GetCarsAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('Загрузка автомобилей ...'));
    getCars()
        .then((data) => data.filter((car) => car.colors && car.colors.length))
        .then((data) => {
            dispatch(GetCarsSuccessAction(data));
        })
        .catch((error) => {
            dispatch(
                ModalShowAction({
                    head: 'Ошибка!',
                    body: error,
                })
            );
        })
        .finally(() => {
            dispatch(LoadingEndAction('Загрузка автомобилей ...'));
        });
};
