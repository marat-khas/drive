import {
    ChangeCity,
    ChangePoint,
    City,
    LocationActionTypes,
    Point,
} from './types';

export const ChangeCityAction = (city: City | null): ChangeCity => ({
    type: LocationActionTypes.CHANGE_CITY,
    payload: city,
});

export const ChangePointAction = (city: Point | null): ChangePoint => ({
    type: LocationActionTypes.CHANGE_POINT,
    payload: city,
});
