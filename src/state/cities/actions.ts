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
        dispatch(LoadingStartAction('getCitiesCoords'));
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
                        body: error,
                    })
                );
            })
            .finally(() => {
                dispatch(LoadingEndAction('getCitiesCoords'));
            });
    };

export const GetCitiesAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('getCities'));
    getCities()
        .then((data) => {
            dispatch(GetCitiesCoordsAction(data));
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
            dispatch(LoadingEndAction('getCities'));
        });
};
