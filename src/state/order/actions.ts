import { Car } from '@state/cars/types';
import { Category } from '@state/categories/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';

import {
    CarSelect,
    CategorySelect,
    CitySelect,
    ColorSelect,
    OrderActionTypes,
    PointSelect,
} from './types';

export const CitySelectAction = (city: City | null): CitySelect => ({
    type: OrderActionTypes.CITY_SELECT,
    payload: city,
});

export const PointSelectAction = (point: Point | null): PointSelect => ({
    type: OrderActionTypes.POINT_SELECT,
    payload: point,
});

export const CategorySelectAction = (
    category: Category | null
): CategorySelect => ({
    type: OrderActionTypes.CATEGORY_SELECT,
    payload: category,
});

export const CarSelectAction = (car: Car | null): CarSelect => ({
    type: OrderActionTypes.CAR_SELECT,
    payload: car,
});

export const ColorSelectAction = (color: string | null): ColorSelect => ({
    type: OrderActionTypes.COLOR_SELECT,
    payload: color,
});
