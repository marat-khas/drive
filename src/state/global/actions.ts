import {
  GlobalActionTypes,
  LoadingStart,
  LoadingEnd
} from './types';

export const LoadingStartAction = (): LoadingStart => ({
  type: GlobalActionTypes.LOADING_START
});

export const LoadingEndAction = (): LoadingEnd => ({
  type: GlobalActionTypes.LOADING_END
});
