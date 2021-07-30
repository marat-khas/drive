import { RootState } from './types';

export const getLoading = (state: RootState) => state.global.loading;

export const getModal = (state: RootState) => state.global.modal;

export const getCities = (state: RootState) => state.cities.cities;

export const getPoints = (state: RootState) => state.points.points;

export const getCategories = (state: RootState) => state.categories.categories;

export const getCars = (state: RootState) => state.cars.cars;

export const getRates = (state: RootState) => state.rates.rates;

export const getTabs = (state: RootState) => state.tabs.tabs;

export const getActiveTabIndex = (state: RootState) => state.tabs.active;

export const getOrder = (state: RootState) => state.order;

export const getCategory = (state: RootState) => state.order.category;

export const getCar = (state: RootState) => state.order.car;

export const getColor = (state: RootState) => state.order.color;

export const getDate = (state: RootState) => state.order.date;

export const getRate = (state: RootState) => state.order.rate;

export const getAdditionals = (state: RootState) => state.order.additionals;

export const getCity = (state: RootState) => state.order.city;

export const getPoint = (state: RootState) => state.order.point;

export const getPrice = (state: RootState) => state.order.price.value;

export const getConfirmStatus = (state: RootState) => state.order.confirm;
