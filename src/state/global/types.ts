export interface GlobalState {
  loading: boolean
}

export enum GlobalActionTypes {
  LOADING_START = 'LOADING_START',
  LOADING_END = 'LOADING_END',
}

export interface LoadingStart {
  type: GlobalActionTypes.LOADING_START;
}

export interface LoadingEnd {
  type: GlobalActionTypes.LOADING_END;
}

export type GlobalAction = LoadingStart | LoadingEnd;