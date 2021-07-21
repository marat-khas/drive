import { OrderState } from '@state/order/types';
import { store } from '@state/store';
import { TabsState } from '@state/tabs/types';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    tabs: TabsState;
    order: OrderState;
}
