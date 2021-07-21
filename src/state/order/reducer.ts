import { OrderAction, OrderActionTypes, OrderState } from './types';
import { OrderStateDefault } from './default';

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
        products: []
      };
    }
    default:
      return state;
  }
};