import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { carsReducer } from '@state/cars/reducer';
import { categoriesReducer } from '@state/categories/reducer';
import { citiesReducer } from '@state/cities/reducer';
import { globalReducer } from '@state/global/reducer';
import { orderReducer } from '@state/order/reducer';
import { pointsReducer } from '@state/points/reducer';
import { ratesReducer } from '@state/rates/reducer';
import { tabsReducer } from '@state/tabs/reducer';
import { RootState } from '@state/types';

const rootReducer = combineReducers<RootState>({
    cars: carsReducer,
    categories: categoriesReducer,
    cities: citiesReducer,
    global: globalReducer,
    order: orderReducer,
    points: pointsReducer,
    rates: ratesReducer,
    tabs: tabsReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
