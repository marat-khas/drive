import { RootState } from './types';

export const getTabs = (state: RootState) => state.tabs.tabs;

export const getActiveTabIndex = (state: RootState) => state.tabs.active;