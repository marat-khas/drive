import { places } from '@mocks/location';

import { LocationState } from './types';

export const LocationStateDefault: LocationState = {
    city: places[0],
    point: null,
};
