import { RootState } from './types';

export const getLoadingStatus = (state: RootState) => state.global.loading;

export const getCities = (state: RootState) => state.cities.cities;

export const getPoints = (state: RootState) => state.points.points;

export const getCars = (state: RootState) => state.cars.cars;

export const getOrder = (state: RootState) => state.order.products;

export const getTabs = (state: RootState) => state.tabs.tabs;

export const getActiveTabIndex = (state: RootState) => state.tabs.active;

export const getCity = (state: RootState) => state.order.city;

export const getPoint = (state: RootState) => state.order.point;
