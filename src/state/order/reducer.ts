import { timeFormat } from '@utils/time-format';

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
                color: {
                    ...state.color,
                    value: null,
                    cart: {
                        ...state.color.cart,
                        value: null,
                    },
                },
            };
        }
        case OrderActionTypes.COLOR_SELECT: {
            return {
                ...state,
                color: {
                    ...state.color,
                    value: action.payload,
                    cart: {
                        ...state.color.cart,
                        value: action.payload,
                    },
                },
            };
        }
        case OrderActionTypes.DATE_FROM_SELECT: {
            return {
                ...state,
                date: {
                    ...state.date,
                    from: action.payload,
                    cart: {
                        ...state.date.cart,
                        value:
                            action.payload && state.date.to
                                ? timeFormat(
                                      state.date.to.getTime() -
                                          action.payload.getTime()
                                  )
                                : null,
                    },
                },
            };
        }
        case OrderActionTypes.DATE_TO_SELECT: {
            return {
                ...state,
                date: {
                    ...state.date,
                    to: action.payload,
                    cart: {
                        ...state.date.cart,
                        value:
                            action.payload && state.date.from
                                ? timeFormat(
                                      action.payload.getTime() -
                                          state.date.from.getTime()
                                  )
                                : null,
                    },
                },
            };
        }
        case OrderActionTypes.RATE_SELECT: {
            return {
                ...state,
                rate: {
                    ...state.rate,
                    value: action.payload,
                    cart: {
                        ...state.rate.cart,
                        value: action.payload!.rateTypeId.name,
                    },
                },
            };
        }
        default:
            return state;
    }
};
