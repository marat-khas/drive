import { City } from '@state/cities/types';
import { Point } from '@state/points/types';

import {
    CartClear,
    CitySelect,
    OrderActionTypes,
    PointSelect,
    Product,
    ProductAdd,
} from './types';

export const ProductAddAction = (product: Product): ProductAdd => ({
    type: OrderActionTypes.PRODUCT_ADD,
    payload: product,
});

export const CartClearAction = (): CartClear => ({
    type: OrderActionTypes.CART_CLEAR,
});

export const CitySelectAction = (city: City | null): CitySelect => ({
    type: OrderActionTypes.CITY_SELECT,
    payload: city,
});

export const PointSelectAction = (point: Point | null): PointSelect => ({
    type: OrderActionTypes.POINT_SELECT,
    payload: point,
});
