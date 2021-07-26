import { GlobalActionTypes, LoadingEnd, LoadingStart } from './types';

export const LoadingStartAction = (process: string): LoadingStart => ({
    type: GlobalActionTypes.LOADING_START,
    payload: process,
});

export const LoadingEndAction = (process: string): LoadingEnd => ({
    type: GlobalActionTypes.LOADING_END,
    payload: process,
});
