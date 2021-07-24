export type Product = {
    name: string;
    info: string;
};

export interface OrderState {
    products: Product[] | [];
}

export enum OrderActionTypes {
    PRODUCT_ADD = 'PRODUCT_ADD',
    CART_CLEAR = 'CART_CLEAR',
}

export interface ProductAdd {
    type: OrderActionTypes.PRODUCT_ADD;
    payload: Product;
}

export interface CartClear {
    type: OrderActionTypes.CART_CLEAR;
}

export type OrderAction = ProductAdd | CartClear;
