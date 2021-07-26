import { OrderStateDefault } from './default';
import { OrderAction, OrderActionTypes, OrderState } from './types';

export const orderReducer = (
    state = OrderStateDefault,
    action: OrderAction
): OrderState => {
    switch (action.type) {
        case OrderActionTypes.PRODUCT_ADD: {
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        }
        case OrderActionTypes.CART_CLEAR: {
            return {
                ...state,
                products: [],
            };
        }
        case OrderActionTypes.CITY_SELECT: {
            return {
                ...state,
                city: action.payload,
            };
        }
        case OrderActionTypes.POINT_SELECT: {
            return {
                ...state,
                point: action.payload,
            };
        }
        default:
            return state;
    }
};
