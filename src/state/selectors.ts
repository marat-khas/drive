import { RootState } from './types';

export const getOrder = (state: RootState) => state.order.products;

export const getTabs = (state: RootState) => state.tabs.tabs;

export const getActiveTabIndex = (state: RootState) => state.tabs.active;

export const getCity = (state: RootState) => state.location.city;

export const getPoint = (state: RootState) => state.location.point;
