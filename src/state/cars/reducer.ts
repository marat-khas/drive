import { SERVER_URL } from '@constants/urls';

import { CarsStateDefault } from './default';
import { CarsAction, CarsActionTypes, CarsState } from './types';

export const carsReducer = (
    state = CarsStateDefault,
    action: CarsAction
): CarsState => {
    switch (action.type) {
        case CarsActionTypes.GET_CARS_SUCCESS: {
            return {
                ...state,
                cars: action.payload.map((car) => {
                    const { path } = car.thumbnail;
                    const src =
                        path.search(/^data/) === -1
                            ? `${SERVER_URL}/${path}`
                            : path;
                    return { ...car, thumbnail: { path: src } };
                }),
            };
        }
        default:
            return state;
    }
};
