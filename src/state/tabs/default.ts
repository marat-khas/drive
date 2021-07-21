import { TabsState } from './types';

export const tabsStateDefault: TabsState = {
  active: 0,
  tabs: [
    {
      label: 'Местоположение',
      available: true,
      complete: false
    }, {
      label: 'Модель (активна для примера)',
      available: true,
      complete: false
    }, {
      label: 'Дополнительно',
      available: false,
      complete: false
    }, {
      label: 'Итого',
      available: false,
      complete: false
    }
  ]
}