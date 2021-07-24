import { Dispatch } from 'redux';

import { getCar } from '@services/car';
import { LoadingStartAction, LoadingEndAction } from '@state/global/actions';

import {
  Car,
  CarsActionTypes,
  GetCars
} from './types';

export const GetCarsSuccessAction = (cars: Car[]): GetCars => ({
  type: CarsActionTypes.GET_CARS_SUCCESS,
  payload: cars
});

export const GetCarsAction = () => (dispatch: Dispatch<any>) => {
  dispatch(LoadingStartAction());
  getCar()
  .then((data) => {
    dispatch(GetCarsSuccessAction(data));
    dispatch(LoadingEndAction());
  })
  .catch((error) => {
    dispatch(LoadingEndAction());
    console.log(error);
  });
}