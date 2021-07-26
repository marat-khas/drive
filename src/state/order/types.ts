import { Car } from '@state/cars/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';

export interface OrderState {
    city: {
        value: City | null;
        cart: string | null;
    };
    point: {
        value: Point | null;
        cart: string | null;
    };
    car: {
        value: Car | null;
        cart: string | null;
    };
}

export enum OrderActionTypes {
    CITY_SELECT = 'CITY_SELECT',
    POINT_SELECT = 'POINT_SELECT',
    CAR_SELECT = 'CAR_SELECT',
}

export interface CitySelect {
    type: OrderActionTypes.CITY_SELECT;
    payload: City | null;
}

export interface PointSelect {
    type: OrderActionTypes.POINT_SELECT;
    payload: Point | null;
}

export interface CarSelect {
    type: OrderActionTypes.CAR_SELECT;
    payload: Car | null;
}

export type OrderAction = CitySelect | PointSelect | CarSelect;
