import { Car } from '@state/cars/types';
import { Category } from '@state/categories/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';

export interface Cart {
    name: string;
    value: string | null;
}

export interface OrderState {
    city: {
        value: City | null;
    };
    point: {
        value: Point | null;
        cart: Cart;
    };
    category: {
        value: Category | null;
    };
    car: {
        value: Car | null;
        cart: Cart;
    };
    color: {
        value: string | null;
        cart: Cart;
    };
    date: {
        from: Date | null;
        to: Date | null;
        cart: Cart;
    };
}

export enum OrderActionTypes {
    CITY_SELECT = 'CITY_SELECT',
    POINT_SELECT = 'POINT_SELECT',
    CAR_SELECT = 'CAR_SELECT',
    CATEGORY_SELECT = 'CATEGORY_SELECT',
    COLOR_SELECT = 'COLOR_SELECT',
    DATE_FROM_SELECT = 'DATE_FROM_SELECT',
    DATE_TO_SELECT = 'DATE_TO_SELECT',
}

export interface CitySelect {
    type: OrderActionTypes.CITY_SELECT;
    payload: City | null;
}

export interface PointSelect {
    type: OrderActionTypes.POINT_SELECT;
    payload: Point | null;
}

export interface CategorySelect {
    type: OrderActionTypes.CATEGORY_SELECT;
    payload: Category | null;
}

export interface CarSelect {
    type: OrderActionTypes.CAR_SELECT;
    payload: Car | null;
}

export interface ColorSelect {
    type: OrderActionTypes.COLOR_SELECT;
    payload: string | null;
}

export interface DateFromSelect {
    type: OrderActionTypes.DATE_FROM_SELECT;
    payload: Date | null;
}

export interface DateToSelect {
    type: OrderActionTypes.DATE_TO_SELECT;
    payload: Date | null;
}

export type OrderAction =
    | CitySelect
    | PointSelect
    | CategorySelect
    | CarSelect
    | ColorSelect
    | DateFromSelect
    | DateToSelect;
