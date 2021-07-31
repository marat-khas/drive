import { imgSrc } from '@utils/img-src';
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
                                ? timeFormat(state.date.to - action.payload)
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
                                ? timeFormat(action.payload - state.date.from)
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
        case OrderActionTypes.ADDITIONAL_CHANGE: {
            return {
                ...state,
                additionals: state.additionals.map((additional) => {
                    if (additional.id === action.payload.id) {
                        return {
                            ...additional,
                            selected: action.payload.status,
                        };
                    }
                    return additional;
                }),
            };
        }
        case OrderActionTypes.PRICE_CHANGE: {
            return {
                ...state,
                price: { ...state.price, value: action.payload },
            };
        }
        case OrderActionTypes.CONFIRM_SHOW: {
            return {
                ...state,
                confirm: true,
            };
        }
        case OrderActionTypes.CONFIRM_HIDE: {
            return {
                ...state,
                confirm: false,
            };
        }
        case OrderActionTypes.ORDER_STATUS_CHANGE: {
            return {
                ...state,
                status: action.payload,
            };
        }
        case OrderActionTypes.ORDER_GET: {
            return {
                ...state,
                city: {
                    ...state.city,
                    value: { ...state.city.value, ...action.payload.cityId },
                },
                point: {
                    ...state.point,
                    value: { ...state.point.value, ...action.payload.pointId },
                    cart: {
                        ...state.point.cart,
                        value: `${action.payload.cityId.name}, ${action.payload.pointId.address}`,
                    },
                },
                car: {
                    ...state.car,
                    value: {
                        ...state.car.value,
                        ...action.payload.carId,
                        thumbnail: {
                            ...action.payload.carId.thumbnail,
                            path: imgSrc(action.payload.carId.thumbnail.path),
                        },
                    },
                    cart: {
                        ...state.car.cart,
                        value: action.payload.carId.name,
                    },
                },
                color: {
                    ...state.color,
                    value: action.payload.color,
                    cart: { ...state.color.cart, value: action.payload.color },
                },
                date: {
                    ...state.date,
                    from: action.payload.dateFrom,
                    to: action.payload.dateTo,
                    cart: {
                        ...state.date.cart,
                        value: timeFormat(
                            action.payload.dateTo - action.payload.dateFrom
                        ),
                    },
                },
                rate: {
                    ...state.rate,
                    value: { ...state.rate.value, ...action.payload.rateId },
                    cart: {
                        ...state.rate.cart,
                        value: action.payload.rateId.rateTypeId.name,
                    },
                },
                price: {
                    ...state.price,
                    value: action.payload.price,
                },
                additionals: state.additionals.map((additional) => ({
                    ...additional,
                    selected: action.payload[additional.id] as boolean,
                })),
                status: action.payload.orderStatusId.name,
            };
        }
        default:
            return state;
    }
};
