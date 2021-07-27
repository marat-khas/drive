import { OrderStateDefault } from './default';
import { OrderAction, OrderActionTypes, OrderState } from './types';

export const orderReducer = (
    state = OrderStateDefault,
    action: OrderAction
): OrderState => {
    switch (action.type) {
        case OrderActionTypes.CITY_SELECT: {
            return {
                ...state,
                city: { ...state.city, value: action.payload },
            };
        }
        case OrderActionTypes.POINT_SELECT: {
            return {
                ...state,
                point: {
                    ...state.point,
                    value: action.payload,
                    cart: {
                        ...state.point.cart,
                        value: action.payload
                            ? `${action.payload.cityId.name}, ${action.payload.address}`
                            : null,
                    },
                },
            };
        }
        case OrderActionTypes.CATEGORY_SELECT: {
            return {
                ...state,
                category: { ...state.category, value: action.payload },
            };
        }
        case OrderActionTypes.CAR_SELECT: {
            return {
                ...state,
                car: {
                    ...state.car,
                    value: action.payload,
                    cart: {
                        ...state.car.cart,
                        value: action.payload ? action.payload.name : null,
                    },
                },
            };
        }
        default:
            return state;
    }
};
