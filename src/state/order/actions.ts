import { Car } from '@state/cars/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';

import { CarSelect, CitySelect, OrderActionTypes, PointSelect } from './types';

export const CitySelectAction = (city: City | null): CitySelect => ({
    type: OrderActionTypes.CITY_SELECT,
    payload: city,
});

export const PointSelectAction = (point: Point | null): PointSelect => ({
    type: OrderActionTypes.POINT_SELECT,
    payload: point,
});

export const CarSelectAction = (car: Car | null): CarSelect => ({
    type: OrderActionTypes.CAR_SELECT,
    payload: car,
});
