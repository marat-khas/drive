import { CartClear, OrderActionTypes, Product, ProductAdd } from './types';

export const ProductAddAction = (product: Product): ProductAdd => ({
    type: OrderActionTypes.PRODUCT_ADD,
    payload: product,
});

export const CartClearAction = (): CartClear => ({
    type: OrderActionTypes.CART_CLEAR,
});
