import { GlobalStateDefault } from './default';
import { GlobalAction, GlobalActionTypes, GlobalState } from './types';

export const globalReducer = (
    state = GlobalStateDefault,
    action: GlobalAction
): GlobalState => {
    switch (action.type) {
        case GlobalActionTypes.LOADING_START: {
            return {
                ...state,
                loading: [...state.loading, action.payload],
            };
        }
        case GlobalActionTypes.LOADING_END: {
            return {
                ...state,
                loading: [
                    ...state.loading.filter(
                        (process) => process !== action.payload
                    ),
                ],
            };
        }
        default:
            return state;
    }
};
