import { TabsState } from '@state/tabs/types';
import { OrderState } from '@state/order/types';
import { store } from '@state/store';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    tabs: TabsState;
    order: OrderState;
}