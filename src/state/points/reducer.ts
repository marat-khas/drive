import { PointsStateDefault } from './default';
import { PointsAction, PointsActionTypes, PointsState } from './types';

export const pointsReducer = (
    state = PointsStateDefault,
    action: PointsAction
): PointsState => {
    switch (action.type) {
        case PointsActionTypes.GET_POINTS_SUCCESS: {
            return {
                ...state,
                points: action.payload,
            };
        }
        default:
            return state;
    }
};
