import { OrderData } from '@services/order/types';
import { Car } from '@state/cars/types';
import { Category } from '@state/categories/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';
import { Rate } from '@state/rates/types';

export interface Cart {
    name: string;
    value: string | null;
}

export interface Additional {
    id: keyof OrderData;
    name: string;
    cost: number;
    selected: boolean;
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
        from: number | null;
        to: number | null;
        cart: Cart;
    };
    rate: {
        value: Rate | null;
        cart: Cart;
    };
    additionals: Additional[];
    confirm: boolean;
    price: {
        value: number | null;
    };
    status: string | null;
}

export enum OrderActionTypes {
    CITY_SELECT = 'CITY_SELECT',
    POINT_SELECT = 'POINT_SELECT',
    CAR_SELECT = 'CAR_SELECT',
    CATEGORY_SELECT = 'CATEGORY_SELECT',
    COLOR_SELECT = 'COLOR_SELECT',
    DATE_FROM_SELECT = 'DATE_FROM_SELECT',
    DATE_TO_SELECT = 'DATE_TO_SELECT',
    RATE_SELECT = 'RATE_SELECT',
    ADDITIONAL_CHANGE = 'ADDITIONAL_CHANGE',
    PRICE_CHANGE = 'PRICE_CHANGE',
    CONFIRM_SHOW = 'CONFIRM_SHOW',
    CONFIRM_HIDE = 'CONFIRM_HIDE',
    ORDER_STATUS_CHANGE = 'ORDER_STATUS_CHANGE',
    ORDER_GET = 'ORDER_GET',
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
    payload: number | null;
}

export interface DateToSelect {
    type: OrderActionTypes.DATE_TO_SELECT;
    payload: number | null;
}

export interface RateSelect {
    type: OrderActionTypes.RATE_SELECT;
    payload: Rate | null;
}

export interface AdditionalChange {
    type: OrderActionTypes.ADDITIONAL_CHANGE;
    payload: {
        id: string;
        status: boolean;
    };
}

export interface PriceChange {
    type: OrderActionTypes.PRICE_CHANGE;
    payload: number | null;
}
export interface ConfirmShow {
    type: OrderActionTypes.CONFIRM_SHOW;
}

export interface ConfirmHide {
    type: OrderActionTypes.CONFIRM_HIDE;
}

export interface OrderStatusChange {
    type: OrderActionTypes.ORDER_STATUS_CHANGE;
    payload: string | null;
}

export interface OrderGet {
    type: OrderActionTypes.ORDER_GET;
    payload: OrderData;
}

export type OrderAction =
    | CitySelect
    | PointSelect
    | CategorySelect
    | CarSelect
    | ColorSelect
    | DateFromSelect
    | DateToSelect
    | RateSelect
    | AdditionalChange
    | PriceChange
    | ConfirmShow
    | ConfirmHide
    | OrderStatusChange
    | OrderGet;
