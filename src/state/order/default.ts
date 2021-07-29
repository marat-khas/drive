import { OrderState } from './types';

export const OrderStateDefault: OrderState = {
    city: {
        value: null,
    },
    point: {
        value: null,
        cart: {
            name: 'Пункт выдачи',
            value: null,
        },
    },
    category: {
        value: null,
    },
    car: {
        value: null,
        cart: {
            name: 'Модель',
            value: null,
        },
    },
    color: {
        value: null,
        cart: {
            name: 'Цвет',
            value: null,
        },
    },
};
