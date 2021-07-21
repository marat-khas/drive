import { LocationState } from '@state/location/types';
import { OrderState } from '@state/order/types';
import { store } from '@state/store';
import { TabsState } from '@state/tabs/types';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    location: LocationState;
    order: OrderState;
    tabs: TabsState;
}
