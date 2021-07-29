import { RatesStateDefault } from './default';
import { RatesAction, RatesActionTypes, RatesState } from './types';

export const ratesReducer = (
    state = RatesStateDefault,
    action: RatesAction
): RatesState => {
    switch (action.type) {
        case RatesActionTypes.GET_RATES_SUCCESS: {
            return {
                ...state,
                rates: action.payload,
            };
        }
        default:
            return state;
    }
};
