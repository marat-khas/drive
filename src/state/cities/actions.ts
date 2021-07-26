import { Dispatch } from 'redux';

import { getCities } from '@services/city';
import { getCoords } from '@services/coords';
import { LoadingEndAction, LoadingStartAction } from '@state/global/actions';

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
                dispatch(LoadingEndAction('getCitiesCoords'));
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
                dispatch(LoadingEndAction('getCitiesCoords'));
                console.log(error);
            });
    };

export const GetCitiesAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('getCities'));
    getCities()
        .then((data) => {
            dispatch(GetCitiesCoordsAction(data));
            dispatch(LoadingEndAction('getCities'));
        })
        .catch((error) => {
            dispatch(LoadingEndAction('getCities'));
            console.log(error);
        });
};
