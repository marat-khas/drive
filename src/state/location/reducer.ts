import { LocationStateDefault } from './default';
import { LocationAction, LocationActionTypes, LocationState } from './types';

export const locationReducer = (
    state = LocationStateDefault,
    action: LocationAction
): LocationState => {
    switch (action.type) {
        case LocationActionTypes.CHANGE_CITY: {
            return {
                ...state,
                city: action.payload,
            };
        }
        case LocationActionTypes.CHANGE_POINT: {
            return {
                ...state,
                point: action.payload,
            };
        }
        default:
            return state;
    }
};
