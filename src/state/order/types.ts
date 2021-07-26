import { City } from '@state/cities/types';
import { Point } from '@state/points/types';

export type Product = {
    name: string;
    info: string;
};

export interface OrderState {
    products: Product[] | [];
    city: City | null;
    point: Point | null;
}

export enum OrderActionTypes {
    PRODUCT_ADD = 'PRODUCT_ADD',
    CART_CLEAR = 'CART_CLEAR',
    CITY_SELECT = 'CITY_SELECT',
    POINT_SELECT = 'POINT_SELECT',
}

export interface ProductAdd {
    type: OrderActionTypes.PRODUCT_ADD;
    payload: Product;
}

export interface CartClear {
    type: OrderActionTypes.CART_CLEAR;
}

export interface CitySelect {
    type: OrderActionTypes.CITY_SELECT;
    payload: City | null;
}

export interface PointSelect {
    type: OrderActionTypes.POINT_SELECT;
    payload: Point | null;
}

export type OrderAction = ProductAdd | CartClear | CitySelect | PointSelect;
