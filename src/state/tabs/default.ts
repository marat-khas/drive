import { TabsState } from './types';

export const tabsStateDefault: TabsState = {
    active: 0,
    tabs: [
        {
            label: 'Местоположение',
            btnText: 'Выбрать модель',
            available: true,
            complete: false,
        },
        {
            label: 'Модель',
            btnText: 'Дополнительно',
            available: false,
            complete: false,
        },
        {
            label: 'Дополнительно',
            btnText: 'Итого',
            available: false,
            complete: false,
        },
        {
            label: 'Итого',
            btnText: 'Заказать',
            available: false,
            complete: true,
        },
    ],
};
