import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { carsReducer } from '@state/cars/reducer';
import { globalReducer } from '@state/global/reducer';
import { locationReducer } from '@state/location/reducer';
import { orderReducer } from '@state/order/reducer';
import { tabsReducer } from '@state/tabs/reducer';
import { RootState } from '@state/types';

const rootReducer = combineReducers<RootState>({
    cars: carsReducer,
    global: globalReducer,
    location: locationReducer,
    order: orderReducer,
    tabs: tabsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
