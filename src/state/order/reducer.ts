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
                point: { ...state.point, value: action.payload },
            };
        }
        case OrderActionTypes.CAR_SELECT: {
            return {
                ...state,
                car: { ...state.car, value: action.payload },
            };
        }
        default:
            return state;
    }
};
