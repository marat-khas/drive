import { Dispatch } from 'redux';

import { getCars } from '@services/car';
import { LoadingEndAction, LoadingStartAction } from '@state/global/actions';

import { Car, CarsActionTypes, GetCars } from './types';

export const GetCarsSuccessAction = (cars: Car[]): GetCars => ({
    type: CarsActionTypes.GET_CARS_SUCCESS,
    payload: cars,
});

export const GetCarsAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('getCars'));
    getCars()
        .then((data) => {
            dispatch(GetCarsSuccessAction(data));
            dispatch(LoadingEndAction('getCars'));
        })
        .catch((error) => {
            dispatch(LoadingEndAction('getCars'));
            console.log(error);
        });
};
