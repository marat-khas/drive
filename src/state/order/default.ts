import { OrderState } from './types';

export const OrderStateDefault: OrderState = {
    city: {
        value: null,
        cart: null,
    },
    point: {
        value: null,
        cart: 'Пункт выдачи',
    },
    category: {
        value: null,
        cart: null,
    },
    car: {
        value: null,
        cart: 'Модель',
    },
};
