import { orderReducer } from '@state/order/reducer';
import { tabsReducer } from '@state/tabs/reducer';
import { RootState } from '@state/types';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers<RootState>({
    tabs: tabsReducer,
    order: orderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
