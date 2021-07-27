import { CarsState } from '@state/cars/types';
import { CategoriesState } from '@state/categories/types';
import { CitiesState } from '@state/cities/types';
import { GlobalState } from '@state/global/types';
import { OrderState } from '@state/order/types';
import { PointsState } from '@state/points/types';
import { store } from '@state/store';
import { TabsState } from '@state/tabs/types';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    cars: CarsState;
    categories: CategoriesState;
    cities: CitiesState;
    global: GlobalState;
    order: OrderState;
    points: PointsState;
    tabs: TabsState;
}
