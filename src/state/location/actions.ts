import {
    ChangeCity,
    ChangePoint,
    City,
    LocationActionTypes,
    Point,
} from './types';

export const ChangeCityAction = (city: City | undefined): ChangeCity => ({
    type: LocationActionTypes.CHANGE_CITY,
    payload: city,
});

export const ChangePointAction = (city: Point | undefined): ChangePoint => ({
    type: LocationActionTypes.CHANGE_POINT,
    payload: city,
});
