import { Dispatch } from 'redux';

import { getCities } from '@services/city';
import { getCoords } from '@services/coords';
import {
    LoadingEndAction,
    LoadingStartAction,
    ModalShowAction,
} from '@state/global/actions';

import { CitiesActionTypes, City, GetCities } from './types';

export const GetCitiesSuccessAction = (cities: City[]): GetCities => ({
    type: CitiesActionTypes.GET_CITIES_SUCCESS,
    payload: cities,
});

export const GetCitiesCoordsAction =
    (cities: Omit<City, 'coords'>[]) => (dispatch: Dispatch<any>) => {
        dispatch(LoadingStartAction('Загрузка координат городов ...'));
        Promise.all(cities.map((city) => getCoords(city.name)))
            .then((coords) => {
                dispatch(
                    GetCitiesSuccessAction(
                        cities.map((city, index) => ({
                            ...city,
                            coords: coords[index],
                        }))
                    )
                );
            })
            .catch((error) => {
                dispatch(
                    ModalShowAction({
                        head: 'Ошибка!',
                        body: error.response.data,
                    })
                );
            })
            .finally(() => {
                dispatch(LoadingEndAction('Загрузка координат городов ...'));
            });
    };

export const GetCitiesAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('Загрузка городов ...'));
    getCities()
        .then((data) => {
            dispatch(GetCitiesCoordsAction(data));
        })
        .catch((error) => {
            dispatch(
                ModalShowAction({
                    head: 'Ошибка!',
                    body: error.response.data,
                })
            );
        })
        .finally(() => {
            dispatch(LoadingEndAction('Загрузка городов ...'));
        });
};
