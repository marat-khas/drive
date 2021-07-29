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
    date: {
        from: null,
        to: null,
        cart: {
            name: 'Длительность аренды',
            value: null,
        },
    },
    rate: {
        value: null,
        cart: {
            name: 'Тариф',
            value: null,
        },
    },
};
