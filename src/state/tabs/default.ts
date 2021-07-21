import { TabsState } from './types';

export const tabsStateDefault: TabsState = {
    active: 0,
    tabs: [
        {
            label: 'Местоположение',
            btnText: 'Выбрать модель',
            available: true,
            complete: true,
        },
        {
            label: 'Модель (активна для примера)',
            btnText: 'Дополнительно',
            available: true,
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
            complete: false,
        },
    ],
};
