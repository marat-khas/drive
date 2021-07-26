export interface GlobalState {
    loading: string[];
}

export enum GlobalActionTypes {
    LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END',
}

export interface LoadingStart {
    type: GlobalActionTypes.LOADING_START;
    payload: string;
}

export interface LoadingEnd {
    type: GlobalActionTypes.LOADING_END;
    payload: string;
}

export type GlobalAction = LoadingStart | LoadingEnd;
