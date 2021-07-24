import { CarsState } from '@state/cars/types';
import { GlobalState } from '@state/global/types';
import { LocationState } from '@state/location/types';
import { OrderState } from '@state/order/types';
import { store } from '@state/store';
import { TabsState } from '@state/tabs/types';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    cars: CarsState;
    global: GlobalState;
    location: LocationState;
    order: OrderState;
    tabs: TabsState;
}
